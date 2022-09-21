import { Snowflake } from "../utils/Snowflake";
import { imageFormats, imageSize } from "../utils/Utils";

export const REST_VERSION = 9;
export const BASE_URL = `https://discord.com/api/v${REST_VERSION}`;
export const IMAGE_BASE_URL = "https://cdn.discordapp.com";
// @formatter:off
export const APPLICATION_GLOBAL_COMMAND = (
  applicationId: Snowflake,
  cmdId: Snowflake
) => `/applications/${applicationId}/commands/${cmdId}`;
export const APPLICATION_GLOBAL_COMMANDS = (applicationId: Snowflake) =>
  `/applications/${applicationId}/commands`;
export const APPLICATION_GUILD_COMMAND = (
  applicationId: Snowflake,
  guildId: Snowflake,
  cmdId: Snowflake
) => `/applications/${applicationId}/guilds/${guildId}/commands/${cmdId}`;
export const APPLICATION_GUILD_COMMANDS = (
  applicationId: Snowflake,
  guildId: Snowflake
) => `/applications/${applicationId}/guilds/${guildId}/commands`;
export const RESPOND_INTERACTION = (interactionId: Snowflake, token: string) =>
  `/interactions/${interactionId}/${token}/callback`;

export const DM_CHANNEL = "/users/@me/channels";
export const GATEWAY_CONNECT = "/gateway/bot";
export const MESSAGE = (channelId: Snowflake, msgId: Snowflake) =>
  `/channels/${channelId}/messages/${msgId}`;
export const CHANNEL = (channelId: Snowflake) => `/channels/${channelId}`;
export const ROLE = (guildId: Snowflake, roleId: Snowflake) =>
  `/guilds/${guildId}/roles/${roleId}`;
export const ROLES = (guildId: Snowflake) => `/guilds/${guildId}/roles`;
export const CREATE_THREAD = (channelId: Snowflake) =>
  `/channels/${channelId}/threads`;
export const CREATE_MESSAGE_THREAD = (
  channelId: Snowflake,
  messageId: Snowflake
) => `/channels/${channelId}/messages/${messageId}/threads`;

export const MESSAGES = (channelId: Snowflake) =>
  `/channels/${channelId}/messages`;
export const USER_ME = "/users/@me";

// Guild
export const GUILD = (guildId: Snowflake) => `/guilds/${guildId}`;
export const GUILD_BANS = (guildId: Snowflake) => `/guilds/${guildId}/bans`;
export const GET_GUILD_BAN = (guildId: Snowflake, userId: Snowflake) =>
  `/guilds/${guildId}/bans/${userId}`;
export const GUILD_THREADS = (guildId: Snowflake) =>
  `/guilds/${guildId}/threads/active`;
export const GUILD_MEMBERS = (
  guildId: Snowflake,
  limit: number,
  after: number
) => `/guilds/${guildId}/members?limit=${limit}&after=${after}`;
export const GUILD_MEMBERS_ROLES = (
  guildId: Snowflake,
  userId: Snowflake,
  roleId: Snowflake
) => `/guilds/${guildId}/members/${userId}/roles/${roleId}`;
export const CREATE_CHANNEL = (guildId: Snowflake) =>
  `/guilds/${guildId}/channels`;
export const CREATE_ROLE = (guildId: Snowflake) => `/guilds/${guildId}/roles`;

//images
export const DEFAULT_USER_AVATAR = (discriminator: string) =>
  `${IMAGE_BASE_URL}/embed/avatars/${discriminator}.png`;
export const USER_AVATAR = (
  user: string,
  hash: string,
  format: imageFormats,
  size: imageSize
) => `${IMAGE_BASE_URL}/avatars/${user}/${hash}.${format}?size${size}`;

//webhooks

export const EXECUTE_WEBHOOK = (Id: string, token: string) =>
  `/webhooks/${Id}/${token}`;
// @formatter:on
