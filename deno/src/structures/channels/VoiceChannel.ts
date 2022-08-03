import { APIVoiceChannel } from "discord-api-types/v9";
import { Client } from "../../Client";
import { GuildChannel } from "./GuildChannel";
import { ChannelTypes } from "../../Constants";

export class VoiceChannel extends GuildChannel {
  public readonly type: // @ts-ignore
  | ChannelTypes.Voice
    // @ts-ignore
    | ChannelTypes.Stage
    // @ts-ignore
    | ChannelTypes.UNKNOWN;

  constructor(client: Client, data: APIVoiceChannel) {
    super(client, data);
    this.type =
      (data.type as unknown as ChannelTypes) === ChannelTypes.Voice
        ? ChannelTypes.Voice
        : ChannelTypes.UNKNOWN;
  }
}
