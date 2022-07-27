import { GatewayGuildRoleDeleteDispatchData } from "discord-api-types/v9";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";
import { Role } from "../../structures";

export class ROLE_DELETE extends Action {
  async handle(d: GatewayGuildRoleDeleteDispatchData) {
    const guild = this.client.guilds.get(d.guild_id);
    const role = guild?.roles.cache.get(d.role_id);

    guild?.roles.cache.delete(d.role_id);
    return this.emitter.emit(CLIENT_EVENTS.ROLE_DELETE, role);
  }
}
