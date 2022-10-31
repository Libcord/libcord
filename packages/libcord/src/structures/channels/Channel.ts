import { Base } from "../Base";
import type { Snowflake } from "../../utils/Utils";
import type { APIChannel, ChannelType } from "discord-api-types/v9";
import type { Client } from "../../Client";

/**
 * @category channels
 */
export class Channel extends Base {
  /**
   * channel id
   */
  public id: Snowflake;

  /**
   * channel type
   */
  public type: ChannelType;

  constructor(client: Client, data: APIChannel) {
    super(client);
    this.id = data.id;
    this.type = data.type;
  }
  get mention(): string {
    return `<#${this.id}>`;
  }
}
