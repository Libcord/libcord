import {
  ChannelType,
  GatewayChannelModifyDispatchData,
  APIGuildChannel,
} from "discord-api-types/v9";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";
import {
  CategoryChannel,
  Channel,
  GuildChannel,
  TextChannel,
  VoiceChannel,
} from "../../structures";

export class CHANNEL_EDIT extends Action {
  async handle(d: GatewayChannelModifyDispatchData) {
    const newChan = this.detectType(d);
    const guild = this.client.guilds.get(
      (d as APIGuildChannel<any>).guild_id as string
    );
    guild?.channels.cache.set(d.id, newChan as GuildChannel);

    return this.emitter.emit(CLIENT_EVENTS.CHANNEL_EDIT, newChan);
  }
  detectType(d: GatewayChannelModifyDispatchData) {
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
