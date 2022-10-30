import { GuildChannel } from "./GuildChannel";
import type { Snowflake } from "../../utils/Utils";
import Collection from "../../utils/Collection";
import { Message } from "../Message";
import type { Client } from "../../Client";
import type {
  APITextChannel,
  RESTPostAPIChannelMessageResult,
} from "discord-api-types/v9";
import type { ChannelType } from "discord-api-types/v9";
import type { MessageOptions } from "../../Constants";
import { Parser } from "../../utils/Parser";

export class TextChannel extends GuildChannel {
  public readonly type: ChannelType.GuildText;
  public topic: string | null;
  public rateLimitPerUser: number | null;
  public lastMessageId: Snowflake | null;
  public messages: Collection<Snowflake, Message>;

  constructor(client: Client, data: APITextChannel) {
    super(client, data);
    this.type = data.type;
    this.topic = data.topic || null;
    this.rateLimitPerUser = data.rate_limit_per_user || null;
    this.lastMessageId = (data.last_message_id as unknown as Snowflake) || null;
    this.messages = new Collection();
  }

  /**
   * Sends a message to a channel
   * @param options The options needed to make a message
   */
  async createMessage(options: MessageOptions) {
    const { type, data } = await Parser.resolveContentForApi(options);
    if (type === "file") {
      const d =
        await this.client.requestHandler.request<RESTPostAPIChannelMessageResult>(
          {
            path: `/channels/${this.id}/messages`,
            method: "POST",
            form: data,
          }
        );
      return new Message(this.client, d);
    } else if (type === "json") {
      const d =
        await this.client.requestHandler.request<RESTPostAPIChannelMessageResult>(
          {
            path: `/channels/${this.id}/messages`,
            method: "POST",
            json: data,
          }
        );
      return new Message(this.client, d);
    }
  }
}
