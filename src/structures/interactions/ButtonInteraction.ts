import { CommandInteraction } from "./CommandInteraction";
import { Client } from "../../Client";
import {
  APIChatInputApplicationCommandInteraction,
  APIMessageComponentButtonInteraction,
} from "discord-api-types/v9";

export class ButtonInteraction extends CommandInteraction {
  public customId: string;
  constructor(client: Client, data: APIMessageComponentButtonInteraction) {
    super(client, data as unknown as APIChatInputApplicationCommandInteraction);
    this.customId = data.data.custom_id;
  }
}
