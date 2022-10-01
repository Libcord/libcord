import {
  APIUnavailableGuild,
  GatewayChannelModifyDispatchData,
  GatewayDispatchEvents,
  GatewayDispatchPayload,
  GatewayGuildCreateDispatchData,
  GatewayHelloData,
  GatewayIdentifyData,
  GatewayOpcodes,
  GatewayPresenceUpdateData,
  GatewayReceivePayload,
  GatewayThreadCreateDispatchData,
} from "discord-api-types/v9";
import { EventEmitter } from "events";
import { Client } from "../Client";
import { CLIENT_EVENTS, GatewayConnectData } from "../Constants";
import { ActivityTypes, Guild, Presence } from "../structures";
import { platform } from "../utils/Platform";
import { Snowflake } from "../utils/Snowflake";
import * as ACTIONS from "./actions";
import { AWebSocket } from "./WebSocket";
import { CustomMessageData } from "../gateway/actions/MESSAGE_CREATE";

export interface rawWSEvent {
  data: any;
  eventName: string;
}

interface Actions {
  READY?: ACTIONS.READY;
  MESSAGE?: ACTIONS.MESSAGE_CREATE;
  CHANNEL_CREATE?: ACTIONS.CHANNEL_CREATE;
  CHANNEL_EDIT?: ACTIONS.CHANNEL_EDIT;
  CHANNEL_DELETE?: ACTIONS.CHANNEL_DELETE;
  ROLE_CREATE?: ACTIONS.ROLE_CREATE;
  ROLE_EDIT?: ACTIONS.ROLE_EDIT;
  ROLE_DELETE?: ACTIONS.ROLE_DELETE;
  INTERACTION_CREATE?: ACTIONS.INTERACTION_CREATE;
  GUILD_CREATE?: ACTIONS.GUILD_CREATE;
  GUILD_DELETE?: ACTIONS.GUILD_DELETE;
  THREAD_CREATE?: ACTIONS.THREAD_CREATE;
  THREAD_DELETE?: ACTIONS.THREAD_DELETE;
}

export type GatewayStatus =
  | "disconnected"
  | "connected"
  | "connecting..."
  | "waiting_for_guilds";

export class Gateway {
  public ws?: AWebSocket;
  public status: GatewayStatus = "disconnected";
  public gatewayURL?: string;
  public client: Client;
  public actions: Actions = {};
  public heartbeatInterval?: number;
  public lastSequence: number = 0;
  public latency: number = Infinity;
  public lastHeartbeatSend: number = Infinity;
  public lastHeartbeatReceive: number = Infinity;
  public lastHeartbeatAck: boolean = true;
  public emitter: EventEmitter;
  private _token!: string;
  private _url!: string;
  private sessionId!: string;
  private readonly intents: number;

  constructor(client: Client, emitter: any) {
    this.intents = client.intents;
    this.client = client;
    this.emitter = emitter;
    this.loadActions();
  }

  loadActions() {
    this.actions.READY = new ACTIONS.READY(this.client, this.client);
    this.actions.MESSAGE = new ACTIONS.MESSAGE_CREATE(this.client, this.client);
    this.actions.INTERACTION_CREATE = new ACTIONS.INTERACTION_CREATE(
      this.client,
      this.client
    );
    this.actions.ROLE_CREATE = new ACTIONS.ROLE_CREATE(
      this.client,
      this.client
    );
    this.actions.ROLE_EDIT = new ACTIONS.ROLE_EDIT(this.client, this.client);
    this.actions.ROLE_DELETE = new ACTIONS.ROLE_DELETE(
      this.client,
      this.client
    );
    this.actions.CHANNEL_CREATE = new ACTIONS.CHANNEL_CREATE(
      this.client,
      this.client
    );
    this.actions.CHANNEL_EDIT = new ACTIONS.CHANNEL_EDIT(
      this.client,
      this.client
    );
    this.actions.CHANNEL_DELETE = new ACTIONS.CHANNEL_DELETE(
      this.client,
      this.client
    );
    this.actions.GUILD_CREATE = new ACTIONS.GUILD_CREATE(
      this.client,
      this.client
    );
    this.actions.GUILD_DELETE = new ACTIONS.GUILD_DELETE(
      this.client,
      this.client
    );
    this.actions.THREAD_CREATE = new ACTIONS.THREAD_CREATE(
      this.client,
      this.client
    );
    this.actions.THREAD_DELETE = new ACTIONS.THREAD_DELETE(
      this.client,
      this.client
    );
  }

