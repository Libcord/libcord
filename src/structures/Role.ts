import { Client } from "..";
import { Base } from "./Base";
import { APIRole, Snowflake } from "discord-api-types/v9";

export class Role extends Base {
  public id!: Snowflake;
  public name!: string;
  public mentionable!: boolean;
  public hoisted!: boolean;
  public integrated!: boolean;
  public color!: number;
  public icon!: string;
  public unicodeEmoji!: string;
  constructor(client: Client, data: APIRole) {
    super(client);
    this.id = data.id as Snowflake;
    this.name = data.name;
    this.mentionable = data.mentionable;
    this.hoisted = data.hoist;
    this.integrated = data.managed;
    this.color = data.color;
  }
  get hex() {
    return this.color.toString(16);
  }
}
