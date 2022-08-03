import { VoiceChannel } from "./VoiceChannel";
import { ChannelTypes } from "../../Constants";

export class StageChannel extends VoiceChannel {
  public readonly type = ChannelTypes.Stage;
}
