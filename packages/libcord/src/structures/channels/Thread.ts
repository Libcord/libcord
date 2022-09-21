import { Base } from "../Base";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { APIThreadChannel, ChannelType } from "discord-api-types/v9";
import { TextChannel } from "./TextChannel";
import { NewsChannel } from "./NewsChannel";
import { Message, MessageOptions } from "../Message";
import { Embed } from "../Embed";
import { ComponentsType } from "../components/ActionRow";
import * as FormData from "form-data";
import { FileUtils } from "../../utils/FileUtils";
import { MESSAGES } from "../../rest/EndPoints";

export class Thread extends Base {
  public readonly id: Snowflake;
  public readonly archived: boolean | undefined;
  public readonly locked: boolean | undefined;
  public readonly type:
    | ChannelType.GuildPublicThread
    | ChannelType.GuildPrivateThread
    | ChannelType.GuildNewsThread;
  public readonly rate_limit: number | undefined;
  public readonly member_count: number | undefined;
  public readonly channel:
    | Promise<TextChannel | NewsChannel | undefined>
    | undefined;
  public readonly data: APIThreadChannel;
  constructor(client: Client, data: APIThreadChannel) {
    super(client);
    this.id = data.id as unknown as Snowflake;
    this.archived = data.thread_metadata?.archived;
    this.locked = data.thread_metadata?.locked;
    this.type = data.type;
    this.rate_limit = data.rate_limit_per_user;
    this.member_count = data.member_count;
    this.channel =
      (this.client.fetchChannel(
        data.parent_id as string
      ) as Promise<TextChannel>) || undefined;
    this.data = data;
  }
  public async delete() {
    return await ((await this.channel) as TextChannel).threads.delete(this.id);
  }
  public send(content: MessageOptions | string | Embed): Promise<Message>;
  public send(msg: MessageOptions | string | Embed): Promise<Message>;
  public async send(
    msg: MessageOptions | string
  ): Promise<Message | undefined> {
    let payload = {
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
