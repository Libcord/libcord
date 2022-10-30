import { Base } from "./Base";
import type { Snowflake } from "../utils/Utils";
import type { Client } from "../Client";
import type { APIMessage } from "discord-api-types/v9";
import type { TextChannel } from "./channels/TextChannel";
import { User } from "../";

/**
 * @category Structures
 */
export class Message extends Base {
  public id: Snowflake;
  public channelId: Snowflake;
  public channel!: TextChannel;
  public content: string;
  public author: User;

  constructor(client: Client, data: APIMessage) {
    super(client);
    this.id = data.id;
    this.content = data.content;
    this.channelId = data.channel_id;
    this.author = new User(client, data.author);
    this.channel = client.channels.get(data.channel_id) as TextChannel;
  }
}
