import type { Client } from "../Client";
import { API_VERSION } from "../Constants";
import {
  GatewayCloseCodes,
  GatewayDispatchEvents,
  GatewayDispatchPayload,
  GatewayHeartbeatData,
  GatewayIdentifyData,
  GatewayOpcodes,
  GatewayPresenceUpdateData,
  GatewayReceivePayload,
} from "discord-api-types/v9";
import { ActivityTypes, Presence } from "../types/Types";
import { ClientUser } from "../structures/ClientUser";
import TypedEmitter from "../utils/TypedEmitter";
import type { ShardEvents } from "../types/events";
import type { GatewayConnectData } from "../types/gateway";
import { sleep } from "../utils/Utils";
import { ClientApplication } from "../structures/Application";
import WebSocket = require("ws");

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
      this.client.emit("error", new Error("the bot are already connect !"));
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
        const { t } = msg as GatewayDispatchPayload;
        if (
          this.status === "waiting_for_guilds" &&
          t === <any>GatewayDispatchEvents.GuildCreate
        ) {
          this.status = "connected";
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
        this.status = "waiting_for_guilds";
        this.emit("ready", this.id);
        this.client.user = new ClientUser(this.client, msg.d.user);
        this.client.application = new ClientApplication(
          this.client,
          msg.d.application
        );
        sleep(10000);
        if (this.status === "waiting_for_guilds") this.status = "connected";
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
      this.emit("error", error, this.id);
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
