import { GatewayMessageCreateDispatchData } from "discord-api-types/v9";
import { Client } from "../Client";
import { Snowflake } from "../utils/Snowflake";
import { Base } from "./Base";
import { User, TextChannel, Guild } from "./index";
import { CustomMessageData } from "../gateway/actions";
import { ComponentsType, Member } from "..";
import { Embed } from "./Embed";
import { MESSAGES } from "../rest/EndPoints";
import { Stream } from "stream";
import * as FormData from "form-data";
import { FileUtils } from "../utils/FileUtils";

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

  public reply(msg: MessageOptions | string | Embed): Promise<Message>;
  public async reply(
    msg: MessageOptions | string
  ): Promise<Message | undefined> {
    const payload = {
      content: "" as any,
      embeds: [] as any,
      components: [] as any,
      message_reference: {
        message_id: this.id,
      },
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
        msg.embeds.forEach((em: any) => {
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
          MESSAGES(this.channelID),
          temp
        );
        const data = { channel: this, ...res };
        return new Message(this.client, data);
      }
    }
    const res: any = await this.client.requestHandler.request(
      "POST",
      MESSAGES(this.channelID),
      JSON.stringify(payload)
    );
    const data = { channel: this, ...res };
    return new Message(this.client, data);
  }
}
export interface FileOption {
  name?: string;
  description?: string;
  file?: Buffer | string | Stream;
}
export interface MessageMention {
  id: string;
}
export interface MessageOptions {
  content?: string | Embed;
  embeds?: Array<Embed> | Array<any>;
  components?: Array<ComponentsType>;
  files?: FileOption[];
  mentions?: { message?: MessageMention };
}
