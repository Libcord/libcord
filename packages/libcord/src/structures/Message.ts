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
import { Deprecated } from "../utils/Decorators";

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

  /**
   * Reply to a message
   * @param options The options for the message, can be a string or embed or object
   * @returns {Promise<Message>} message
   */
  public reply(options: MessageOptions | string | Embed): Promise<Message>;
  public async reply(
    options: MessageOptions | string
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
    if (options instanceof Embed) {
      payload.embeds.push(options.getJSON());
    }
    if (typeof options === "string") {
      payload.content = options;
    }
    if (typeof options === "object") {
      if (typeof options?.content === "string") {
        payload.content = options?.content;
      }
      if (options.content instanceof Embed) {
        payload.embeds.push(options.content.getJSON());
      }
      if (options.embeds) {
        options.embeds.forEach((em: any) => {
          if (em instanceof Embed) {
            payload.embeds.push((em as Embed).getJSON());
          } else {
            throw new Error("[LIBCORD] Embeds must be an instance of <Embed>");
          }
        });
      }
      if (options.components?.length! > 0) {
        options.components?.forEach((comp: ComponentsType) => {
          payload.components.push(comp);
        });
      }
      if (options.files) {
        let temp = new FormData();
        const { files } = await FileUtils.resolveFiles(options.files, payload);
        const attachment = files.map((file: any, i: any) => {
          const filee = options.files?.[i];
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
