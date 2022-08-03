import {
  APIChatInputApplicationCommandInteraction,
  APIUserApplicationCommandInteraction,
} from "discord-api-types/v9";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { CommandInteraction } from "./CommandInteraction";
import { User } from "../User";

/**
 * @category Structures
 */
export class UserContextMenuInteraction extends CommandInteraction {
  public id: Snowflake;

  constructor(client: Client, data: APIUserApplicationCommandInteraction) {
    super(client, data as unknown as APIChatInputApplicationCommandInteraction);
    this.data = data;
    this.id = data.id as unknown as Snowflake;
    this.token = data.token;
  }
  get targetUser(): User {
    const { target_id, resolved } = this.data.data;
    return (
      this.client.users.get(target_id) ||
      new User(this.client, resolved.users[target_id])
    );
  }
}
