import type { EventProcessor } from "./index";
import type { GatewayMessageCreateDispatchData } from "discord-api-types/v9";
import { Message } from "../../structures";

export const MESSAGE_CREATE: EventProcessor<
  GatewayMessageCreateDispatchData
> = (shard, data) => {
  const msg = new Message(shard.client, data);
  shard.client.emit("messageCreate", msg);
};
