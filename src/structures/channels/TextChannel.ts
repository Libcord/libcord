import { APIChannel } from "discord-api-types/v9";
import { Collection } from "../..";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { ChannelTypes } from "./Channel";
import { GuildChannel } from "./GuildChannel";
import { Message, MessageOptions, MessageOptionsWithContent } from "../Message";

export class TextChannel extends GuildChannel {
  public readonly type:
    | ChannelTypes.TEXT_CHANNEL
    | ChannelTypes.NEWS_CHANNEL
    | ChannelTypes.UNKNOWN = ChannelTypes.TEXT_CHANNEL;
  public topic: string | null;
  public rateLimitPerUser: number | null;
  public lastMessageId: Snowflake | null;
  public messages: Collection<Snowflake, Message>;

  constructor(client: Client, data: APIChannel) {
    super(client, data);
    this.topic = data.topic || null;
    this.rateLimitPerUser = data.rate_limit_per_user || null;
    this.lastMessageId = (data.last_message_id as Snowflake) || null;
    this.messages = new Collection();
  }

  update(data: APIChannel): GuildChannel {
    this.lastMessageId = (data.last_message_id as Snowflake) || null;
    this.topic = data.topic || null;
    this.rateLimitPerUser = data.rate_limit_per_user || null;
    return super.update(data);
  }
  public send(content: string, msg?: MessageOptions): Promise<Message>;
  public send(msg: MessageOptionsWithContent): Promise<Message>;
  public async send(
    cOrM: string | MessageOptionsWithContent,
    msg?: MessageOptions
  ): Promise<Message> {
    if (this.type !== ChannelTypes.TEXT_CHANNEL)
      throw new SyntaxError("NOT_A_TEXT_CHANNEL");
    if (typeof cOrM === "string")
      return this.client.createMessage(this.id, cOrM, msg);
    return this.client.createMessage(this.id, cOrM);
  }
}
