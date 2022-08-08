import {
  ChannelType,
  GatewayThreadDeleteDispatchData,
} from "discord-api-types/v9";
import { Action } from "./Action";

import { CLIENT_EVENTS } from "../../Constants";
import { PrivateThread, PublicThread } from "../../structures";

export class THREAD_DELETE extends Action {
  async handle(d: GatewayThreadDeleteDispatchData) {
    return this.emitter.emit(CLIENT_EVENTS.THREAD_DELETE, this.detectType(d));
  }
  detectType(d: GatewayThreadDeleteDispatchData) {
    if (d.type == ChannelType.GuildPrivateThread) {
      return new PrivateThread(this.client, d);
    } else if (d.type == ChannelType.GuildPublicThread) {
      return new PublicThread(this.client, d);
    }
  }
}
