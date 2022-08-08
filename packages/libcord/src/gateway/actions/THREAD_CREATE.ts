import {
  ChannelType,
  GatewayThreadCreateDispatchData,
} from "discord-api-types/v9";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";
import {
  PrivateThread,
  PublicThread
} from "../../structures";

export class THREAD_CREATE extends Action {
  async handle(d: GatewayThreadCreateDispatchData) {
    return this.emitter.emit(CLIENT_EVENTS.THREAD_CREATE, this.detectType(d));
  }
  detectType(d: GatewayThreadCreateDispatchData) {
    if(d.type == ChannelType.GuildPrivateThread){
      return new PrivateThread(this.client, d);
    }else if(d.type == ChannelType.GuildPublicThread){
      return new PublicThread(this.client, d);
    }
  }
}
