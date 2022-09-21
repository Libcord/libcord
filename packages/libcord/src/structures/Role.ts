import { Client, Guild, RoleEditOptions } from "..";
import { Base } from "./Base";
import { APIRole, Snowflake } from "discord-api-types/v9";
import RoleManager from "../managers/RoleManager";

export class Role extends Base {
  public id!: Snowflake;
  public name!: string;
  public mentionable!: boolean;
  public hoisted!: boolean;
  public integrated!: boolean;
  public color!: number;
  public icon!: string;
  public guild!: Guild;
  constructor(client: Client, data: APIRole, guild: Guild) {
    super(client);
    this.id = data.id as Snowflake;
    this.name = data.name;
    this.mentionable = data.mentionable;
    this.hoisted = data.hoist;
    this.integrated = data.managed;
    this.color = data.color;
    this.guild = guild;
  }
  get hex() {
    return this.color.toString(16);
  }
  async edit(options: RoleEditOptions) {
    const manager = new RoleManager(this.client, this.guild);
    return manager.edit(this.id, options);
  }
}
