import Manager from "./Manager";
import { Client } from "../Client";
import { Guild, User } from "../structures";
import { Collection } from "../utils/Collection";
import { Snowflake } from "../utils/Snowflake";
import { GET_GUILD_BAN, GUILD_BANS } from "../rest/EndPoints";

export interface BanUser {
  reason?: string;
  user: User;
}
export interface BanOptions {
  /*
    The reason for the ban
     */
  reason?: string;
  /*
    Number of days to delete messages
     */
  days?: number;
  /*
    userId to ban. Required
     */
  userId: string;
}
export class GuildBanManager extends Manager {
  public readonly cache: Collection<Snowflake, BanUser>;
  public guild: Guild;
  constructor(client: Client, guild: Guild) {
    super(client);
    this.cache = new Collection<Snowflake, BanUser>();
    this.guild = guild;
    this._initCache();
  }
  private async _initCache() {
    const data = await this.client.requestHandler.request(
      "GET",
      GUILD_BANS(this.guild.id)
    );

    for (const ban of data) {
      this.cache.set(ban.user.id, ban);
    }
    return;
  }

  /**
   * Creates a ban in a guild.
   * @param options the options
   */
  async add(options: BanOptions) {
    const data = await this.client.requestHandler.request(
      "PUT",
      GET_GUILD_BAN(this.guild.id, options.userId),
      {
        delete_message_days: options.days,
      },
      {
        "X-Audit-Log-Reason": options.reason || "No reason",
      }
    );
    return this.cache.set(options.userId, {
      reason: options.reason,
      user: this.guild.members.get(options.userId)?.user as User,
    });
  }

  /**
   * Removes a ban for a specific user
   * @param userId the id of the user to unban
   */
  async remove(userId: Snowflake) {
    const data = await this.client.requestHandler.request(
      "DELETE",
      GET_GUILD_BAN(this.guild.id, userId)
    );
    this.cache.delete(userId);

    return true;
  }

  /**
   * Gets ban details
   * @param userId the id of the user to get the ban details.
   */
  get(userId: Snowflake) {
    if (this.cache.has(userId)) return this.cache.get(userId);
    return new Promise(async (resolve, reject) => {
      const data = await this.client.requestHandler.request(
        "GET",
        GET_GUILD_BAN(this.guild.id, userId)
      );

      resolve(
        this.cache.set(userId, {
          reason: data.reason,
          user: new User(this.client, data.user),
        })
      );
    });
  }
}
