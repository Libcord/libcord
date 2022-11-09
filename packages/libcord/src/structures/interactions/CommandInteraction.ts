/**
 * @category Structures
 */
import {
  APIChatInputApplicationCommandInteraction,
  MessageFlags,
  RESTDeleteAPIInteractionOriginalResponseResult,
  RESTPatchAPIInteractionOriginalResponseResult,
  RESTPostAPIInteractionCallbackJSONBody,
  Utils,
} from "discord-api-types/v9";
import type { Client } from "../../Client";
import type { Member } from "../Member";
import { User } from "../User";
import type { Guild } from "../Guild";
import type { Channel } from "../channels";
import type { Snowflake } from "../../utils/Utils";
import { Interaction } from "./Interaction";
import { ApplicationCommandOptionsTypes } from "../ApplicationCommand";
import { EditReply, RespondInteraction } from "../../rest/EndPoints";
import type { ComponentsType } from "../components/Row";
import type { FileOption } from "../../Constants";
import { Parser } from "../../utils/Parser";

/**
 * @category interactions
 */
export class CommandInteraction extends Interaction {
  public id: Snowflake;
  public channel: Channel | null;
  public guild: Guild | null;
  public user?: User;
  public member: Member | null | undefined;
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
    } else {
      this.guild = null;
      this.member = null;
      this.user = data.user
        ? client.users.get(data.user.id as unknown as Snowflake) ||
          new User(client, data.user)
        : undefined;
    }
  }

  /**
   * Sets a thinking status for the command
   * @param ephemeral Display this only for the user or for everyone
   */
  async defer(ephemeral: boolean) {
    if (this.defered) throw new Error("Interaction already has been deferred");
    await this.client.requestHandler.request({
      method: "POST",
      path: RespondInteraction(this.id, this.token),
      json: {
        type: 5,
        data: {
          flags: ephemeral ? MessageFlags.Ephemeral : undefined,
        },
      },
    });
    this.defered = true;
    return this;
  }
  /**
   * Edits its reply that has already been sent
   * @param interactionOptions the content to send with the reply
   */
  async editReply(interactionOptions: InteractionOptions) {
    if (!this.replied && !this.defered)
      throw new Error(
        "[INTERACTIONS]: You can't edit a reply if you haven't replied :)"
      );
    const { type, data } = await Parser.resolveContentForApi(
      this.client,
      interactionOptions,
      false
    );
    if (type === "file") {
      await this.client.requestHandler.request<RESTPatchAPIInteractionOriginalResponseResult>(
        {
          path: EditReply(this.client.application?.id as string, this.token),
          method: "PATCH",
          form: data,
          auth: true,
        }
      );
      return this;
    } else if (type === "json") {
      await this.client.requestHandler.request<RESTPatchAPIInteractionOriginalResponseResult>(
        {
          path: EditReply(this.client.application?.id as string, this.token),
          method: "PATCH",
          json: data,
          auth: true,
        }
      );
      return this;
    }
  }

  /**
   * Removes the original reply
   */
  async deleteReply() {
    if (!this.replied && !this.defered)
      throw new Error(
        "[INTERACTIONS]: You can't delete a reply if you haven't replied :)"
      );
    await this.client.requestHandler.request<RESTDeleteAPIInteractionOriginalResponseResult>(
      {
        path: EditReply(this.client.application?.id as string, this.token),
        method: "DELETE",
        auth: true,
      }
    );
    return this;
  }
  /**
   * Responds to an interaction
   * @param interactionOptions the content to send with the reply
   */
  async reply(interactionOptions: InteractionOptions) {
    if (this.replied) throw new Error("[INTERACTIONS]: Already replied.");
    const { type, data } = await Parser.resolveContentForApi(
      this.client,
      interactionOptions,
      true
    );
    if (type === "file") {
      await this.client.requestHandler.request<RESTPostAPIInteractionCallbackJSONBody>(
        {
          path: RespondInteraction(this.id, this.token),
          method: "POST",
          form: data,
          auth: true,
        }
      );
      return this;
    } else if (type === "json") {
      await this.client.requestHandler.request<RESTPostAPIInteractionCallbackJSONBody>(
        {
          path: RespondInteraction(this.id, this.token),
          method: "POST",
          json: {
            type: 4,
            data,
          },
          auth: true,
        }
      );
      return this;
    }
  }
}
export interface InteractionOptions {
  content?: string;
  components?: Array<ComponentsType>;
  files?: FileOption[];
  ephemeral?: boolean;
}
