import { Action } from "./Action";
import { GatewayGuildDeleteDispatchData } from "discord-api-types/v9";
import { CLIENT_EVENTS } from "../../Constants";
import { Guild } from "../../structures";

export class GUILD_DELETE extends Action {
  async handle(data: GatewayGuildDeleteDispatchData) {
    this.emitter.emit(
      CLIENT_EVENTS.GUILD_DELETE,
      this.client.guilds.get(data.id)
    );

    this.client.guilds.delete(data.id);
  }
}
