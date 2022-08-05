import { CommandInteraction } from "./CommandInteraction";
import { Client } from "../../Client";
import {
  APIChatInputApplicationCommandInteraction,
  APIMessageComponentSelectMenuInteraction,
} from "discord-api-types/v9";

export class SelectMenuInteraction extends CommandInteraction {
  public customId: string;
  public values: string[];
  constructor(client: Client, data: APIMessageComponentSelectMenuInteraction) {
    super(client, data as unknown as APIChatInputApplicationCommandInteraction);
    this.customId = data.data.custom_id;
    this.values = data.data.values;
  }
}
