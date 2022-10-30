export interface CacheOptions {
  /**
   * If the bot needs to cache members or not
   * @default enabled
   */
  members?: boolean;
  /**
   * If the bot needs to cache roles or not
   * @default enabled
   */
  roles?: boolean;
  /**
   * If the bot needs to cache guilds or not
   * @default enabled
   */
  guilds?: boolean;
  /**
   * If the bot needs to cache application commands or not
   * @default enabled
   */
  applicationCommands?: boolean;
  /**
   * If the bot needs to cache members or not
   * @default disabled
   */
  bans?: boolean;
}
