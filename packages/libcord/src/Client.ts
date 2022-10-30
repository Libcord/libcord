import type {
  APIGatewayBotInfo,
  RESTGetAPIGatewayBotResult,
  RESTGetAPIGatewayResult,
} from "discord-api-types/v9";
import type { Presence } from "./types/Types";
import { RequestHandler } from "./rest/RequestHandler";
import { Intents } from "./Constants";
import type { ClientApplication, ClientUser, Guild, User } from "./structures";
import type { Snowflake } from "./utils/Utils";
import { sleep } from "./utils/Utils";
import TypedEmitter from "./utils/TypedEmitter";
import type { ClientEvents } from "./types/events";
import { ShardManager } from "./gateway/ShardManager";
import type { CacheOptions } from "./types/client";
import Collection from "./utils/Collection";
import type { PrivateChannel } from "./structures/channels/PrivateChannel";
import type { VoiceChannel } from "./structures/channels/VoiceChannel";
import type { TextChannel } from "./structures/channels/TextChannel";
import type { CategoryChannel } from "./structures/channels/CategoryChannel";

export interface ClientOptions {
  /**
   * an object of presence
   */
  presence?: Presence;
  /**
   * token for the bot
   */
  token: string;
  /**
   * list of intents to disable [list-of-intents](https://discord.com/developers/docs/topics/gateway#list-of-intents)
   */
  intents: (keyof typeof Intents)[];

  /**
   * fetch all members and users
   * @default false
   */
  fetchAllMembers?: boolean;
  /**
   * amount of shards to spawn
   */
  shards?: number | "auto";
  /**
   * what the bot needs to cache
   */
  cache?: CacheOptions;
}

export class Client extends TypedEmitter<ClientEvents> {
  /**
   * the token of the bot
   */
  public token: string;
  /**
   * int number for intents
   */
  public intents: number;
  /**
   * bot current presence
   */
  public presence: Presence = {};
  public requestHandler: RequestHandler;

  /**
   * a user object of the bot
   */
  public user?: ClientUser;
  /**
   * Application of the bot (only with flags)
   */
  public application?: ClientApplication;

  public fetchAllMembers: boolean;

  public users = new Collection<Snowflake, User>();
  public guilds = new Collection<Snowflake, Guild>();

  public shards: ShardManager;

  public clientOptions: ClientOptions;

  public channels = new Collection<
    Snowflake,
    PrivateChannel | TextChannel | VoiceChannel | CategoryChannel
  >();
  /**
   * @param options options of the bot
   */
  constructor(options: ClientOptions) {
    super();
    this.token = options.token;

    let intents: number = 0;
    if (options.intents) {
      for (const intent of options.intents) {
        intents += Intents[intent];
      }
    } else {
      throw new Error("Intents were not provided.");
    }
    this.intents = intents;
    this.clientOptions = {
      cache: {
        guilds: options.cache?.guilds ?? true,
        bans: options.cache?.bans ?? false,
        roles: options.cache?.roles ?? true,
        members: options.cache?.members ?? true,
        applicationCommands: options.cache?.applicationCommands ?? true,
      },
      ...options,
    };
    this.presence = options.presence ? options.presence : {};
    this.fetchAllMembers = !!options.fetchAllMembers;
    this.requestHandler = new RequestHandler(this);
    this.shards = new ShardManager(this);
    this.channels = new Collection<
      Snowflake,
      PrivateChannel | TextChannel | VoiceChannel | CategoryChannel
    >();
  }

  /**
   * connect the bot to discord
   */
  public async connect(): Promise<void> {
    const shardsToSpawn = this.clientOptions.shards ?? "auto";
    const data =
      shardsToSpawn === "auto"
        ? await this.requestHandler.request<RESTGetAPIGatewayBotResult>({
            path: "/gateway/bot",
            auth: true,
            method: "GET",
          })
        : await this.requestHandler.request<RESTGetAPIGatewayResult>({
            path: "/gateway",
            method: "GET",
            auth: false,
          });
    if (
      (data as APIGatewayBotInfo).session_start_limit !== undefined &&
      (data as APIGatewayBotInfo).session_start_limit.remaining <= 0
    ) {
      throw new Error("Exceeded the amount of tries to connect.");
    }
    for (
      let i = 0;
      i <=
      (shardsToSpawn === "auto"
        ? (data as RESTGetAPIGatewayBotResult).shards
        : (shardsToSpawn as number));
      i++
    ) {
      await this.shards.connect(i, {
        shards:
          this.clientOptions.shards === "auto"
            ? (data as RESTGetAPIGatewayBotResult).shards
            : (shardsToSpawn as number),
        url: `${data?.url}`,
      });
      await sleep(1000);
    }
  }

  /**
   * gets the client latency
   */
  get ping() {
    return this.shards.latency;
  }
}
