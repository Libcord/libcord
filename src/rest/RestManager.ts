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
  constructor(client: Client) {
    this.agent = `LibCord (https://github.com/tovade, ${version})`;
  }
  private isEmpty(obj: any) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  request(method: Method, url: string, data: any, token: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const response = await axios({
        method: method,
        baseURL: BASE_URL,
        url: url,
        data: this.isEmpty(data) ? null : data,
        headers: {
          Authorization: `Bot ${token}`,
          "Content-Type": "application/json",
          "User-Agent": this.agent,
        },
        timeout: 1000,
      }).catch(async (e) => {
        console.log(e);
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
      });
      if (response) resolve(response.data);
      else reject("UNKNOWN ERROR");
    });
  }
}
