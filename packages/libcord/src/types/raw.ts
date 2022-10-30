import type { RESTMethod } from "./Types";

export interface RAWDiscordHTTPError {
  message: string;
  method: RESTMethod;
  name: string;
  resBody: Record<string, unknown> | null;
  stack: string;
}
export interface RAWDiscordRESTError {
  message: string;
  method: RESTMethod;
  name: string;
  resBody: Record<string, unknown> | null;
  stack: string;
}
