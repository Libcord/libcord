import {
  APIChatInputApplicationCommandInteraction,
  GatewayInteractionCreateDispatchData,
  InteractionType,
  ApplicationCommandType,
  APIUserApplicationCommandInteraction,
} from "discord-api-types/v9";
import { Action } from "./Action";
import { CommandInteraction } from "../../structures";
import { CLIENT_EVENTS } from "../../Constants";
import { MessageContextMenuInteraction } from "../../structures/interactions/MessageContextMenuInteraction";
import { APIMessageApplicationCommandInteraction } from "discord-api-types/v9";
import { UserContextMenuInteraction } from "../../structures/interactions/UserContextMenuInteraction";

export class INTERACTION_CREATE extends Action {
  async handle(d: GatewayInteractionCreateDispatchData) {
    if (d.type === InteractionType.ApplicationCommand) {
      switch (d.data.type) {
        case ApplicationCommandType.ChatInput:
          this.emitter.emit(
            CLIENT_EVENTS.INTERACTION_CREATE,
            new CommandInteraction(
              this.client,
              d as unknown as APIChatInputApplicationCommandInteraction
            )
          );
          break;
        case ApplicationCommandType.Message:
          return this.emitter.emit(
            CLIENT_EVENTS.INTERACTION_CREATE,
            new MessageContextMenuInteraction(
              this.client,
              d as APIMessageApplicationCommandInteraction
            )
          );
        case ApplicationCommandType.User:
          return this.emitter.emit(
            CLIENT_EVENTS.INTERACTION_CREATE,
            new UserContextMenuInteraction(
              this.client,
              d as APIUserApplicationCommandInteraction
            )
          );
      }
    }
  }
}
