import type { Client } from "../Client";
import { API_VERSION } from "../Constants";
import {
  APIUnavailableGuild,
  GatewayCloseCodes,
  GatewayDispatchEvents,
  GatewayDispatchPayload,
  GatewayGuildCreateDispatch,
  GatewayHeartbeatData,
  GatewayIdentifyData,
  GatewayOpcodes,
  GatewayPresenceUpdateData,
  GatewayReceivePayload,
} from "discord-api-types/v9";
import { ActivityTypes, Presence } from "../types/Types";
import { Guild } from "../structures";
import TypedEmitter from "../utils/TypedEmitter";
import type { ShardEvents } from "../types/events";
import type { GatewayConnectData } from "../types/gateway";
import Collection from "../utils/Collection";
import * as events from "./events/index";
import WebSocket from "ws";

export type GatewayStatus =
  | "disconnected"
  | "connected"
  | "connecting..."
  | "waiting_for_guilds";
export class Shard extends TypedEmitter<ShardEvents> {
  public id: number;
  public ws?: WebSocket;
  public status: GatewayStatus = "disconnected";
  public gatewayURL?: string;
  private readonly intents: number;
  public client: Client;
  public unavailableGuilds: Collection<string, APIUnavailableGuild>;

  public sessionId!: string | null;
  public heartbeatInterval?: number;
  public lastSequence: number = 0;
  public latency: number = Infinity;
  public lastHeartbeatSend: number = Infinity;
  public lastHeartbeatReceive: number = Infinity;
  public lastHeartbeatAck: boolean = true;

  constructor(client: Client, id: number) {
    super();
    this.id = id;
    this.intents = client.intents;
    this.client = client;
    this.unavailableGuilds = new Collection<string, APIUnavailableGuild>();
  }
  identify() {
    const data: GatewayIdentifyData = {
      token: this.client.token,
      shard: [this.id, this.client.clientOptions.shards as number],
      properties: {
        os: process.platform,
        device: "Ubuntu",
        browser: "Libcord",
      },
      compress: false,
      intents: this.intents,
    };
    if (this.client.presence) {
      const presence = this.resolvePresence(this.client.presence);
      data.presence = presence as GatewayPresenceUpdateData;
    }
    this.sendWS(GatewayOpcodes.Identify, data);
    setInterval(() => {
      this.heartbeat();
    }, this.heartbeatInterval);
  }
  public heartbeat() {
    if (!this.lastHeartbeatAck) {
      if (this.sessionId) {
        this.sendWS(GatewayOpcodes.Resume, {
          token: this.client.token,
          session_id: this.sessionId,
          seq: this.lastSequence,
        });
        this.emit("resume", this.id);
      }
    }
    this.lastHeartbeatAck = false;
    this.lastHeartbeatSend = Date.now();
    this.sendWS<GatewayHeartbeatData>(
      GatewayOpcodes.Heartbeat,
      this.lastSequence
    );
  }
  public connect(gatewayData: GatewayConnectData) {
    if (this.ws && this.ws.readyState != WebSocket.CLOSED) {
      this.emit("error", this.id, "The shard is already connected");
      return;
    }
    this.gatewayURL = gatewayData.url;
    this.initWS();
  }

