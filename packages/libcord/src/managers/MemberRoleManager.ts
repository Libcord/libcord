import Manager from "./Manager";
import { Client } from "../Client";
import { Collection } from "../utils/Collection";
import { Guild, Member, Role } from "../structures";
import { APIRole } from "discord-api-types/v9";
import { Snowflake } from "../utils/Snowflake";
import { GUILD_MEMBERS_ROLES } from "../rest/EndPoints";

export default class MemberRoleManager extends Manager {
  public readonly cache: Collection<Snowflake, Role>;
  public guild: Guild;
  public member: Member;
  constructor(client: Client, guild: Guild, member: Member) {
    super(client);
    this.cache = new Collection<Snowflake, Role>();
    this.guild = guild;
    this.member = member;
    this._initCache();
  }
  async _initCache() {
    // @ts-ignore
    for (const role of this.member.data.roles) {
      await this._addCache(role);
    }
  }
  async _addCache(role: string) {
    this.cache.set(role, await this.guild.roles.fetch(role));
    return this.guild.roles.fetch(role);
  }

  /**
   * Adds a role to a member
   * @param role A role object or an id
   */
  async add(role: Role | Snowflake) {
    const finalRole = this.guild.roles.cache.get(
      role instanceof Role ? role.id : role
    );
    await this.client.requestHandler.request(
      "PUT",
      GUILD_MEMBERS_ROLES(
        this.guild.id,
        this.member.id,
        (finalRole as Role).id
      ),
      {}
    );
    return this._addCache((finalRole as Role).id);
  }
  /**
   * Removes a role from a member
   * @param role A role object or an id
   */
  async remove(role: Role | Snowflake) {
    const check = this.cache.get(role instanceof Role ? role.id : role);
    if (!check) throw new Error("[ROLES] Member doesn't have that role");
    const finalRole = this.guild.roles.cache.get(
      role instanceof Role ? role.id : role
    );
    await this.client.requestHandler.request(
      "DELETE",
      GUILD_MEMBERS_ROLES(
        this.guild.id,
        this.member.id,
        (finalRole as Role).id
      ),
      {}
    );
    this.cache.delete((finalRole as Role).id);
    return true;
  }
}
