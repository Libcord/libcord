import type { Snowflake } from "../../utils/Utils";
import type { Client } from "../../Client";
import type { APITextChannel, ChannelType } from "discord-api-types/v9";
import { TextableChannel } from "./TextableChannel";

export class TextChannel extends TextableChannel {
  public readonly type: ChannelType.GuildText;
  public topic: string | null;
  public rateLimitPerUser: number | null;
  public lastMessageId: Snowflake | null;

  constructor(client: Client, data: APITextChannel) {
    super(client, data);
    this.type = data.type;
    this.topic = data.topic || null;
    this.rateLimitPerUser = data.rate_limit_per_user || null;

    this.lastMessageId = (data.last_message_id as unknown as Snowflake) || null;
  }
}
