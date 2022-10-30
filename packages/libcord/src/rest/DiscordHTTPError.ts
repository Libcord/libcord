import type { RAWDiscordHTTPError } from "../types/raw";
import type { Headers, Response } from "undici";
import type { RESTMethod } from "../types/Types";

/** An HTTP error received from Discord. */
export default class DiscordHTTPError extends Error {
  method: RESTMethod;
  name = "DiscordHTTPError";
  resBody: Record<string, unknown> | null;
  response: Response;
  constructor(
    res: Response,
    resBody: unknown | null,
    method: RESTMethod,
    stack?: string
  ) {
    super();
    this.method = method;
    this.response = res;
    this.resBody = resBody as DiscordHTTPError["resBody"];

    let message = `${res.status} ${res.statusText} on ${this.method} ${this.path}`;
    const errors = DiscordHTTPError.flattenErrors(
      resBody as Record<string, unknown>
    );
    if (errors.length !== 0) {
      message += `\n  ${errors.join("\n  ")}`;
    }
    Object.defineProperty(this, "message", {
      enumerable: false,
      value: message,
    });
    if (stack) {
      this.stack = this.name + ": " + this.message + "\n" + stack;
    } else {
      Error.captureStackTrace(this, DiscordHTTPError);
    }
  }

  static flattenErrors(
    errors: Record<string, unknown>,
    keyPrefix = ""
  ): Array<string> {
    let messages: Array<string> = [];
    for (const fieldName in errors) {
      if (fieldName === "message" || fieldName === "code") {
        continue;
      }
      if (Array.isArray(errors[fieldName])) {
        messages = messages.concat(
          (errors[fieldName] as Array<string>).map(
            (str) => `${`${keyPrefix}${fieldName}`}: ${str}`
          )
        );
      }
    }
    return messages;
  }

  get headers(): Headers {
    return this.response.headers;
  }
  get path(): string {
    return new URL(this.response.url).pathname;
  }
  get status(): number {
    return this.response.status;
  }
  get statusText(): string {
    return this.response.statusText;
  }

  toJSON(): RAWDiscordHTTPError {
    return {
      message: this.message,
      method: this.method,
      name: this.name,
      resBody: this.resBody,
      stack: this.stack ?? "",
    };
  }
}
