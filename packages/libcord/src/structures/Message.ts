import { Base } from "./Base";
import type { Snowflake } from "../utils/Utils";
import { resolvePartialEmoji } from "../utils/Utils";
import type { Client } from "../Client";
import type {
  APIMessage,
  RESTDeleteAPIChannelPinResult,
  RESTPostAPIChannelMessageCrosspostResult,
  RESTPutAPIChannelMessageReactionResult,
  RESTPutAPIChannelPinResult,
} from "discord-api-types/v9";
import {
  ChannelType,
  RESTPostAPIChannelMessageResult,
} from "discord-api-types/v9";
import type { TextChannel } from "./channels/TextChannel";
import { Guild, MessageOptions, User } from "../";
import {
  CrosspostMessage,
  PinMessage,
  SelfMessageReaction,
} from "../rest/EndPoints";
import type { NewsChannel } from "./channels/NewsChannel";
import { Parser } from "../utils/Parser";

/**
 * @category Structures
 */
export class Message extends Base {
  public id: Snowflake;
  public channelId: Snowflake;
  public channel!: TextChannel | NewsChannel | undefined;
  public content: string;
  public author: User;
  public guild: Guild | undefined;

  constructor(client: Client, data: APIMessage) {
    super(client);
    this.id = data.id;
    this.content = data.content;
    this.channelId = data.channel_id;
    this.author = new User(client, data.author);
    this.channel =
      client.channels.get(data.channel_id)?.type === ChannelType.GuildText ||
      ChannelType.GuildAnnouncement
        ? (client.channels.get(data.channel_id) as TextChannel | NewsChannel)
        : undefined;
    this.guild = this.channel?.guild ?? undefined;
  }

  /**
   * react to a message
   * @param emoji unicode emoji like 😂
   */
  async react(emoji: string | any) {
    const emo = resolvePartialEmoji(emoji) as any;
    await this.client.requestHandler.request<RESTPutAPIChannelMessageReactionResult>(
      {
        method: "PUT",
        path: SelfMessageReaction(
          this.channelId,
          this.id,
          emo.id
            ? `${emo.animated ? "a:" : ""}${emo.name}:${emo.id}`
            : encodeURIComponent(emo.name)
        ),
        auth: true,
      }
    );
    return this;
  }

  /**
   * Publish a message to followers of a channel
   * ⚠ only works in announcement channels
   */
  async crosspost() {
    await this.client.requestHandler.request<RESTPostAPIChannelMessageCrosspostResult>(
      {
        method: "POST",
        path: CrosspostMessage(this.channelId, this.id),
        auth: true,
      }
    );
    return this;
  }

  /**
   * Pins a message in a channel
   */
  async pin(reason?: string) {
    await this.client.requestHandler.request<RESTPutAPIChannelPinResult>({
      method: "PUT",
      path: PinMessage(this.channelId, this.id),
      auth: true,
      reason,
    });
    return this;
  }
  /**
   * Removes the pinned status of this message
   * ⚠ MUST be pinned
   */
  async unpin(reason?: string) {
    await this.client.requestHandler.request<RESTDeleteAPIChannelPinResult>({
      method: "DELETE",
      path: PinMessage(this.channelId, this.id),
      auth: true,
      reason,
    });
    return this;
  }
  async createReply(options: MessageOptions) {
    options.mentions = {
      message: {
        id: this.id,
      },
    };
    const { type, data } = await Parser.resolveContentForApi(
      this.client,
      options
    );
    if (type === "file") {
      const d =
        await this.client.requestHandler.request<RESTPostAPIChannelMessageResult>(
          {
            path: `/channels/${this.channelId}/messages`,
            method: "POST",
            form: data,
            auth: true,
          }
        );
      return new Message(this.client, d);
    } else if (type === "json") {
      const d =
        await this.client.requestHandler.request<RESTPostAPIChannelMessageResult>(
          {
            path: `/channels/${this.channelId}/messages`,
            method: "POST",
            json: data,
            auth: true,
          }
        );
      return new Message(this.client, d);
    }
  }
}
