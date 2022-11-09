/**
 * @category Structures
 */
import { CommandInteraction } from "./CommandInteraction";
import type { Snowflake } from "../../utils/Utils";
import type {
  APIChatInputApplicationCommandInteraction,
  APIUserApplicationCommandInteraction,
} from "discord-api-types/v9";
import { User } from "../User";
import type { Client } from "../../Client";

/**
 * @category interactions
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
