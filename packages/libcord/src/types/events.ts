export interface ClientEvents {
  /** @event Emitted when all shards are ready. */
  ready: [];
  /** @event Emitted when an error happens. */
  error: [info: Error | string, shard?: number];
  /** @event Emitted when this shard disconnects.*/
  shardDisconnect: [err: Error | undefined, id: number];
  /** @event Emitted when a shard is fully ready. */
  shardReady: [id: number];
  /** @event Emitted when a shard resumes a connection. */
  shardResume: [id: number];
  /** @event Emitted when a shard debugs information. */
  shardDebug: [id: number, ...args: any];
}
export interface ShardEvents {
  /** @event Emitted with various information for debugging. */
  debug: [...args: any];
  /** @event Emitted when this shard disconnects.*/
  disconnect: [err?: Error];
  /** @event Emitted when an error happens. */
  error: [info: Error | string, id: number];
  /** @event Emitted when this shard is fully ready. */
  ready: [id: number];
  /** @event Emitted when this shard resumes a connection. */
  resume: [id: number];
}
