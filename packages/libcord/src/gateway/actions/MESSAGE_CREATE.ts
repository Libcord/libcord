import { Action } from "./Action";
import { GatewayMessageCreateDispatchData } from "discord-api-types/v9";
import { CLIENT_EVENTS } from "../../Constants";
import { Message } from "../../structures/index";
import { Snowflake, TextChannel } from "../../index";
export interface CustomMessageData extends GatewayMessageCreateDispatchData {
  channel: TextChannel;
}
export class MESSAGE_CREATE extends Action {
  async handle(data: CustomMessageData) {
    data.channel = (await this.client.fetchChannel(
      data.channel_id as unknown as Snowflake
    )) as TextChannel;
    this.emitter.emit(CLIENT_EVENTS.MESSAGE, new Message(this.client, data));
  }
}
