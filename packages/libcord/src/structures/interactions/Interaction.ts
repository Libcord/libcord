import type { Client } from "../../Client";
import { Base } from "../Base";
import type {
  APIBaseInteraction,
  APIMessageComponentInteractionData,
} from "discord-api-types/v9";
import { ApplicationCommandType, ComponentType } from "discord-api-types/v9";
import type { CommandInteraction } from "./CommandInteraction";
import type { MessageContextMenuInteraction } from "./MessageContextMenuInteraction";
import type { UserContextMenuInteraction } from "./UserContextMenuInteraction";
import type ButtonInteraction from "./ButtonInteraction";
import type { SelectMenuInteraction } from "./SelectMenuInteraction";

export class Interaction extends Base {
  public data: APIBaseInteraction<any, any>;
  public name: string;
  public type: number;
  constructor(client: Client, data: APIBaseInteraction<any, any>) {
    super(client);
    this.data = data;
    this.name = data.data.name;
    this.type = data.data.type;
  }
  isCommand(): this is CommandInteraction {
    return this.type === ApplicationCommandType.ChatInput;
  }
  isMessageContextMenu(): this is MessageContextMenuInteraction {
    return this.type === ApplicationCommandType.Message;
  }
  isUserContextMenu(): this is UserContextMenuInteraction {
    return this.type === ApplicationCommandType.User;
  }
  isButton(): this is ButtonInteraction {
    return (
      (this.data.data as unknown as APIMessageComponentInteractionData)
        .component_type === ComponentType.Button
    );
  }
  isSelectMenu(): this is SelectMenuInteraction {
    return !!(
      (this.data.data as unknown as APIMessageComponentInteractionData)
        .component_type === ComponentType.MentionableSelect ||
      ComponentType.StringSelect ||
      ComponentType.ChannelSelect ||
      ComponentType.UserSelect ||
      ComponentType.RoleSelect
    );
  }
}
