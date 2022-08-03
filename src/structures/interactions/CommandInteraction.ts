import { APIApplicationCommandInteraction, Utils } from "discord-api-types/v9";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { Base } from "../Base";
import { Channel } from "../channels/Channel";
import { Guild } from "../Guild";
import { Member } from "../Member";
import { User } from "../User";
import { RESPOND_INTERACTION } from "../../rest/EndPoints";
import { MessageInteractionOptions } from "../Message";
import { Embed } from "../Embed";
import { ApplicationCommandOptionsTypes } from "../ApplicationCommand";

/**
 * @category Structures
 */
export class CommandInteraction extends Base {
  public id: Snowflake;
  public channel: Channel | null;
  public guild: Guild | null;
  public user?: User;
  public member: Member | null;
  public token: string;
  public options?: any | null;
  public data: APIApplicationCommandInteraction;

  constructor(client: Client, data: APIApplicationCommandInteraction) {
    super(client);
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
  async reply(content: MessageInteractionOptions | string) {
    const payload = {
      content: "" as any,
      embeds: [] as any,
    };
    if (content instanceof Embed) {
      payload.embeds.push(content.getJSON());
    }
    if (typeof content === "string") {
      payload.content = content;
    }
    if (typeof content === "object") {
      if (content?.content === "string") {
        payload.content = content?.content;
      }
      if (content.content instanceof Embed) {
        payload.embeds.push(content.content.getJSON());
      }
      if (content.embeds) {
        content.embeds.forEach((em) => {
          if (em instanceof Embed) {
            payload.embeds.push((em as Embed).getJSON());
          } else {
            payload.embeds.push(em);
          }
        });
      }
    }
    await this.client.requestHandler.request(
      "POST",
      RESPOND_INTERACTION(this.id, this.token),
      JSON.stringify({ type: 4, data: payload }),
      this.client.token
    );
  }
}
