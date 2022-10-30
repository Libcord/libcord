/**
 * list of activity types
 */
import type { Agent, FormData } from "undici";

export enum ActivityTypes {
  /**
   * Playing {game}
   */
  game = 0,
  /**
   * Streaming {details}
   */
  streaming = 1,
  /**
   * Listening to {name}
   */
  listening = 2,
  /**
   * Watching {details}
   */
  watching = 3,
  /**
   * {emoji} {details}
   * WARNING : don't work for bots
   */
  custom = 4,
  /**
   * Competing in {name}
   */
  competing = 5,
}

export type ActivityType = keyof typeof ActivityTypes;
/**
 * a presence object
 * @interface
 */
export interface Presence {
  /**
   * The user's activities
   *
   * See https://discord.com/developers/docs/topics/gateway#activity-object
   */
  activity?: Activity;
  /**
   * The user's new status
   *
   * See https://discord.com/developers/docs/topics/gateway#update-status-status-types
   */
  status?: PresenceStatus;
  /**
   * Whether or not the client is afk. default false
   */
  afk?: boolean;
}

export type PresenceStatus =
  | "online"
  | "dnd"
  | "idle"
  | "invisible"
  | "offline";
/**
 *
 */
export interface Activity {
  /**
   * The activity's name
   */
  name: string;
  /**
   * Activity type
   *
   * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
   * @default "game"
   */
  type?: ActivityType;
  /**
   * Stream url (only with type Streaming)
   */
  url?: string;
}

export type imageFormats = "jpg" | "png" | "webp" | "gif";
export type imageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;

export interface ImageUrlOptions {
  /**
   * the format of the image
   * @default jpg
   */
  format?: imageFormats;
  /**
   * the size of the image
   * @default 4096
   */
  size?: imageSize;
  /**
   * if the avatar are animated give gif url
   * @default false
   */
  dynamic?: boolean;
}
export interface RequestOptions {
  auth?: boolean | string;
  files?: Array<File>;
  form?: FormData;
  headers?: Record<string, string>;
  json?: unknown;
  method: RESTMethod;
  path: string;
  priority?: boolean;
  query?: URLSearchParams;
  reason?: string;
  route?: string;
}
export interface LatencyRef {
  lastTimeOffsetCheck: number;
  latency: number;
  raw: Array<number>;
  timeOffsets: Array<number>;
  timeoffset: number;
}
export interface RESTOptions {
  /**
   * The agent to use for rest.
   * @defaultValue null
   */
  agent?: Agent | null;
  /**
   * The base URL to use for rest - must be a fully qualified url.
   * @defaultValue https://discordapp.com/api/v\{REST_VERSION\}
   */
  baseURL?: string;
  /**
   * If the built-in latency compensator should be disabled.
   * @defaultValue false
   */
  disableLatencyCompensation?: boolean;
  /**
   * The `Host` header to use for rest.
   * @defaultValue Parsed from `baseURL`
   */
  host?: string;
  /**
   * In milliseconds, the average request latency at which to start emitting latency errors.
   * @defaultValue 30000
   */
  latencyThreshold?: number;
  /**
   * In milliseconds, the time to offset ratelimit calculations by.
   * @defaultValue 0
   */
  ratelimiterOffset?: number;
  /**
   * In milliseconds, how long to wait until a request is timed out.
   * @defaultValue 15000
   */
  requestTimeout?: number;
  /**
   * The `User-Agent` header to use for rest.
   * @defaultValue libcord...
   */
  userAgent?: string;
}

export interface File {
  /** the contents of the file */
  file: Buffer;
  /** the name of the file */
  name: string;
}
export const RESTMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;
export type RESTMethod = typeof RESTMethods[number];
