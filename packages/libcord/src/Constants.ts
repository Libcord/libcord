import { ChannelType, Permissions } from "discord-api-types/v9";
import { Snowflake } from "./utils/Snowflake";

// Credits: Discord.js
export enum Colors {
  Default = 0x000000,
  White = 0xffffff,
  Aqua = 0x1abc9c,
  Green = 0x57f287,
  Blue = 0x3498db,
  Yellow = 0xfee75c,
  Purple = 0x9b59b6,
  LuminousVividPink = 0xe91e63,
  Fuchsia = 0xeb459e,
  Gold = 0xf1c40f,
  Orange = 0xe67e22,
  Red = 0xed4245,
  Grey = 0x95a5a6,
  Navy = 0x34495e,
  DarkAqua = 0x11806a,
  DarkGreen = 0x1f8b4c,
  DarkBlue = 0x206694,
  DarkPurple = 0x71368a,
  DarkVividPink = 0xad1457,
  DarkGold = 0xc27c0e,
  DarkOrange = 0xa84300,
  DarkRed = 0x992d22,
  DarkGrey = 0x979c9f,
  DarkerGrey = 0x7f8c8d,
  LightGrey = 0xbcc0c0,
  DarkNavy = 0x2c3e50,
  Blurple = 0x5865f2,
  Greyple = 0x99aab5,
  DarkButNotBlack = 0x2c2f33,
  NotQuiteBlack = 0x23272a,
}
/**
 * list of intents
 * @see https://discord.com/developers/docs/topics/gateway#list-of-intents
 */
export enum Intents {
  /**
   * include events :
   * - GUILD_CREATE
   * - GUILD_UPDATE
   * - GUILD_DELETE
   * - GUILD_ROLE_CREATE
   * - GUILD_ROLE_UPDATE
   * - GUILD_ROLE_DELETE
   * - CHANNEL_CREATE
   * - CHANNEL_UPDATE
   * - CHANNEL_DELETE
   * - CHANNEL_PINS_UPDATE
   * - THREAD_CREATE
   * - THREAD_UPDATE
   * - THREAD_DELETE
   * - THREAD_LIST_SYNC
   * - THREAD_MEMBER_UPDATE
   * - THREAD_MEMBERS_UPDATE
   */
  GUILDS = 1,
  /**
   * include events :
   * - GUILD_MEMBER_ADD
   * - GUILD_MEMBER_UPDATE
   * - GUILD_MEMBER_REMOVE
   * - THREAD_MEMBERS_UPDATE
   */
  GUILD_MEMBERS = 2,
  /**
   * include events :
   * - GUILD_BAN_ADD
   * - GUILD_BAN_REMOVE
   */
  GUILD_BANS = 4,
  /**
   * include event :
   * GUILD_EMOJIS_UPDATE
   */
  GUILD_EMOJIS = 8,
  /**
   * include events :
   *  - GUILD_INTEGRATIONS_UPDATE
   * - INTEGRATION_CREATE
   * - INTEGRATION_UPDATE
   * - INTEGRATION_DELETE
   */
  GUILD_INTEGRATIONS = 16,
  /**
   * include event :
   * - WEBHOOKS_UPDATE
   */
  GUILD_WEBHOOKS = 32,
  /**
   * include events
   * - INVITE_CREATE
   * - INVITE_DELETE
   */
  GUILD_INVITES = 64,
  /**
   * include event :
   * - VOICE_STATE_UPDATE
   */
  GUILD_VOICE_STATES = 128,
  /**
   * include event :
   * - PRESENCE_UPDATE
   */
  GUILD_PRESENCES = 256,
  /**
   * include events
   * - MESSAGE_CREATE
   * - MESSAGE_UPDATE
   * - MESSAGE_DELETE
   * - MESSAGE_DELETE_BULK
   */
  GUILD_MESSAGES = 512,
  /**
   * include events :
   * - MESSAGE_REACTION_ADD
   * - MESSAGE_REACTION_REMOVE
   * - MESSAGE_REACTION_REMOVE_ALL
   * - MESSAGE_REACTION_REMOVE_EMOJI
   */
  GUILD_MESSAGE_REACTIONS = 1024,
  /**
   * include event :
   * - TYPING_START
   */
  GUILD_MESSAGE_TYPING = 2048,
  /**
   * include events :
   * - MESSAGE_CREATE
   * - MESSAGE_UPDATE
   * - MESSAGE_DELETE
   * - CHANNEL_PINS_UPDATE
   */
  DIRECT_MESSAGES = 4096,
  /**
   * include events :
   * - MESSAGE_REACTION_ADD
   * - MESSAGE_REACTION_REMOVE
   * - MESSAGE_REACTION_REMOVE_ALL
   * - MESSAGE_REACTION_REMOVE_EMOJI
   */
  DIRECT_MESSAGE_REACTIONS = 8192,
  /**
   * include event :
   * - TYPING_START
   */
  DIRECT_MESSAGE_TYPING = 16384,
}
export enum CLIENT_EVENTS {
  MESSAGE = "messageCreate",
  READY = "ready",
  CHANNEL_CREATE = "channelCreate",
  THREAD_CREATE = "threadCreate",
  THREAD_DELETE = "threadDelete",
  GUILD_CREATE = "guildCreate",
  GUILD_DELETE = "guildDelete",
  CHANNEL_EDIT = "channelUpdate",
  CHANNEL_DELETE = "channelDeleted",
  ROLE_CREATE = "roleCreated",
  ROLE_EDIT = "roleUpdate",
  ROLE_DELETE = "roleDeleted",
  INTERACTION_CREATE = "interactionCreate",
  ERROR = "error",
  RAW = "raw",
  CONNECTED = "connected",
}
export const API_VERSION: number = 9;

export interface AuthorOptions {
  /**
   * Author name
   */
  name?: string;

  /**
   * Author URL
   */
  url?: string;
}

export interface ThumbnailOptions {
  /**
   * Thumbnail URL
   */
  url?: string;
}

export interface ImageOptions {
  /**
   * Image URL
   */
  url?: string;
}

export interface FooterOptions {
  /**
   * Footer text
   */
  text?: string;

  /**
   * Footer icon URL
   */
  icon_url?: string;
}
export enum ChannelTypes {
  Text = 0,

  Voice = 2,

  Category = 4,

  News = 5,
  NewsThread = 10,
  PublicThread = 11,
  Stage = 13,
  PrivateThread = 12,
  UNKNOWN = 7,
}

export interface GatewayConnectData {
  url: string;
  shards: number;
}
export interface ChannelCreateOptions {
  name: string;
  type: ChannelTypes;
  topic?: string;
  parent?: Snowflake;
  nsfw?: boolean;
  rate_limit_per_user?: number;
  user_limit?: number;
}

export interface ChannelEditOptions {
  name?: string;
  topic?: string;
  parent?: Snowflake;
  nsfw?: boolean;
  rate_limit_per_user?: number;
  user_limit?: number;
}
export interface RoleCreateOptions {
  name: string;
  permissions?: Permissions | string;
  color?: Colors | number;
  hoist?: boolean;
  mentionable?: boolean;
}
export interface RoleEditOptions {
  name?: string;
  permissions?: Permissions | string;
  color?: Colors | number;
  hoist?: boolean;
  mentionable?: boolean;
  position?: number;
}
export enum ApplicationCommandOptionTypes {
  subCommand = 1,
  subCommandGroup = 2,
  string = 3,
  boolean = 5,
  user = 6,
  channel = 7,
  role = 8,
  number = 10,
}
