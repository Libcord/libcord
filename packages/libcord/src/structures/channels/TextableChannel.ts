import { GuildChannel } from "./GuildChannel";
import { Message } from "../Message";
import type { Client } from "../../Client";
import type {
  APITextChannel,
  GuildTextChannelType,
  RESTPostAPIChannelMessageResult,
} from "discord-api-types/v9";
import type { MessageOptions } from "../../Constants";
import { Parser } from "../../utils/Parser";

export class TextableChannel extends GuildChannel {
  public readonly type: GuildTextChannelType;

  constructor(client: Client, data: APITextChannel) {
    super(client, data);
    this.type = data.type;
  }

  /**
   * Sends a message to a channel
   * @param options The options needed to make a message
   */
  async createMessage(options: MessageOptions) {
    const { type, data } = await Parser.resolveContentForApi(
      this.client,
      options
    );
    if (type === "file") {
      const d =
        await this.client.requestHandler.request<RESTPostAPIChannelMessageResult>(
          {
            path: `/channels/${this.id}/messages`,
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
            path: `/channels/${this.id}/messages`,
            method: "POST",
            json: data,
            auth: true,
          }
        );
      return new Message(this.client, d);
    }
  }
}
