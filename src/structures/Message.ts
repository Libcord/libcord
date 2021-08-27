import { GatewayMessageCreateDispatchData } from "discord-api-types/v9";
import { Client } from "../Client";
import { Snowflake } from "../utils/Snowflake";
import { Base } from "./Base";
import { User, TextChannel } from "./index";
import { CustomMessageData } from "../gateway/actions/MESSAGE_CREATE";

/**
 * @category Structures
 */
export class Message extends Base {
  public channel!: TextChannel;
  public id!: Snowflake;
  public channelID!: Snowflake;
  public content!: string;
  public author!: User | undefined;

  constructor(client: Client, data: CustomMessageData) {
    super(client);
    this.id = data.id as Snowflake;
    this.channelID = data.channel_id as Snowflake;
    this.channel = data.channel;
    this.content = data.content;
    if (data.author) {
      if (data.author.discriminator !== "0000") {
        if (this.client.users.get(data.author.id as Snowflake)) {
          this.author = this.client.users.get(data.author.id as Snowflake);
        } else {
          this.author = new User(this.client, data.author);
        }
      }
    }
    //this._patchData(data);
  }
  /**
   * @private
   * @ignore
   * @returns {Promise<void>}
   */

  private async _patchData(
    data: GatewayMessageCreateDispatchData
  ): Promise<void> {
    this.id = data.id as Snowflake;
    this.channelID = data.channel_id as Snowflake;
    this.channel = (await this.client.fetchChannel(
      data.channel_id as Snowflake
    )) as TextChannel;
    this.content = data.content;
    if (data.author) {
      if (data.author.discriminator !== "0000") {
        if (this.client.users.get(data.author.id as Snowflake)) {
          this.author = this.client.users.get(data.author.id as Snowflake);
        } else {
          this.author = new User(this.client, data.author);
        }
      }
    }
  }
}

export interface MessageOptions {}

export interface MessageOptionsWithContent extends MessageOptions {
  content?: string;
}
