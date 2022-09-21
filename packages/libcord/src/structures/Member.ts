import { APIGuildMember } from "discord-api-types/v9";
import { Collection, Role } from "..";
import { Client } from "../Client";
import { Snowflake } from "../utils/Snowflake";
import { Base } from "./Base";
import { Guild } from "./Guild";
import { User } from "./User";
import MemberRoleManager from "../managers/MemberRoleManager";

/**
 * @category Structures
 */
export class Member extends Base {
  public id: Snowflake;
  public user: User;
  public displayName: string;
  public roles: MemberRoleManager;
  public joinedAt: string;
  public premiumSince: string | null;
  public deaf: boolean;
  public mute: boolean;
  public guild: Guild;
  public data: APIGuildMember;

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
    this.data = data;
    this.roles = new MemberRoleManager(client, guild, this);
  }

  toString(): string {
    return `<@${this.data.nick ? "!" : ""}${this.user?.id}>`;
  }
}
