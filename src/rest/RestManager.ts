import axios from "axios";
import { Client } from "../Client";
import { RequestError } from "../utils/Errors";
import { BASE_URL } from "./EndPoints";
import { version } from "../../package.json";
export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "purge"
  | "PURGE"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";
export interface rawRest {
  method: Method;
  url: string;
  data?: any;
  response: {
    status: number;
    data: any;
  };
}
export class RestManager {
  public agent: string;
  private token: string;

  constructor() {
    this.agent = `DiscordBot (https://github.com/MrPrivacyCoder, ${version})`;
    this.token = "";
  }
  setToken(token: string): boolean {
    this.token = token;
    return true;
  }
  request(
    method: Method,
    url: string,
    data?: any,
    token?: string
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        if (data) {
          const response = await axios({
            method: method,
            baseURL: BASE_URL,
            url: url,
            data: await data,
            headers: {
              Authorization: `Bot ${this.token}`,
              "Content-Type": "application/json",
              "User-Agent": this.agent,
            },
            timeout: 10000,
          });
          if (response) return resolve(response.data);
        } else {
          const response = await axios({
            method: method,
            baseURL: BASE_URL,
            url: url,
            headers: {
              Authorization: `Bot ${this.token}`,
              "Content-Type": "application/json",
              "User-Agent": this.agent,
            },
            timeout: 10000,
          });
          if (response) return resolve(response.data);
        }
      } catch (e: any) {
        return reject(
          new RequestError(
            "API ERROR",
            method,
            url,
            await data,
            e.response.status,
            e.response.statusText
          )
        );
      }
    });
  }
}
