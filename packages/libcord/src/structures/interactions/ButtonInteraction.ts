import { CommandInteraction } from "./CommandInteraction";
import type { Client } from "../../Client";
import type {
  APIChatInputApplicationCommandInteraction,
  APIMessageComponentButtonInteraction,
} from "discord-api-types/v9";

/**
 * @category interactions
 */
export default class ButtonInteraction extends CommandInteraction {
  public customId: string;

  constructor(client: Client, data: APIMessageComponentButtonInteraction) {
    super(client, data as unknown as APIChatInputApplicationCommandInteraction);
    this.customId = data.data.custom_id;
  }
}
