import {
  GatewayInteractionCreateDispatchData,
  InteractionType,
} from "discord-api-types/v9";
import { Action } from "./Action";
import { CommandInteraction } from "../../structures";
import { CLIENT_EVENTS } from "../../Constants";

export class INTERACTION_CREATE extends Action {
  async handle(d: GatewayInteractionCreateDispatchData) {
    if (d.type === InteractionType.ApplicationCommand) {
      return this.emitter.emit(
        CLIENT_EVENTS.INTERACTION_CREATE,
        new CommandInteraction(this.client, d)
      );
    }
  }
}
