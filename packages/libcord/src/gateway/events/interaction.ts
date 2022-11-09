import type { EventProcessor } from "./index";
import type {
  APIChatInputApplicationCommandInteraction,
  APIMessageApplicationCommandInteraction,
  APIMessageComponentButtonInteraction,
  APIMessageComponentSelectMenuInteraction,
  APIUserApplicationCommandInteraction,
  GatewayInteractionCreateDispatchData,
} from "discord-api-types/v9";
import {
  ApplicationCommandType,
  ComponentType,
  InteractionType,
} from "discord-api-types/v9";
import {
  CommandInteraction,
  MessageContextMenuInteraction,
  SelectMenuInteraction,
  UserContextMenuInteraction,
} from "../../structures";
import ButtonInteraction from "../../structures/interactions/ButtonInteraction";

export const INTERACTION_CREATE: EventProcessor<
  GatewayInteractionCreateDispatchData
> = (shard, data) => {
  if (data.type === InteractionType.ApplicationCommand) {
    switch (data.data.type) {
      case ApplicationCommandType.ChatInput:
        shard.client.emit(
          "interactionCreate",
          new CommandInteraction(
            shard.client,
            data as unknown as APIChatInputApplicationCommandInteraction
          )
        );
        break;
      case ApplicationCommandType.Message:
        shard.client.emit(
          "interactionCreate",
          new MessageContextMenuInteraction(
            shard.client,
            data as APIMessageApplicationCommandInteraction
          )
        );
        break;
      case ApplicationCommandType.User:
        shard.client.emit(
          "interactionCreate",
          new UserContextMenuInteraction(
            shard.client,
            data as APIUserApplicationCommandInteraction
          )
        );
        break;
    }
  } else if (data.type === InteractionType.MessageComponent) {
    switch (data.data.component_type) {
      case ComponentType.Button:
        shard.client.emit(
          "interactionCreate",
          new ButtonInteraction(
            shard.client,
            data as APIMessageComponentButtonInteraction
          )
        );
        break;
      case ComponentType.UserSelect:
        shard.client.emit(
          "interactionCreate",
          new SelectMenuInteraction(
            shard.client,
            data as APIMessageComponentSelectMenuInteraction
          )
        );
        break;
      case ComponentType.RoleSelect:
        shard.client.emit(
          "interactionCreate",
          new SelectMenuInteraction(
            shard.client,
            data as APIMessageComponentSelectMenuInteraction
          )
        );
        break;
      case ComponentType.ChannelSelect:
        shard.client.emit(
          "interactionCreate",
          new SelectMenuInteraction(
            shard.client,
            data as APIMessageComponentSelectMenuInteraction
          )
        );
        break;
      case ComponentType.MentionableSelect:
        shard.client.emit(
          "interactionCreate",
          new SelectMenuInteraction(
            shard.client,
            data as APIMessageComponentSelectMenuInteraction
          )
        );
        break;
      case ComponentType.StringSelect:
        shard.client.emit(
          "interactionCreate",
          new SelectMenuInteraction(
            shard.client,
            data as APIMessageComponentSelectMenuInteraction
          )
        );
        break;
    }
  }
};
