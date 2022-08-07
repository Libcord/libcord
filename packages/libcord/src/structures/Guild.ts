import {
  GatewayGuildCreateDispatchData,
  GatewayGuildCreateDispatch,
} from "discord-api-types/v9";
import { Client } from "../Client";
import { Collection } from "../utils/Collection";
import { Snowflake } from "../utils/Snowflake";
import { ApplicationCommand } from "./ApplicationCommand";
import { Base } from "./Base";
import { VoiceChannel } from "./channels/VoiceChannel";
import { Member } from "./Member";
import { User } from "./User";
import ChannelManager from "../managers/ChannelManager";
import { ChannelTypes } from "../Constants";
import RoleManager from "../managers/RoleManager";
import { GuildBanManager } from "../managers/GuildBanManager";

/**
 * @category Structures
 */
export class Guild extends Base {
  public readonly id: Snowflake;
  public name: string;
  public icon: string | null;
  public slash: string | null;
  public discoverySlash: string | null;
  public ownerId: Snowflake;
  public owner: User;
  public afkChannelId: Snowflake | null;
  public channels: ChannelManager;
  public bans: GuildBanManager;
  public members = new Collection<Snowflake, Member>();
  public slashCommands = new Collection<Snowflake, ApplicationCommand>();
  public roles: RoleManager;

  public data: GatewayGuildCreateDispatchData;

  constructor(client: Client, data: GatewayGuildCreateDispatchData) {
    super(client);

    this.id = data.id as unknown as Snowflake;
    this.name = data.name;
    this.icon = data.icon;
    this.slash = data.splash;
    this.discoverySlash = data.discovery_splash;
    this.ownerId = data.owner_id as unknown as Snowflake;
    this.owner = client.users.get(data.owner_id as unknown as Snowflake)!;
    this.afkChannelId = data.afk_channel_id as unknown as Snowflake;
    this.data = data;
    this.roles = new RoleManager(client, this);
    this.channels = new ChannelManager(client, this);
    if (data.members) {
      for (const member of data?.members!) {
        this.members.add(new Member(this.client, this, member));
      }
    }
    this.bans = new GuildBanManager(client, this);
  }

  get afkChannel(): VoiceChannel | null {
    return this.afkChannelId && this.channels.cache?.has(this.afkChannelId)
      ? this.channels.cache?.get(this.afkChannelId)!.type === ChannelTypes.Voice
        ? (this.channels.cache?.get(this.afkChannelId) as VoiceChannel)
        : null
      : null;
  }

  /**
   * get all applications commands of this guild
   * @param [cache=true] set the commands to cache
   * @return a array of commands object
   */
  public fetchApplicationCommands(cache = true): Promise<ApplicationCommand[]> {
    return this.client.fetchGuildApplicationCommands(this.id, cache);
  }
}
