import { APIChannel } from "discord-api-types/v9";
import { Collection } from "../..";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { ChannelTypes } from "./Channel";
import { GuildChannel } from "./GuildChannel";
import { Message, MessageOptions } from "../Message";
import { Embed } from "../Embed";

import { MESSAGES } from "../../rest/EndPoints";
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
    this.lastMessageId = (data.last_message_id as unknown as Snowflake) || null;
    this.messages = new Collection();
  }

  update(data: APIChannel): GuildChannel {
    this.lastMessageId = (data.last_message_id as unknown as Snowflake) || null;
    this.topic = data.topic || null;
    this.rateLimitPerUser = data.rate_limit_per_user || null;
    return super.update(data);
  }
  public send(content: MessageOptions | string | Embed): Promise<Message>;
  public send(msg: MessageOptions | string | Embed): Promise<Message>;
  public async send(
    msg: MessageOptions | string
  ): Promise<Message | undefined> {
    const payload = {
      content: "" as any,
      embeds: [] as any,
    };
    if (msg instanceof Embed) {
      payload.embeds.push(msg.getJSON());
    }
    if (typeof msg === "string") {
      payload.content = msg;
    }
    if (typeof msg === "object") {
      if (typeof msg?.content === "string") {
        payload.content = msg?.content;
      }
      if (msg.content instanceof Embed) {
        payload.embeds.push(msg.content.getJSON());
      }
      if (msg.embeds) {
        msg.embeds.forEach((em) => {
          if (em instanceof Embed) {
            payload.embeds.push((em as Embed).getJSON());
          } else {
            throw new Error("[LIBCORD] Embeds must be an instance of <Embed>");
          }
        });
      }
    }
    const res: any = await this.client.requestHandler.request(
      "POST",
      MESSAGES(this.id),
      JSON.stringify(payload),
      this.client.token
    );
    const data = { channel: this, ...res };
    return new Message(this.client, data);
  }
}
