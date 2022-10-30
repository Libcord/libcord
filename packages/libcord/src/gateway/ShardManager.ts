import type { Client } from "../Client";
import Collection from "../utils/Collection";
import { Shard } from "./Shard";
import type { GatewayConnectData } from "../types/gateway";
import type { Presence } from "../types/Types";

/**
 * Represents a manager of handling shard creation & disposing.
 */
export class ShardManager extends Collection<number, Shard> {
  #client: Client;
  public url?: string;
  private interval: any;
  /**
   * Represents a manager of handling shard creation & disposing.
   * @param client The [[WebSocketClient]] attached to this [[ShardManager]].
   */
  constructor(client: Client) {
    super();
    this.interval = setInterval(() => {
      this._checkReady();
    }, 10000);
    this.#client = client;
  }

  /**
   * Returns the average latency of all shards
   */
  get latency() {
    return this.reduce((a, b) => a + b.latency, 0) / this.size;
  }

  /**
   * Returns all of the connected shards available
   */
  get connected() {
    return this.filter((shard) => shard.status === "connected");
  }

  /**
   * Returns a shard by it's guild ID
   * @param guildID The guild ID
   */
  getByGuildId(guildID: bigint): Shard | undefined;
  getByGuildId(guildID: string): Shard | undefined;
  getByGuildId(guildID: string | bigint) {
    const gid = typeof guildID === "string" ? BigInt(guildID) : guildID;
    const sid = Number(gid >> 22n) % this.size;

    if (isNaN(sid))
      throw new TypeError(`got nan when doing (${gid} >> 22n) % shards`);

    return this.get(sid);
  }

  /**
   * Connects a shard to Discord, if there is a
   * shard available in this shard manager, it'll
   * attempt to re-connect or throw a Error if
   * a shard is already connected.
   *
   * @param id The shard ID to create
   * @param data the gateway data
   */
  async connect(id: number, data: GatewayConnectData) {
    this.url = data.url;
    let shard = this.get(id);
    if (shard !== undefined && shard.status !== "disconnected")
      throw new TypeError(`Shard #${id} already exists and is not dead.`);

    if (shard !== undefined && shard.status === "disconnected") {
      await shard.connect(data);
      return shard;
    }

    shard = new Shard(this.#client, id);
    /*shard
      .on("disconnect", (id, error) =>
        this.#client.emit("er", id, error)
      )
      .on("connect", (id) => this.#client.emit(SHARD_EVENTS.SHARD_CONNECT, id))
      .on("close", (id, code, error, recoverable) =>
        this.#client.emit(
          SHARD_EVENTS.SHARD_CLOSE,
          id,
          code,
          error,
          recoverable
        )
      )
      .on("error", (id, error) =>
        this.#client.emit(SHARD_EVENTS.SHARD_ERROR, id, error)
      )
      .on("resume", (id) => this.#client.emit(SHARD_EVENTS.SHARD_RESUME, id))*/
    shard
      .on("ready", (id) => {
        this.#client.emit("shardReady", id);
        this.set(shard!.id, shard!);
      })
      .on("debug", (...args) => this.#client.emit("shardDebug", id, ...args));
    return shard.connect(data);
  }

  /**
   * updates presence for all shards
   */
  setPresence(presence: Presence) {
    for (const shard of this.values()) {
      shard.updatePresence(presence);
    }
    return true;
  }
  /**
   * disconnects all shards
   */
  disconnectShards() {
    for (const shard of this.values()) {
      shard.disconnect();
    }
    return true;
  }

  /**
   * Disposes a shard from this shard manager
   * if connected, or it'll do nothing if shards
   * are dead.
   */
  dispose(id: number, reconnect: boolean = false) {
    const shard = this.get(id);
    if (shard === undefined)
      throw new TypeError(`Shard #${id} is not connected.`);

    shard.disconnect();
    return this;
  }

  // Checks if all shards are ready
  // and emits 'ready' if they are.
  private _checkReady() {
    for (const shard of this.values()) {
      if (shard.status !== "connected") return;
    }

    this.#client.emit("ready");
    clearInterval(this.interval);
  }
}
