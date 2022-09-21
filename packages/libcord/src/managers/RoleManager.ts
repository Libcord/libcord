import Manager from "./Manager";
import { Client } from "../Client";
import { Collection } from "../utils/Collection";
import { Guild, Role } from "../structures";
import { RoleCreateOptions, RoleEditOptions } from "../Constants";
import { ROLES, CREATE_ROLE, ROLE } from "../rest/EndPoints";
import { APIRole } from "discord-api-types/v9";
import { Snowflake } from "../utils/Snowflake";

export default class RoleManager extends Manager {
  public readonly cache: Collection<Snowflake, Role>;
  public guild: Guild;
  constructor(client: Client, guild: Guild) {
    super(client);
    this.cache = new Collection<Snowflake, Role>();
    this.guild = guild;
    this._initCache();
  }
  _initCache() {
    // @ts-ignore
    for (const role of this.guild.data.roles) {
      this._addCache(role);
    }
  }
  _addCache(role: APIRole) {
    this.cache.set(role.id, new Role(this.client, role, this.guild));
    return new Role(this.client, role, this.guild);
  }
  fetch(roleId: Snowflake): Role | Promise<Role> {
    if (this.cache.get(roleId)) {
      return this.cache.get(roleId) as Role;
    } else {
      return new Promise(async (resolve, reject) => {
        const res = await this.client.requestHandler.request(
          "GET",
          ROLE(this.guild.id, roleId)
        );
        resolve(this._addCache(res));
      });
    }
  }
  async create(options: RoleCreateOptions): Promise<Role> {
    const res = await this.client.requestHandler.request(
      "POST",
      CREATE_ROLE(this.guild.id),
      JSON.stringify(options)
    );
    return this._addCache(res);
  }
  async edit(roleId: Snowflake, options: RoleEditOptions) {
    if (options.position) {
      await this.client.requestHandler.request(
        "PATCH",
        ROLES(this.guild.id),
        JSON.stringify({
          id: roleId,
          position: options.position,
        })
      );
    }
    if (!options.name) {
      const r = await this.fetch(roleId);
      options.name = r.name;
    }

    const d = await this.client.requestHandler.request(
      "PATCH",
      CREATE_ROLE(roleId),
      JSON.stringify(options)
    );
    return this._addCache(d);
  }
  async delete(roleId: Snowflake) {
    this.cache.delete(roleId);
    await this.client.requestHandler.request(
      "DELETE",
      ROLE(this.guild.id, roleId),
      {}
    );
    return true;
  }
}
