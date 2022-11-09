import { CommandInteraction } from "./CommandInteraction";
import type {
  APIChatInputApplicationCommandInteraction,
  APIMessageComponentSelectMenuInteraction,
} from "discord-api-types/v9";
import type { Client } from "../../Client";

/**
 * @category interactions
 */
export class SelectMenuInteraction extends CommandInteraction {
  public customId: string;
  public values: string[];
  constructor(client: Client, data: APIMessageComponentSelectMenuInteraction) {
    super(client, data as unknown as APIChatInputApplicationCommandInteraction);
    this.customId = data.data.custom_id;
    this.values = data.data.values;
  }
}
