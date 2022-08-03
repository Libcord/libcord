import {
  APIChatInputApplicationCommandInteraction,
  APIMessageApplicationCommandInteraction,
  APIMessageComponentButtonInteraction,
  APIMessageComponentSelectMenuInteraction,
  APIUserApplicationCommandInteraction,
  ApplicationCommandType,
  ComponentType,
  GatewayInteractionCreateDispatchData,
  InteractionType,
} from "discord-api-types/v9";
import { Action } from "./Action";
import { CommandInteraction } from "../../structures";
import { CLIENT_EVENTS } from "../../Constants";
import { MessageContextMenuInteraction } from "../../structures/interactions/MessageContextMenuInteraction";
import { UserContextMenuInteraction } from "../../structures/interactions/UserContextMenuInteraction";
import { ButtonInteraction } from "../../structures/interactions/ButtonInteraction";
import { SelectMenuInteraction } from "../../structures/interactions/SelectMenuInteraction";

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
    } else if (d.type === InteractionType.MessageComponent) {
      switch (d.data.component_type) {
        case ComponentType.Button:
          this.emitter.emit(
            CLIENT_EVENTS.INTERACTION_CREATE,
            new ButtonInteraction(
              this.client,
              d as APIMessageComponentButtonInteraction
            )
          );
          break;
        case ComponentType.SelectMenu:
          this.emitter.emit(
            CLIENT_EVENTS.INTERACTION_CREATE,
            new SelectMenuInteraction(
              this.client,
              d as APIMessageComponentSelectMenuInteraction
            )
          );
          break;
      }
    }
  }
}
