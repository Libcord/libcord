import { GuildChannel } from "./GuildChannel";
import type { Client } from "../../Client";
import type { APIGuildCategoryChannel } from "discord-api-types/v9";

export class CategoryChannel extends GuildChannel {
  public name: string;
  constructor(client: Client, data: APIGuildCategoryChannel) {
    super(client, data);
    this.name = data.name as string;
  }
}
