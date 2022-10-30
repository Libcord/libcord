import type { GatewayGuildCreateDispatchData } from "discord-api-types/v9";
import type { Client } from "../Client";
import type { Snowflake } from "../utils/Utils";
import { detectChannelType } from "../utils/Utils";
import { Base } from "./Base";
import type { User } from "./User";
import { getGuildIcon } from "../rest/CDN";
import Collection from "../utils/Collection";
import type { ApplicationCommand } from "./ApplicationCommand";

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
  public commands: Collection<string, ApplicationCommand>;
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
    this.commands = new Collection<string, ApplicationCommand>();
    this._patch(data);
    this.data = data;
  }
  _patch(d: GatewayGuildCreateDispatchData) {
    if (d.channels) {
      for (const ch of d.channels) {
        this.client.channels.set(ch.id, detectChannelType(this.client, ch));
      }
    }
  }
  get iconURL() {
    return this.icon ? getGuildIcon(this.id, this.icon) : null;
  }

  /**
     * get all applications commands of this guild
     * @param [cache=true] set the commands to cache
     * @return a array of commands object

    public fetchApplicationCommands(cache = true): Promise<ApplicationCommand[]> {
        return this.client.fetchGuildApplicationCommands(this.id, cache);
    }
     */
}
