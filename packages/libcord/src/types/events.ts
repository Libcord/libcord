import type {
  CommandInteraction,
  Interaction,
  Message,
  MessageContextMenuInteraction,
  SelectMenuInteraction,
  UserContextMenuInteraction,
} from "../structures";
import type ButtonInteraction from "../structures/interactions/ButtonInteraction";

export interface ClientEvents {
  /** @event Emitted when all shards are ready. */
  ready: [];
  /** @event Emitted when an error happens. */
  error: [shard: number, info: Error | string];
  /** @event Emitted when this shard disconnects.*/
  shardDisconnect: [id: number, code: number, error: string | Error];
  /** @event Emitted when a shard is fully ready. */
  shardReady: [id: number];
  /** @event Emitted when a shard resumes a connection. */
  shardResume: [id: number];
  /** @event Emitted when a shard debugs information. */
  shardDebug: [id: number, ...args: any];
  /** @event Emitted when a message has been received. */
  messageCreate: [message: Message];
  /** @event Emitted when an interaction has been used by a user  */
  interactionCreate: [
    interaction:
      | Interaction
      | MessageContextMenuInteraction
      | CommandInteraction
      | SelectMenuInteraction
      | UserContextMenuInteraction
      | ButtonInteraction
  ];
}
export interface ShardEvents {
  /** @event Emitted with various information for debugging. */
  debug: [...args: any];
  /** @event Emitted when this shard disconnects.*/
  disconnect: [id: number, code: number, error: string | Error];
  /** @event Emitted when an error happens. */
  error: [id: number, info: Error | string];
  /** @event Emitted when this shard is fully ready. */
  ready: [id: number];
  /** @event Emitted when this shard resumes a connection. */
  resume: [id: number];
  /** @event Emitted when this shard has received all its guilds. */
  guildsReceived: [id: number];
}
