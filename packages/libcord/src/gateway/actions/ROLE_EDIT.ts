import { GatewayGuildRoleModifyDispatchData } from "discord-api-types/v9";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";
import { Role } from "../../structures";

export class ROLE_EDIT extends Action {
  async handle(d: GatewayGuildRoleModifyDispatchData) {
    return this.emitter.emit(
      CLIENT_EVENTS.ROLE_EDIT,
      new Role(this.client, d.role)
    );
  }
}
