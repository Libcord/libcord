import { Base } from "../Base";
import type { Snowflake } from "../../utils/Utils";
import type { APIChannel } from "discord-api-types/v9";
import type { Client } from "../../Client";

/**
 * @category channels
 */
export class Channel extends Base {
  /**
   * channel id
   */
  public id: Snowflake;

  constructor(client: Client, data: APIChannel) {
    super(client);
    this.id = data.id;
  }
}
