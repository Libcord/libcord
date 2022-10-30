/**
 * code borrowed from oceanic.js
 */
import type { Client } from "../Client";
import {
  LatencyRef,
  RequestOptions,
  RESTMethod,
  RESTMethods,
  RESTOptions,
} from "../types/Types";
import { API_URL, USER_AGENT } from "../Constants";
import { Base } from "../structures/Base";
import { fetch, File as UFile, FormData } from "undici";
import SequentialBucket from "./SequentialBucket";
import DiscordHTTPError from "./DiscordHTTPError";
import DiscordRESTError from "./DiscordRESTError";

export class RequestHandler {
  private _client: Client;
  public options: RESTOptions;
  private globalBlock = false;
  public latencyRef: LatencyRef;
  readyQueue: Array<() => void> = [];
  private ratelimits: Record<string, SequentialBucket> = {};
  public constructor(client: Client, options: RESTOptions = {}) {
    this._client = client;
    this.options = {
      agent: options.agent,
      baseURL: options.baseURL ?? API_URL,
      disableLatencyCompensation: !!options.disableLatencyCompensation,
      host:
        options.host ??
        (options.baseURL
          ? new URL(options.baseURL).host
          : new URL(API_URL).host),
      latencyThreshold: options.latencyThreshold ?? 30000,
      ratelimiterOffset: options.ratelimiterOffset ?? 0,
      requestTimeout: options.requestTimeout ?? 15000,
      userAgent: options.userAgent ?? USER_AGENT,
    };
    this.latencyRef = {
      lastTimeOffsetCheck: 0,
      latency: options.ratelimiterOffset ?? 0,
      raw: Array.from({ length: 10 }).fill(
        options.ratelimiterOffset
      ) as Array<number>,
      timeOffsets: Array.from({ length: 10 }).fill(0) as Array<number>,
      timeoffset: 0,
    };
  }
  private getRoute(path: string, method: string): string {
    let route = path
      .replace(/\/([a-z-]+)\/\d{15,21}/g, function (match, p) {
        return p === "channels" || p === "guilds" || p === "webhooks"
          ? match
          : `/${p as string}/:id`;
      })
      .replace(/\/reactions\/[^/]+/g, "/reactions/:id")
      .replace(/\/reactions\/:id\/[^/]+/g, "/reactions/:id/:userID")
      .replace(/^\/webhooks\/(\d+)\/[\w-]{64,}/, "/webhooks/$1/:token");
    if (method === "DELETE" && route.endsWith("/messages/:id")) {
      const messageID = path.slice(path.lastIndexOf("/") + 1);
      const createdAt = Base.getCreatedAt(messageID).getTime();
      if (
        Date.now() - this.latencyRef.latency - createdAt >=
        1000 * 60 * 60 * 24 * 14
      ) {
        method += "_OLD";
      } else if (
        Date.now() - this.latencyRef.latency - createdAt <=
        1000 * 10
      ) {
        method += "_NEW";
      }
      route = method + route;
    } else if (method === "GET" && /\/guilds\/\d+\/channels$/.test(route)) {
      route = "/guilds/:id/channels";
    }

    if (method === "PUT" || method === "DELETE") {
      const index = route.indexOf("/reactions");
      if (index !== -1) {
        route = "MODIFY" + route.slice(0, index + 10);
      }
    }
    return route;
  }

