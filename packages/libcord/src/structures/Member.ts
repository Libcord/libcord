import { APIGuildMember } from "discord-api-types/v9";
import { Collection, Role } from "..";
import { Client } from "../Client";
import { Snowflake } from "../utils/Snowflake";
import { Base } from "./Base";
import { Guild } from "./Guild";
import { User } from "./User";

/**
 * @category Structures
 */
export class Member extends Base {
  public id: Snowflake;
  public user: User;
  public displayName: string;
  public roles = new Collection<Snowflake, Role>();
  public joinedAt: string;
  public premiumSince: string | null;
  public deaf: boolean;
  public mute: boolean;
  public guild: Guild;
  private data: APIGuildMember;

  constructor(client: Client, guild: Guild, data: APIGuildMember) {
    super(client);

    this.user =
      this.client.users.get(data.user?.id as unknown as Snowflake) ||
      new User(client, data.user!);
    this.id = this.user.id;
    this.displayName =
      typeof data.nick !== "undefined"
        ? (data.nick as string)
        : (this.user.username as string);
    this.joinedAt = data.joined_at;
    this.premiumSince =
      typeof data.premium_since !== "undefined" ? data.premium_since : null;
    this.deaf = data.deaf;
    this.mute = data.mute;
    this.guild = guild;

    if (data.roles !== null) {
      for (const roleId of data.roles) {
        const role = this.guild.roles
          .fetch(roleId as unknown as Snowflake)
          .then((r) => this.roles.add(r));
      }
    }
    this.data = data;
  }

  toString(): string {
    return `<@${this.data.nick ? "!" : ""}${this.user?.id}>`;
  }
}
