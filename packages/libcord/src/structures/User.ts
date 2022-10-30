import { Base } from "./Base";
import type { Snowflake } from "../utils/Utils";
import { getDate } from "../utils/Utils";
import type { Client } from "../Client";
import type { APIUser } from "discord-api-types/v9";
import type { ImageUrlOptions } from "../types/Types";
import { getDefaultUserAvatar, getUserAvatar } from "../rest/CDN";

/**
 * @category Structures
 */
export class User extends Base {
  /**
   * the id of the user
   */
  public id: Snowflake;

  /**
   * hash of user avatar
   */
  public avatar: string | null;

  /**
   * username of the user
   */
  public username: string;

  /**
   * discriminator of the user
   */
  public discriminator: string;

  /**
   * tag of the user (username#descriminator)
   */
  public tag: string;

  /**
   * if the user is a bot
   */
  public bot: boolean;

  /**
   * if the user are a official discord system user
   */
  public system: boolean;

  /**
   * the date of the user account was created in timestamp
   */
  public readonly createdAt: number;

  /**
   * user public's flags
   */
  public publicFlags: number;

  /**
   *
   * @param client
   * @param data
   */
  constructor(client: Client, data: APIUser) {
    super(client);

    // init data
    this.id = data.id;
    this.avatar = data.avatar;
    this.username = data.username;
    this.discriminator = data.discriminator;
    this.tag = `${data.username}#${data.discriminator}`;
    this.bot = !!data.bot;
    this.system = !!data.system;
    this.createdAt = getDate(data.id);
    this.publicFlags = data.public_flags ? data.public_flags : 0;

    this.client.users.set(this.id, this);
  }

  /**
   * get avatar URL
   * @param format the format of image
   * @param size the size of image
   * @param dynamic if the avatar are animated give gif
   */
  avatarURL({ format, size, dynamic }: ImageUrlOptions): string {
    if (!format) format = "jpg";
    if (!size) size = 4096;
    if (!dynamic) dynamic = false;
    if (!this.avatar)
      return getDefaultUserAvatar(`${parseInt(this.discriminator, 10) % 5}`);
    if (dynamic && this.avatar && this.avatar.startsWith("a_")) format = "gif";
    return getUserAvatar(this.id, this.avatar, format, size);
  }

  toString() {
    return `<@${this.id}>`;
  }
}
