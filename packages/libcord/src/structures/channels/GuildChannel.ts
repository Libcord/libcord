import { Channel } from "./Channel";
import type { APIGuildChannel } from "discord-api-types/v9";
import type { Client } from "../../Client";
import type { Guild } from "../Guild";

export class GuildChannel extends Channel {
  public guild: Guild;
  constructor(client: Client, data: APIGuildChannel<any>) {
    super(client, data);
    this.guild = client.guilds.get(data.guild_id as string) as Guild;
  }
}
