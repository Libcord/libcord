/*
 * Represents the CDN endpoints available for Discord
 */

/**
 * The base URL for pointing to the CDN
 */
export const BaseUrl = "https://cdn.discordapp.com";

/**
 * Type alias for what image format Discord supports
 */
export type ImageFormat = "png" | "jpg" | "webp" | "gif";

/**
 * Type alias of what image sizes Discord supports
 */
export type ImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;

export const getAchievementIcon = (
  appID: string,
  achievementID: string,
  icon: string
) =>
  `${BaseUrl}/app-assets/${appID}/achievements/${achievementID}/icons/${icon}`;
export const getApplicationAsset = (appID: string, asset: string) =>
  `${BaseUrl}/app-assets/${appID}/${asset}`;
export const getApplicationIcon = (appID: string, icon: string) =>
  `${BaseUrl}/app-icons/${appID}/${icon}`;
export const getChannelIcon = (channelID: string, icon: string) =>
  `${BaseUrl}/channel-icons/${channelID}/${icon}`;
export const getCustomEmoji = (emojiID: string) =>
  `${BaseUrl}/emojis/${emojiID}`;
export const getDefaultUserAvatar = (
  discrim: string,
  format: ImageFormat = "png"
) => `${BaseUrl}/embed/avatars/${Number(discrim) % 5}.${format}`;
export const getGuildBanner = (guildID: string, banner: string) =>
  `${BaseUrl}/banners/${guildID}/${banner}`;
export const getGuildDiscoverySplash = (guildID: string, splash: string) =>
  `${BaseUrl}/discovery-splashes/${guildID}/${splash}`;
export const getGuildIcon = (guildID: string, icon: string) =>
  `${BaseUrl}/icons/${guildID}/${icon}`;
export const getGuildSplash = (guildID: string, splash: string) =>
  `${BaseUrl}/splashes/${guildID}/${splash}`;
export const getTeamIcon = (teamID: string, icon: string) =>
  `${BaseUrl}/team-icons/${teamID}/${icon}`;
export const getUserAvatar = (
  userID: string,
  avatar: string,
  format: ImageFormat = "png",
  size: ImageSize = 1024
) => `${BaseUrl}/avatars/${userID}/${avatar}.${format}?size=${size}`;
