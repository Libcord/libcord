import type { Client, Guild } from "..";
import { Base } from "./Base";
import type { APIRole, Snowflake } from "discord-api-types/v9";

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

  /**
   * @returns {string} the role color by hex
   */
  get hex() {
    return this.color.toString(16);
  }
}
