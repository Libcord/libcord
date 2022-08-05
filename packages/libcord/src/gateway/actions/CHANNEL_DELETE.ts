import {
  ChannelType,
  GatewayChannelDeleteDispatchData,
  APIGuildChannel,
} from "discord-api-types/v9";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";
import {
  CategoryChannel,
  Channel,
  TextChannel,
  VoiceChannel,
} from "../../structures";

export class CHANNEL_DELETE extends Action {
  async handle(d: GatewayChannelDeleteDispatchData) {
    if ((d as APIGuildChannel<any>).guild_id) {
      const guild = this.client.guilds.get(
        (d as APIGuildChannel<any>).guild_id as string
      );

      guild?.channels.cache.delete(d.id);
    }
    return this.emitter.emit(CLIENT_EVENTS.CHANNEL_DELETE, this.detectType(d));
  }
  detectType(d: GatewayChannelDeleteDispatchData) {
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
