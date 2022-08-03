import { GatewayMessageCreateDispatchData } from "discord-api-types/v9";
import { Client } from "../Client";
import { Snowflake } from "../utils/Snowflake";
import { Base } from "./Base";
import { User, TextChannel, Guild } from "./index";
import { CustomMessageData } from "../gateway/actions/MESSAGE_CREATE";
import { Member } from "..";
import { Embed } from "./Embed";

/**
 * @category Structures
 */
export class Message extends Base {
  public channel!: TextChannel;
  public id!: Snowflake;
  public channelID!: Snowflake;
  public content!: string;
  public author!: User | undefined;
  public member!: Member;
  public guild?: Guild;

  constructor(client: Client, data: CustomMessageData) {
    super(client);
    this.id = data.id as unknown as Snowflake;
    this.channelID = data.channel_id as unknown as Snowflake;
    this.channel = data.channel;
    this.content = data.content;
    if (data.author) {
      if (data.author.discriminator !== "0000") {
        if (this.client.users.get(data.author.id as unknown as Snowflake)) {
          this.author = this.client.users.get(
            data.author.id as unknown as Snowflake
          );
        } else {
          this.author = new User(this.client, data.author);
        }
      }
    }
    if (data.guild_id) {
      const guild = this.client.guilds.get(
        data.guild_id as unknown as Snowflake
      );
      this.guild = guild;

      this.member = guild?.members.get(
        data.author.id as unknown as Snowflake
      ) as Member;
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
    this.id = data.id as unknown as Snowflake;
    this.channelID = data.channel_id as unknown as Snowflake;
    this.channel = (await this.client.fetchChannel(
      data.channel_id as unknown as Snowflake
    )) as TextChannel;
    this.content = data.content;
    if (data.author) {
      if (data.author.discriminator !== "0000") {
        if (this.client.users.get(data.author.id as unknown as Snowflake)) {
          this.author = this.client.users.get(
            data.author.id as unknown as Snowflake
          );
        } else {
          this.author = new User(this.client, data.author);
        }
      }
    }
  }
}

export interface MessageInteractionOptions {
  content?: string | Embed;
  embeds?: Array<Embed> | Array<any>;
}
