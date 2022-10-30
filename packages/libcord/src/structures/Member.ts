import { Base } from "./Base";
import { User } from "./User";
import type { Snowflake } from "../utils/Utils";
import type { Client } from "../Client";
import type { APIGuildMember } from "discord-api-types/v9";

/**
 * @category Structures
 */
export class Member extends Base {
  public user?: User;
  public nick: string | null;
  public roles: Snowflake[];
  public joinedAt: string;
  public premiumSince: string | null;
  public deaf: boolean;
  public mute: boolean;

  constructor(client: Client, data: APIGuildMember) {
    super(client);

    this.user =
      this.client.users.get(data.user?.id as Snowflake) ||
      (data.user ? new User(client, data.user) : undefined);
    this.nick = typeof data.nick !== "undefined" ? data.nick : null;
    this.roles = data.roles;
    this.joinedAt = data.joined_at;
    this.premiumSince =
      typeof data.premium_since !== "undefined" ? data.premium_since : null;
    this.deaf = data.deaf;
    this.mute = data.mute;
  }

  toString(): string {
    return `<@${this.nick ? "!" : ""}${this.user?.id}>`;
  }
}
