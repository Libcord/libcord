import axios from "axios";
import { RequestError } from "../utils/Errors";
import { BASE_URL } from "./EndPoints";
import { version } from "../../package.json";

import * as FormData from "form-data";
export type Method =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "PATCH"
  | "PURGE"
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
    this.agent = `DiscordBot (https://github.com/Libcord, ${version})`;
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
    additionalHeaders?: any
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        if (data instanceof FormData || data?.data instanceof FormData) {
          let userHeaders = {};
          additionalHeaders
            ? (userHeaders = {
                "User-Agent": this.agent,
                Authorization: `Bot ${this.token}`,
                ...additionalHeaders,
              })
            : (userHeaders = {
                "User-Agent": this.agent,
                Authorization: `Bot ${this.token}`,
              });
          const response = await axios({
            method: method,
            baseURL: BASE_URL,
            url: url,
            data: data,
            headers:
              data instanceof FormData
                ? data.getHeaders(userHeaders)
                : data.data.getHeaders(userHeaders),
            timeout: 10000,
          });
          if (response) return resolve({ ...response.data });
        } else if (data) {
          let userHeaders = {};
          additionalHeaders
            ? (userHeaders = {
                "User-Agent": this.agent,
                Authorization: `Bot ${this.token}`,
                ...additionalHeaders,
              })
            : (userHeaders = {
                Authorization: `Bot ${this.token}`,
                "Content-Type": "application/json",
                "User-Agent": this.agent,
              });
          const response = await axios({
            method: method,
            baseURL: BASE_URL,
            url: url,
            data,
            headers: userHeaders,
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
        console.log(e);
        return reject(
          new RequestError(
            "API ERROR",
            method,
            url,
            await data,
            e.response.status,
            e.response.data
          )
        );
      }
    });
  }
}
