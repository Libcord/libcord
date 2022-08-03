import { ChannelTypes } from "../../Constants";
import { GuildChannel } from "./GuildChannel";

export class StoreChannel extends GuildChannel {
  public readonly type = ChannelTypes.Store;
}
