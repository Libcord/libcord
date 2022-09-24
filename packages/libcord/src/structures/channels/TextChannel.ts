import { APIChannel, APITextChannel } from "discord-api-types/v9";
import { Collection, ComponentsType } from "../..";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { ChannelTypes } from "../../Constants";
import { GuildChannel } from "./GuildChannel";
import { Message, MessageOptions } from "../Message";
import { Embed } from "../Embed";

import { MESSAGES } from "../../rest/EndPoints";
import { FileUtils } from "../../utils/FileUtils";
import * as FormData from "form-data";
import ThreadManager from "../../managers/ThreadManager";
import { Deprecated } from "../../utils/Decorators";

export class TextChannel extends GuildChannel {
  // @ts-ignore
  public readonly type: ChannelTypes.Text | ChannelTypes.News;
  public topic: string | null;
  public rateLimitPerUser: number | null;
  public lastMessageId: Snowflake | null;
  public messages: Collection<Snowflake, Message>;
  public threads: ThreadManager;

  constructor(client: Client, data: APITextChannel) {
    super(client, data);
    this.topic = data.topic || null;
    this.rateLimitPerUser = data.rate_limit_per_user || null;
    this.lastMessageId = (data.last_message_id as unknown as Snowflake) || null;
    this.messages = new Collection();
    this.threads = new ThreadManager(this.client, this);
  }

  /**
   * @ignore
   */
  update(data: APITextChannel): GuildChannel {
    this.lastMessageId = (data.last_message_id as unknown as Snowflake) || null;
    this.topic = data.topic || null;
    this.rateLimitPerUser = data.rate_limit_per_user || null;
    return super.update(data);
  }

  /**
   * Sends a message in a text channel
   * @param content the content to send can be an embed, object or string
   * @deprecated
   */
  @Deprecated.Method("Use Textchannel#createMessage instead")
  public send(content: MessageOptions | string | Embed) {
    return this.createMessage(content);
  }
  /**
   * Sends a message in a text channel
   * @param content the content to send can be an embed, object or string
   */
  public createMessage(
    content: MessageOptions | string | Embed
  ): Promise<Message>;
  public createMessage(msg: MessageOptions | string | Embed): Promise<Message>;
  public async createMessage(
    msg: MessageOptions | string
  ): Promise<Message | undefined> {
    let payload: any = {
      content: "" as any,
      embeds: [] as any,
      components: [] as any,
      attachments: [] as any,
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
      if (msg.components?.length! > 0) {
        msg.components?.forEach((comp: ComponentsType) => {
          payload.components.push(comp);
        });
      }
      if (msg.mentions) {
        if (msg.mentions.message) {
          payload.message_reference.message_id = msg.mentions.message.id;
        }
      }
      if (msg.files) {
        let temp = new FormData();
        const { files } = await FileUtils.resolveFiles(msg.files, payload);
        const attachment = files.map((file: any, i: any) => {
          const filee = msg.files?.[i];
          for (const file of files) {
            temp.append(`files[${i}]`, file.file, file.name);
          }
          return {
            id: i.toString(),
            description: filee?.description,
            filename: file.name,
          };
        });
        if (Array.isArray(attachment)) {
          payload.attachments.push(...(attachment ?? []));
        } else {
          payload.attachments = attachment;
        }
        const JSONPayload = JSON.stringify(payload);
        temp.append("payload_json", JSONPayload);

        const res: any = await this.client.requestHandler.request(
          "POST",
          MESSAGES(this.id),
          temp
        );
        const data = { channel: this, ...res };
        return new Message(this.client, data);
      }
    }
    const res: any = await this.client.requestHandler.request(
      "POST",
      MESSAGES(this.id),
      payload
    );
    const data = { channel: this, ...res };
    return new Message(this.client, data);
  }
}