  public initWS() {
    this.status = "connecting...";
    this.ws = new WebSocket(
      `${this.gatewayURL}?v=${API_VERSION}&encoding=json`
    );
    this.ws.on("open", () => this.onWsOpen);
    this.ws.on("message", (msg) => this.onWsMessage(msg as string));
    this.ws.on("error", (error) => this.onWsError(error));
    this.ws.on("close", (code, raison) => this.onWsClose(code, raison));
  }
  private onWsOpen() {
    //
  }
  public onWsMessage(message: string) {
    const msg: GatewayReceivePayload = JSON.parse(
      message
    ) as GatewayReceivePayload;
    if (msg.s) this.lastSequence = msg.s;
    switch (msg.op) {
      case GatewayOpcodes.Hello:
        this.heartbeatInterval = msg.d.heartbeat_interval;
        this.identify();
        break;
      case GatewayOpcodes.Dispatch:
        if (
          this.status === "waiting_for_guilds" &&
          msg.t === <any>GatewayDispatchEvents.GuildCreate
        ) {
          const { d } = msg as GatewayGuildCreateDispatch;
          if (this.client.clientOptions.cache?.guilds) {
            this.client.guilds.set(d.id, new Guild(this.client, d));
          }
          this.unavailableGuilds.delete(d.id);
          if (this.unavailableGuilds.size === 0) {
            this.status = "connected";
            this.emit("guildsReceived", this.id);
          }
        } else {
          this.handleEvent(msg as GatewayDispatchPayload);
        }
        break;
      case GatewayOpcodes.InvalidSession:
        this.lastSequence = 0;
        this.sessionId = null;
        this.identify();
        break;
      case GatewayOpcodes.HeartbeatAck:
        this.lastHeartbeatAck = true;
        this.lastHeartbeatReceive = Date.now();
        this.latency = this.lastHeartbeatReceive - this.lastHeartbeatSend;
        break;
    }
  }
  public disconnect() {
    this.ws?.close(1_000);
  }
  public handleEvent(msg: GatewayDispatchPayload) {
    this.emit("debug", msg.d, msg.t);
    switch (msg.t) {
      case GatewayDispatchEvents.Ready:
        this.heartbeat();
        this.sessionId = msg.d.session_id;
        if (msg.d.guilds.length > 0) {
          this.status = "waiting_for_guilds";
          for (const g of msg.d.guilds) {
            this.unavailableGuilds.set(g.id, g);
          }
        } else {
          this.status = "connected";
        }
        events.READY(this, msg.d);
        break;
      case GatewayDispatchEvents.MessageCreate:
        events.MESSAGE_CREATE(this, msg.d);
        break;
      case GatewayDispatchEvents.InteractionCreate:
        events.INTERACTION_CREATE(this, msg.d);
        break;
    }
  }

  private onWsError(err: Error) {}

  private onWsClose(code: number, reason: string) {
    if (code) {
      let error: string | Error = "Unknown";
      switch (code) {
        case GatewayCloseCodes.InvalidIntents:
          error = new Error("Invalid intents were specified");
          this.sessionId = null;
          break;
        case GatewayCloseCodes.InvalidShard:
          error = new Error("Invalid shard");
          this.sessionId = null;
          break;
        case GatewayCloseCodes.ShardingRequired:
          error = new Error("A shard is having too much guilds (>2500)");
          this.sessionId = null;

          break;
        case GatewayCloseCodes.AlreadyAuthenticated:
          error = new Error("Gateway is already authenticated");
          this.sessionId = null;

          break;
        case GatewayCloseCodes.AuthenticationFailed:
          error = new Error("Authentication failed.");
          this.sessionId = null;

          break;
        case GatewayCloseCodes.RateLimited:
          error = new Error("Shard has been rate limited.");
          this.sessionId = null;

          break;
        case GatewayCloseCodes.UnknownOpcode:
          error = new Error("Gateway received an unknown code");
          this.sessionId = null;

          break;
      }
      this.emit("error", this.id, error);
      this.emit("disconnect", this.id, code, error);
    }
  }

  public sendWS<T = {}>(code: GatewayOpcodes, data: T) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    this.ws.send(JSON.stringify({ op: code, d: data }));
  }

  public updatePresence(presence: Presence) {
    const data = this.resolvePresence(presence);

    this.sendWS(GatewayOpcodes.PresenceUpdate, data);
  }

  resolvePresence(presence: Presence): any {
    const data: { activities: any[]; afk: boolean; status: string } = {
      status: presence.status || "online",
      afk: !!presence.afk,
      activities: [],
    };
    if (presence.activity) {
      if (presence.activity.type === "streaming") {
        data.activities.push({
          name: presence.activity.name,
          type: ActivityTypes.streaming,
          url: presence.activity.url,
        });
      } else {
        data.activities.push({
          name: presence.activity.name,
          type: presence.activity.type
            ? ActivityTypes[presence.activity.type]
            : 0,
        });
      }
    }
    return data;
  }
}
