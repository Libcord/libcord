import { GatewayGuildRoleCreateDispatchData } from "discord-api-types/v9";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";
import { Role } from "../../structures";

export class ROLE_CREATE extends Action {
  async handle(d: GatewayGuildRoleCreateDispatchData) {
    return this.emitter.emit(
      CLIENT_EVENTS.ROLE_CREATE,
      new Role(this.client, d.role)
    );
  }
}
