import { Action } from "./Action";
import { GatewayGuildCreateDispatchData } from "discord-api-types/v9";
import { CLIENT_EVENTS } from "../../Constants";
import { Guild } from "../../structures";

export class GUILD_CREATE extends Action {
  async handle(data: GatewayGuildCreateDispatchData) {
    this.client.guilds.add(new Guild(this.client, data));
    this.emitter.emit(CLIENT_EVENTS.GUILD_CREATE, new Guild(this.client, data));
  }
}
