import { TextChannel } from "./TextChannel";
import { ChannelTypes } from "../../Constants";

export class NewsChannel extends TextChannel {
  public rateLimitPerUser = null; // news channel don't have message rate limit
  public readonly type = ChannelTypes.News;
}
