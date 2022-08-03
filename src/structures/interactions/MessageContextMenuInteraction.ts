import {
  APIChatInputApplicationCommandInteraction,
  APIMessage,
  APIMessageApplicationCommandInteraction,
} from "discord-api-types/v9";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { CommandInteraction } from "./CommandInteraction";

/**
 * @category Structures
 */
export class MessageContextMenuInteraction extends CommandInteraction {
  public id: Snowflake;

  constructor(client: Client, data: APIMessageApplicationCommandInteraction) {
    super(client, data as unknown as APIChatInputApplicationCommandInteraction);
    this.data = data;
    this.id = data.id as unknown as Snowflake;
    this.token = data.token;
  }
  get targetMessage(): APIMessage {
    const { target_id, resolved } = this.data.data;
    return resolved.messages[target_id];
  }
}
