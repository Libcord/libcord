import {
  APIChatInputApplicationCommandInteraction,
  MessageFlags,
  Utils,
} from "discord-api-types/v9";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { Channel } from "../channels/Channel";
import { Guild } from "../Guild";
import { Member } from "../Member";
import { User } from "../User";
import { MESSAGES, RESPOND_INTERACTION } from "../../rest/EndPoints";
import { FileOption, Message } from "../Message";
import { Embed } from "../Embed";
import { ApplicationCommandOptionsTypes } from "../ApplicationCommand";
import { Interaction } from "./Interaction";
import * as FormData from "form-data";
import { FileUtils } from "../../utils/FileUtils";
import { ComponentsType } from "../components/ActionRow";

/**
 * @category Structures
 */
export class CommandInteraction extends Interaction {
  public id: Snowflake;
  public channel: Channel | null;
  public guild: Guild | null;
  public user?: User;
  public member: Member | null;
  public token: string;
  public options?: any | null;
  public defered?: boolean;
  public replied?: boolean;

  constructor(client: Client, data: APIChatInputApplicationCommandInteraction) {
    super(client, data);
    this.data = data;
    this.id = data.id as unknown as Snowflake;
    this.channel =
      client.channels.get(data.channel_id as unknown as Snowflake) || null;
    this.token = data.token;
    if (data.data.options) {
      this.options = data.data.options.map((d: any) => {
        return {
          value: d.value,
          name: d.value,
          type: ApplicationCommandOptionsTypes[d.type],
        };
      });
    }

    if (Utils.isGuildInteraction(data)) {
      this.guild = client.guilds.get(data.guild_id as unknown as Snowflake)!;
      this.member =
        this.guild.members.get(data.member.user.id as unknown as Snowflake) ||
        new Member(client, this.guild, data.member);
      this.user = this.member.user;
    } else {
      this.guild = null;
      this.member = null;
      this.user = data.user
        ? client.users.get(data.user.id as unknown as Snowflake) ||
          new User(client, data.user)
        : undefined;
    }
  }
  async defer(ephemeral: boolean) {
    await this.client.requestHandler.request(
      "POST",
      RESPOND_INTERACTION(this.id, this.token),
      {
        type: 5,
        data: {
          flags: ephemeral ? MessageFlags.Ephemeral : undefined,
        },
      }
    );
  }
  async reply(interactionOptions: InteractionOptions | string) {
    if (this.replied) throw new Error("[INTERACTIONS]: Already replied.");
    const payload = {
      content: "" as any,
      embeds: [] as any,
      attachments: [] as any,
      components: [] as any,
    };
    if (interactionOptions instanceof Embed) {
      payload.embeds.push(interactionOptions.getJSON());
    }
    if (typeof interactionOptions === "string") {
      payload.content = interactionOptions;
    }
    if (typeof interactionOptions === "object") {
      if (typeof interactionOptions?.content === "string") {
        payload.content = interactionOptions?.content;
      }
      if (interactionOptions.content instanceof Embed) {
        payload.embeds.push(interactionOptions.content.getJSON());
      }
      if (interactionOptions.embeds) {
        interactionOptions.embeds.forEach((em) => {
          if (em instanceof Embed) {
            payload.embeds.push((em as Embed).getJSON());
          } else {
            payload.embeds.push(em);
          }
        });
      }
      if (interactionOptions.components?.length! > 0) {
        interactionOptions.components?.forEach((comp: ComponentsType) => {
          payload.components.push(comp);
        });
      }
      if (interactionOptions.files) {
        let temp = new FormData();
        const { files } = await FileUtils.resolveFiles(
          interactionOptions.files,
          payload
        );
        const attachment = files.map((file: any, i: any) => {
          const filee = interactionOptions.files?.[i];
          for (const file of files) {
            temp.append(`files[${i}]`, file.file, {
              filename: file.name,
              contentType: file.contentType,
            });
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
        const JSONPayload = JSON.stringify({ type: 4, data: payload });
        temp.append("payload_json", JSONPayload, {
          contentType: "application/json",
        });
        const res: any = await this.client.requestHandler.request(
          "POST",
          RESPOND_INTERACTION(this.id, this.token),
          temp
        );
        return this;
      }
    }
    await this.client.requestHandler.request(
      "POST",
      RESPOND_INTERACTION(this.id, this.token),
      JSON.stringify({ type: 4, data: payload })
    );
    return this;
  }
}
export interface InteractionOptions {
  content?: string | Embed;
  embeds?: Array<Embed> | Array<any>;
  components?: Array<ComponentsType>;
  files?: FileOption[];
}