  identify() {
    const data: GatewayIdentifyData = {
      token: this._token,
      properties: {
        os: platform,
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
          token: this._token,
          session_id: this.sessionId,
          seq: this.lastSequence,
        });
      }
    }
    this.lastHeartbeatAck = false;
    this.lastHeartbeatSend = Date.now();
    this.sendWS(GatewayOpcodes.Heartbeat, this.lastSequence);
  }

  public connect(token: string, data: GatewayConnectData) {
    this._token = token;
    if (this.ws && this.ws.isOpen) {
      this.emitter.emit(
        CLIENT_EVENTS.ERROR,
        new Error("the bot is already connected!")
      );
      return;
    }
    this._url = data.url;
    this.gatewayURL = data.url;
    this.initWS();
  }

  public initWS() {
    this.status = "connecting...";
    this.ws = new AWebSocket(this.client);
    this.ws.on("open", () => this.onWsOpen);
    this.ws.on("message", (msg) => this.onWsMessage(msg));
    this.ws.on("error", (error) => this.onWsError(error));
    this.ws.on("close", (code, raison) => this.onWsClose(code, raison));
  }

  public onWsMessage(message: string) {
    const msg: GatewayReceivePayload = JSON.parse(
      message
    ) as GatewayReceivePayload;
    if (msg.s) this.lastSequence = msg.s;
    switch (msg.op) {
      case GatewayOpcodes.Hello:
        this.heartbeatInterval = (msg.d as GatewayHelloData).heartbeat_interval;
        this.identify();
        break;
      case GatewayOpcodes.HeartbeatAck:
        this.lastHeartbeatAck = true;
        this.lastHeartbeatReceive = Date.now();
        this.latency = this.lastHeartbeatReceive - this.lastHeartbeatSend;
        this.client.ws.ping = this.latency;
        break;
      case GatewayOpcodes.Reconnect:
        (this.ws as AWebSocket).reconnect();
        break;
      case GatewayOpcodes.Dispatch: {
        const { d, t } = msg as GatewayDispatchPayload;
        if (
          this.status === "waiting_for_guilds" &&
          t === <any>GatewayDispatchEvents.GuildCreate
        ) {
          const guild = d as unknown as GatewayGuildCreateDispatchData;
          const g = new Guild(this.client, guild);

          this.client.guilds.add(g);
        } else {
          this.handleEvent(msg as GatewayDispatchPayload).then();
        }
      }
    }
  }

  public async handleEvent(msg: GatewayDispatchPayload) {
    this.emitter.emit(CLIENT_EVENTS.RAW, {
      eventName: msg.t,
      data: msg.d,
    });
    switch (msg.t) {
      case GatewayDispatchEvents.Ready:
        this.heartbeat();
        this.sessionId = msg.d.session_id;
        this.status = "waiting_for_guilds";
        this.actions.READY!.handle(msg.d).then();
        break;
      case GatewayDispatchEvents.MessageCreate:
        this.heartbeat();
        await this.actions.MESSAGE!.handle(msg.d as CustomMessageData);
        break;
      case GatewayDispatchEvents.ChannelCreate:
        this.heartbeat();
        await this.actions.CHANNEL_CREATE!.handle(
          msg.d as unknown as GatewayChannelModifyDispatchData
        );
        break;
      case GatewayDispatchEvents.ChannelUpdate:
        this.heartbeat();
        await this.actions.CHANNEL_EDIT!.handle(msg.d);
        break;
      case GatewayDispatchEvents.ChannelDelete:
        this.heartbeat();
        await this.actions.CHANNEL_DELETE!.handle(msg.d);
        break;
      case GatewayDispatchEvents.ThreadCreate:
        this.heartbeat();
        await this.actions.THREAD_CREATE!.handle(
          msg.d as GatewayThreadCreateDispatchData
        );
        break;
      case GatewayDispatchEvents.ThreadDelete:
        this.heartbeat();
        await this.actions.THREAD_DELETE!.handle(msg.d);
        break;
      case GatewayDispatchEvents.GuildRoleCreate:
        this.heartbeat();
        await this.actions.ROLE_CREATE!.handle(msg.d);
        break;
      case GatewayDispatchEvents.GuildRoleUpdate:
        this.heartbeat();
        await this.actions.ROLE_EDIT!.handle(msg.d);
        break;
      case GatewayDispatchEvents.GuildRoleDelete:
        this.heartbeat();
        await this.actions.ROLE_DELETE!.handle(msg.d);
        break;
      case GatewayDispatchEvents.InteractionCreate:
        this.heartbeat();
        await this.actions.INTERACTION_CREATE!.handle(msg.d);
        break;
      case GatewayDispatchEvents.GuildCreate:
        this.heartbeat();
        await this.actions.GUILD_CREATE!.handle(msg.d);
        break;
      case GatewayDispatchEvents.GuildDelete:
        this.heartbeat();
        await this.actions.GUILD_DELETE!.handle(msg.d);
        break;
    }
  }

  public sendWS(code: GatewayOpcodes, data: any) {
    if (!this.ws || this.ws.isClosed) return;
    this.ws.send(JSON.stringify({ op: code, d: data }));
  }

  public updatePresence(presence: Presence) {
    const data = this.resolvePresence(presence);

    this.sendWS(GatewayOpcodes.PresenceUpdate, data);
  }

  resolvePresence(presence: Presence): any {
    const data: {
      activities: any[];
      since: null;
      afk: boolean;
      status: string;
    } = {
      status: presence.status || "online",
      afk: !!presence.afk,
      since: null,
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

  public async createGuild(guild: APIUnavailableGuild) {
    const response = await this.client.fetchGuild(
      guild.id as unknown as Snowflake
    );
    this.client.guilds.set(response.id as Snowflake, response);
  }

  private onWsOpen() {
    this.emitter.emit(CLIENT_EVENTS.CONNECTED);
  }

  private onWsError(err: Error) {}

  private onWsClose(code: number, reason: string) {}
}
