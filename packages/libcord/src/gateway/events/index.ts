import type { GatewayReadyDispatchData } from "discord-api-types/v9";
import { ClientApplication, ClientUser } from "../../structures";
import type { Shard } from "../Shard";

export type EventProcessor<S> = (shard: Shard, data: S) => void | Promise<void>;

/** @internal */
export const READY: EventProcessor<GatewayReadyDispatchData> = (
  shard,
  data
) => {
  if (!shard.client.user)
    shard.client.user = new ClientUser(shard.client, data.user);
  if (!shard.client.application)
    shard.client.application = new ClientApplication(
      shard.client,
      data.application
    );
  shard.emit("ready", shard.id);
};
export * from "./message";
export * from "./interaction";
