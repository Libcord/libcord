import { APIGuildChannel } from "discord-api-types/v9";
import { Client } from "../../Client";
import { PermissionOverwrite } from "../../utils/PermissionOverwrite";
import { Snowflake } from "../../utils/Snowflake";
import { Guild } from "../Guild";
import { Channel } from "./Channel";
import { ChannelEditOptions } from "../../Constants";
import { TextChannel } from "./TextChannel";
import { VoiceChannel } from "./VoiceChannel";
import { CategoryChannel } from "./CategoryChannel";

export class GuildChannel extends Channel {
  public name: string;
  public guild: Guild;
  public nsfw: boolean;
  public position: number;
  public parentId: Snowflake | null;
  public permissionOverwrites: PermissionOverwrite[] = [];

  constructor(client: Client, data: APIGuildChannel<any>) {
    super(client, data);
    this.guild = client.guilds.get(data.guild_id as unknown as Snowflake)!;
    this.name = data.name!;
    this.nsfw = !!data.nsfw;
    this.position = data.position || 0;
    this.parentId = (data.parent_id as unknown as Snowflake) || null;
    if (data.permission_overwrites) {
      for (const permissionOverwrite of data.permission_overwrites) {
        this.permissionOverwrites.push(
          new PermissionOverwrite(
            permissionOverwrite as unknown as {
              id: Snowflake;
              type: number;
              allow: string;
              deny: string;
            }
          )
        );
      }
    }
  }

  update(data: APIGuildChannel<any>): GuildChannel {
    if (data.name !== this.name) this.name = data.name!;
    if (data.nsfw !== this.nsfw) this.nsfw = !!data.nsfw;
    if (data.position && this.position !== data.position)
      this.position = data.position;
    if (
      data.parent_id &&
      this.parentId &&
      this.parentId !== (data.parent_id as unknown as Snowflake)
    )
      this.parentId = data.parent_id as unknown as Snowflake;
    this.permissionOverwrites = [];
    if (data.permission_overwrites) {
      for (const permissionOverwrite of data.permission_overwrites) {
        this.permissionOverwrites.push(
          new PermissionOverwrite(
            permissionOverwrite as unknown as {
              id: Snowflake;
              type: number;
              allow: string;
              deny: string;
            }
          )
        );
      }
    }
    return this;
  }
  async edit(
    options: ChannelEditOptions
  ): Promise<
    GuildChannel | TextChannel | VoiceChannel | CategoryChannel | undefined
  > {
    return this.guild.channels.cache.get(this.id)?.edit(options);
  }
}
