import { Base } from "../Base";
import { Client } from "../../Client";
import { APIBaseInteraction } from "discord-api-types/v9";
import { ApplicationCommandType } from "../ApplicationCommand";
import { MessageContextMenuInteraction } from "./MessageContextMenuInteraction";
import { CommandInteraction } from "./CommandInteraction";
import { UserContextMenuInteraction } from "./UserContextMenuInteraction";

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
    if (this.type === ApplicationCommandType.CHAT_INPUT) return true;
    return false;
  }
  isMessageContextMenu(): this is MessageContextMenuInteraction {
    if (this.type === ApplicationCommandType.MESSAGE) return true;
    return false;
  }
  isUserContextMenu(): this is UserContextMenuInteraction {
    if (this.type === ApplicationCommandType.USER) return true;
    return false;
  }
}
