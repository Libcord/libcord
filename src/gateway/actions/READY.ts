import { GatewayReadyDispatchData } from "discord-api-types/v9";
import { ClientUser } from "../../structures";
import { Snowflake } from "../../utils/Snowflake";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";

export class READY extends Action {
  async handle(d: GatewayReadyDispatchData) {
    this.client.user = new ClientUser(this.client, d.user);
    this.client.users.set(d.user.id as unknown as Snowflake, this.client.user);
    if (this.client.fetchAllMembers) {
      for (const [id] of this.client.guilds) {
        await this.client.fetchMembers(id, 1000);
      }
    }
    if (this.client.slashCommand) {
      const commands = await this.client.fetchApplicationCommands();
      if (commands) {
        for (const command of commands) {
          this.client.slashCommands.set(command.id, command);
        }
      }
    }
    this.emitter.emit(CLIENT_EVENTS.READY);
  }
}
