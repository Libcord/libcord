import Manager from "./Manager";
import { Client } from "../Client";
import { Collection } from "../utils/Collection";
import {
  Channel,
  NewsThread,
  PrivateThread,
  PublicThread,
  TextChannel,
  Thread,
} from "../structures";
import { APIThreadChannel, ChannelType, Snowflake } from "discord-api-types/v9";
import {
  CHANNEL,
  CREATE_MESSAGE_THREAD,
  CREATE_THREAD,
  GUILD_THREADS,
} from "../rest/EndPoints";
import { ChannelTypes } from "../Constants";

export interface ThreadCreatePayload {
  name: string;
  type:
    | ChannelTypes.NewsThread
    | ChannelTypes.PublicThread
    | ChannelTypes.PrivateThread;
  messageId?: Snowflake;
}
export default class ThreadManager extends Manager {
  public cache: Collection<string, Thread>;
  public channel: TextChannel;
  constructor(client: Client, channel: TextChannel) {
    super(client);
    this.cache = new Collection<string, Thread>();
    this.channel = channel;
  }
  _add(thread: APIThreadChannel) {
    this.cache.set(thread.id, new Thread(this.client, thread));
    return new Thread(this.client, thread);
  }

  /**
   * Fetches all active threads in the current guild
   */
  async fetchAll() {
    const d = await this.client.requestHandler.request(
      "GET",
      GUILD_THREADS(this.channel.guild.id)
    );
    return d.threads.map((thread: APIThreadChannel) => {
      if (thread && thread.parent_id === this.channel.id) {
        this._add(thread);
      }
      if (thread.type === ChannelType.GuildNewsThread)
        return new NewsThread(this.client, thread);
      if (thread.type === ChannelType.GuildPublicThread)
        return new PublicThread(this.client, thread);
      if (thread.type === ChannelType.GuildPrivateThread)
        return new PrivateThread(this.client, thread);
    });
  }

  /**
   * Creates a thread in a channel
   * @param options The thread options
   */
  async create(options: ThreadCreatePayload) {
    const d = await this.client.requestHandler.request(
      "POST",
      options.messageId
        ? CREATE_MESSAGE_THREAD(this.channel.id, options.messageId)
        : CREATE_THREAD(this.channel.id),
      {
        name: options.name,
        type: options.type,
      }
    );

    return this._add(d);
  }

  /**
   * Deletes a thread from a channel
   * @param threadId the id from the thread
   */
  async delete(threadId: Snowflake) {
    await this.client.requestHandler.request("DELETE", CHANNEL(threadId));
    if (this.cache.has(threadId)) this.cache.delete(threadId);
    return this;
  }
}
