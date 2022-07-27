import { ChannelTypes } from "../../Constants";
import { GuildChannel } from "./GuildChannel";

export class CategoryChannel extends GuildChannel {
  public readonly type = ChannelTypes.Category;
}