  /**
   * Make a request. `null` will be returned if the request results in a `204 NO CONTENT`.
   * @param options The options for the request.
   */
  async request<T = unknown>(options: RequestOptions): Promise<T> {
    options.method = options.method.toUpperCase() as RESTMethod;
    if (!RESTMethods.includes(options.method)) {
      throw new Error(`Invalid method "${options.method}.`);
    }
    const _stackHolder = {};
    Error.captureStackTrace(_stackHolder);
    if (!options.path.startsWith("/")) {
      options.path = `/${options.path}`;
    }
    const route = options.route ?? this.getRoute(options.path, options.method);
    if (!this.ratelimits[route]) {
      this.ratelimits[route] = new SequentialBucket(1, this.latencyRef);
    }
    let attempts = 0;
    return new Promise<T>((resolve, reject) => {
      async function attempt(
        this: RequestHandler,
        cb: () => void
      ): Promise<void> {
        const headers: Record<string, string> = options.headers ?? {};
        try {
          if (options.auth) {
            headers.Authorization = `Bearer ${this._client.token}`;
          }
          if (options.reason) {
            headers["X-Audit-Log-Reason"] = encodeURIComponent(options.reason);
          }

          let reqBody: string | FormData | undefined;
          if (options.method !== "GET") {
            let stringBody: string | undefined;
            if (options.json) {
              stringBody = JSON.stringify(options.json, (k, v: unknown) =>
                typeof v === "bigint" ? v.toString() : v
              );
            }
            if (options.form || (options.files && options.files.length !== 0)) {
              const data = options.form ?? new FormData();
              if (options.files)
                for (const [index, file] of options.files.entries()) {
                  if (!file.file) {
                    continue;
                  }
                  data.set(
                    `files[${index}]`,
                    new UFile([file.file], file.name)
                  );
                }
              if (stringBody) {
                data.set("payload_json", stringBody);
              }
              reqBody = data;
            } else if (options.json) {
              reqBody = stringBody;
              headers["Content-Type"] = "application/json";
            }
          }

          if (this.options.host) {
            headers.Host = this.options.host;
          }
          const url = `${this.options.baseURL}${options.path}${
            options.query && Array.from(options.query.keys()).length !== 0
              ? `?${options.query.toString()}`
              : ""
          }`;
          let latency = Date.now();
          const controller = new AbortController();
          let timeout: NodeJS.Timeout | undefined;
          if (
            this.options.requestTimeout &&
            this.options.requestTimeout > 0 &&
            this.options.requestTimeout !== Infinity
          ) {
            timeout = setTimeout(
              () => controller.abort(),
              this.options.requestTimeout
            );
          }
          const res = await fetch(url, {
            method: options.method,
            headers,
            body: reqBody,
            dispatcher: this.options.agent || undefined,
            signal: controller.signal,
          });
          if (timeout) {
            clearTimeout(timeout);
          }
          latency = Date.now() - latency;
          if (!this.options.disableLatencyCompensation) {
            this.latencyRef.raw.push(latency);
            this.latencyRef.latency =
              this.latencyRef.latency -
              Math.trunc(this.latencyRef.raw.shift()! / 10) +
              Math.trunc(latency / 10);
          }
          let resBody: Buffer | string | Record<string, unknown> | null;
          if (res.status === 204) {
            resBody = null;
          } else {
            if (res.headers.get("content-type") === "application/json") {
              const b = await res.text();
              try {
                resBody = JSON.parse(b) as Record<string, unknown>;
              } catch (err) {
                resBody = b;
              }
            } else {
              resBody = Buffer.from(await res.arrayBuffer());
            }
          }

          const headerNow = Date.parse(res.headers.get("date")!);
          const now = Date.now();
          if (this.latencyRef.lastTimeOffsetCheck < Date.now() - 5000) {
            const timeOffset =
              headerNow +
              500 -
              (this.latencyRef.lastTimeOffsetCheck = Date.now());

            this.latencyRef.timeoffset =
              this.latencyRef.timeoffset -
              Math.trunc(this.latencyRef.timeOffsets.shift()! / 10) +
              Math.trunc(timeOffset / 10);
            this.latencyRef.timeOffsets.push(timeOffset);
          }
          if (res.headers.has("x-ratelimit-limit")) {
            this.ratelimits[route].limit = Number(
              res.headers.get("x-ratelimit-limit")
            );
          }
          if (
            options.method !== "GET" &&
            (!res.headers.has("x-ratelimit-remaining") ||
              !res.headers.has("x-ratelimit-limit")) &&
            this.ratelimits[route].limit !== 1
          ) {
            /*this._client.emit(
              "debug",
              [
                `Missing ratelimit headers for SequentialBucket(${this.ratelimits[route].remaining}/${this.ratelimits[route].limit}) with non-default limit\n`,
                `${res.status} ${res.headers.get("content-type") ?? "null"}: ${
                  options.method
                } ${route} | ${res.headers.get("cf-ray") ?? "null"}\n`,
                `content-type = ${res.headers.get("content-type") ?? "null"}\n`,
                `x-ratelimit-remaining = ${
                  res.headers.get("x-ratelimit-remaining") ?? "null"
                }\n`,
                `x-ratelimit-limit = ${
                  res.headers.get("x-ratelimit-limit") ?? "null"
                }\n`,
                `x-ratelimit-reset = ${
                  res.headers.get("x-ratelimit-reset") ?? "null"
                }\n`,
                `x-ratelimit-global = ${
                  res.headers.get("x-ratelimit-global") ?? "null"
                }`,
              ].join("\n")
              );
             */
          }

          this.ratelimits[route].remaining = !res.headers.has(
            "x-ratelimit-remaining"
          )
            ? 1
            : Number(res.headers.get("x-ratelimit-remaining")) ?? 0;
          const retryAfter =
            Number(
              res.headers.get("x-ratelimit-reset-after") ??
                res.headers.get("retry-after") ??
                0
            ) * 1000;
          if (retryAfter >= 0) {
            if (res.headers.has("x-ratelimit-global")) {
              this.globalBlock = true;
              setTimeout(this.globalUnblock.bind(this), retryAfter ?? 1);
            } else {
              this.ratelimits[route].reset = (retryAfter ?? 1) + now;
            }
          } else if (res.headers.has("x-ratelimit-reset")) {
            let resetTime = Number(res.headers.get("x-ratelimit-reset")) * 1000;
            if (
              route.endsWith("/reactions/:id") &&
              resetTime - headerNow === 1000
            ) {
              resetTime = now + 250;
            }
            this.ratelimits[route].reset = Math.max(
              resetTime - this.latencyRef.latency,
              now
            );
          } else {
            this.ratelimits[route].reset = now;
          }
          if (res.status !== 429) {
            /*this.#manager.client.emit(
              "debug",
              `${now} ${route} ${res.status}: ${latency}ms (${
                this.latencyRef.latency
              }ms avg) | ${this.ratelimits[route].remaining}/${
                this.ratelimits[route].limit
              } left | Reset ${this.ratelimits[route].reset} (${
                this.ratelimits[route].reset - now
              }ms left)`
            );*/
          }
          if (res.status > 300) {
            if (res.status === 429) {
              let delay = retryAfter;
              if (res.headers.get("x-ratelimit-scope") === "shared") {
                try {
                  delay =
                    (resBody as { retry_after: number }).retry_after * 1000;
                } catch (err) {
                  reject(err);
                }
              }
              /*
              this.#manager.client.emit(
                "debug",
                `${
                  res.headers.has("x-ratelimit-global")
                    ? "Global"
                    : "Unexpected"
                } RateLimit: ${JSON.stringify(resBody)}\n${now} ${route} ${
                  res.status
                }: ${latency}ms (${this.latencyRef.latency}ms avg) | ${
                  this.ratelimits[route].remaining
                }/${this.ratelimits[route].limit} left | Reset ${delay} (${
                  this.ratelimits[route].reset - now
                }ms left) | Scope ${res.headers.get("x-ratelimit-scope")!}`
              );

 */
              if (delay) {
                setTimeout(() => {
                  cb();
                  // eslint-disable-next-line prefer-rest-params, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, prefer-spread
                  this.request<T>(options).then(resolve).catch(reject);
                }, delay);
                return;
              } else {
                cb();
                this.request<T>(options).then(resolve).catch(reject);
                return;
              }
            } else if (res.status === 502 && ++attempts < 4) {
              /*
              this.#manager.client.emit(
                "debug",
                `Unexpected 502 on ${options.method} ${route}`
              );

                 */
              setTimeout(() => {
                this.request<T>(options).then(resolve).catch(reject);
              }, Math.floor(Math.random() * 1900 + 100));
              return cb();
            }
            cb();
            let { stack } = _stackHolder as { stack: string };
            if (stack.startsWith("Error\n")) {
              stack = stack.slice(6);
            }
            const err =
              resBody && typeof resBody === "object" && "code" in resBody
                ? new DiscordRESTError(res, resBody, options.method, stack)
                : new DiscordHTTPError(res, resBody, options.method, stack);
            reject(err);
            return;
          }

          cb();
          resolve(resBody as T);
        } catch (err) {
          if (
            err instanceof Error &&
            err.constructor.name === "DOMException" &&
            err.name === "AbortError"
          ) {
            cb();
            reject(
              new Error(
                `Request Timed Out (>${this.options.requestTimeout}ms) on ${options.method} ${options.path}`
              )
            );
          }
        }
      }
      if (this.globalBlock && options.auth) {
        (options.priority
          ? this.readyQueue.unshift.bind(this.readyQueue)
          : this.readyQueue.push.bind(this.readyQueue))(() => {
          this.ratelimits[route].queue(attempt.bind(this), options.priority);
        });
      } else {
        this.ratelimits[route].queue(attempt.bind(this), options.priority);
      }
    });
  }
  private globalUnblock(): void {
    this.globalBlock = false;
    while (this.readyQueue.length !== 0) {
      this.readyQueue.shift()!();
    }
  }
}
