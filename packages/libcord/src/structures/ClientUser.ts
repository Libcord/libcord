import { User } from "./User";
import type { Presence } from "../types/Types";

/**
 * @category Structures
 */
export class ClientUser extends User {
  /**
   * get current presence of the bot
   */
  get presence(): Presence | null {
    if (this.client.presence) return this.client.presence;
    return null;
  }

  /**
   * update bot presence
   * @param presence a object of presence
   *
   * @example
   * client.user.setPresence({
   *     status: "dnd",
   *     activity: {
   *         type: "game",
   *         name: "on arcscord"
   *     }
   * });
   */
  public setPresence(presence: Presence) {
    if (!presence.status) presence.status = this.client.presence.status;
    if (!presence.status) presence.status = "online";
    this.client.shards.setPresence(presence);
  }

  public edit(data: { username?: string; avatar?: string }) {
    /*      this.client.requestHandler.request('PATCH', USER_ME, data).then(r => {
            this.username = r.username;
            this.avatar = r.avatar;
        }).catch(console.error);*/
  }

  public setUsername(username: string) {
    this.edit({ username });
  }
}
