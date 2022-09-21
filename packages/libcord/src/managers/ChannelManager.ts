import Manager from "./Manager";
import { Client } from "../Client";
import { Collection } from "../utils/Collection";
import {
  CategoryChannel,
  Channel,
  Guild,
  GuildChannel,
  TextChannel,
  VoiceChannel,
} from "../structures";
import { ChannelCreateOptions, ChannelEditOptions } from "../Constants";
import { CREATE_CHANNEL, CHANNEL } from "../rest/EndPoints";
import { ChannelType, APIChannel, APIGuildChannel } from "discord-api-types/v9";
import { Snowflake } from "../utils/Snowflake";

export default class ChannelManager extends Manager {
  public readonly cache: Collection<
    Snowflake,
    GuildChannel | TextChannel | VoiceChannel | CategoryChannel
  >;
  public guild: Guild;
  constructor(client: Client, guild: Guild) {
    super(client);
    this.cache = new Collection<
      Snowflake,
      GuildChannel | TextChannel | VoiceChannel | CategoryChannel
    >();
    this.guild = guild;
    this._initCache();
  }
  _initCache() {
    // @ts-ignore
    for (const channel of this.guild.data.channels) {
      this._addCache(channel as APIGuildChannel<any>);
    }
  }
  _addCache(channel: APIGuildChannel<any>) {
    if (channel.type === ChannelType.GuildText) {
      this.cache?.set(
        channel.id as unknown as Snowflake,
        new TextChannel(this.client, channel)
      );
      return new TextChannel(this.client, channel);
    } else if (channel.type === ChannelType.GuildVoice) {
      this.cache?.set(
        channel.id as unknown as Snowflake,
        new VoiceChannel(this.client, channel)
      );
      return new VoiceChannel(this.client, channel);
    } else if (channel.type === ChannelType.GuildCategory) {
      this.cache?.set(
        channel.id as unknown as Snowflake,
        new CategoryChannel(this.client, channel)
      );
      return new CategoryChannel(this.client, channel);
    } else {
      this.cache?.set(
        channel.id as unknown as Snowflake,
        new GuildChannel(this.client, channel)
      );
      return new GuildChannel(this.client, channel);
    }
  }

  /**
   * Fetches a channel by id
   * @param channelId The id of the channel you want to fetch
   * @returns {Promise<TextChannel | GuildChannel | CategoryChannel | VoiceChannel>} The channel
   */
  async fetch(
    channelId: Snowflake
  ): Promise<TextChannel | GuildChannel | CategoryChannel | VoiceChannel> {
    if (this.cache.get(channelId)) {
      return this.cache.get(channelId) as
        | TextChannel
        | GuildChannel
        | CategoryChannel
        | VoiceChannel;
    } else {
      const res = await this.client.requestHandler.request(
        "GET",
        CHANNEL(channelId),
        {}
      );
      return this._addCache(res);
    }
  }

  /**
   * Create a channel in a server
   * @param options options when creating a channel
   */
  async create(
    options: ChannelCreateOptions
  ): Promise<TextChannel | Channel | CategoryChannel | VoiceChannel> {
    const res = await this.client.requestHandler.request(
      "POST",
      CREATE_CHANNEL(this.guild.id),
      JSON.stringify(options)
    );
    return this._addCache(res);
  }
  async edit(channelId: Snowflake, options: ChannelEditOptions) {
    if (!options.name)
      options.name = await this.fetch(channelId).then((d) => d.name);

    const d = await this.client.requestHandler.request(
      "PATCH",
      CHANNEL(channelId),
      JSON.stringify(options)
    );
    return this._addCache(d);
  }

  /**
   * Deletes a channel by id
   * @param channelId the channel id
   */
  async delete(channelId: Snowflake) {
    this.cache.delete(channelId);
    await this.client.requestHandler.request("DELETE", CHANNEL(channelId));
    return true;
  }
}
