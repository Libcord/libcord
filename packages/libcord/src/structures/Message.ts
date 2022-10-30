import { Base } from "./Base";
import type { Snowflake } from "../utils/Utils";
import type { Client } from "../Client";
import type { APIMessage } from "discord-api-types/v9";
import type { TextChannel } from "./channels/TextChannel";

/**
 * @category Structures
 */
export class Message extends Base {
  public id: Snowflake;
  public channelId: Snowflake;
  public channel!: TextChannel;

  constructor(client: Client, data: APIMessage) {
    super(client);
    this.id = data.id;
    this.channelId = data.channel_id;
  }
  _patch() {}
}
