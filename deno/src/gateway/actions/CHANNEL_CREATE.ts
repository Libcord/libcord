import {
  ChannelType,
  GatewayChannelCreateDispatchData,
} from "discord-api-types/v9";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";
import {
  CategoryChannel,
  Channel,
  TextChannel,
  VoiceChannel,
} from "../../structures";

export class CHANNEL_CREATE extends Action {
  async handle(d: GatewayChannelCreateDispatchData) {
    return this.emitter.emit(CLIENT_EVENTS.CHANNEL_CREATE, this.detectType(d));
  }
  detectType(d: GatewayChannelCreateDispatchData) {
    if (d.type === ChannelType.GuildText) {
      return new TextChannel(this.client, d);
    } else if (d.type === ChannelType.GuildVoice) {
      return new VoiceChannel(this.client, d);
    } else if (d.type === ChannelType.GuildCategory) {
      return new CategoryChannel(this.client, d);
    } else {
      return new Channel(this.client, d);
    }
  }
}
