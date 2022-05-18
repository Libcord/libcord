import { APIGuild } from "discord-api-types/v9";
import { Client } from "../Client";
import { Collection } from "../utils/Collection";
import { Snowflake } from "../utils/Snowflake";
import { ApplicationCommand } from "./ApplicationCommand";
import { Base } from "./Base";
import { Channel, ChannelTypes } from "./channels/Channel";
import { VoiceChannel } from "./channels/VoiceChannel";
import { Member } from "./Member";
import { User } from "./User";
import { Role } from "./Role";

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
  public channels = new Collection<Snowflake, Channel>();
  public members = new Collection<Snowflake, Member>();
  public slashCommands = new Collection<Snowflake, ApplicationCommand>();
  public roles = new Collection<Snowflake, Role>();

  public data: APIGuild;

  constructor(client: Client, data: APIGuild) {
    super(client);
    this.id = data.id as unknown as Snowflake;
    this.name = data.name;
    this.icon = data.icon;
    this.slash = data.splash;
    this.discoverySlash = data.discovery_splash;
    this.ownerId = data.owner_id as unknown as Snowflake;
    this.owner = client.users.get(data.owner_id as unknown as Snowflake)!;
    this.afkChannelId = data.afk_channel_id as unknown as Snowflake;
    if (data.roles !== undefined) {
      for (let i = 0; i < data.roles.length; i++) {
        const role = data.roles[i];
        this.roles.add(new Role(this.client, role));
      }
    }
    if (data.members) {
      for (const member of data?.members!) {
        this.members.add(new Member(this.client, this, member));
      }
    }
    this.data = data;
  }

  get afkChannel(): VoiceChannel | null {
    return this.afkChannelId && this.channels.has(this.afkChannelId)
      ? this.channels.get(this.afkChannelId)!.type ===
        ChannelTypes.VOICE_CHANNEL
        ? (this.channels.get(this.afkChannelId) as VoiceChannel)
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
