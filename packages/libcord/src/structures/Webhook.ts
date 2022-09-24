import { Embed } from "./Embed";
import { FileOption } from "./Message";
import { ComponentsType } from "./components/ActionRow";
import * as FormData from "form-data";
import { FileUtils } from "../utils/FileUtils";
import { BASE_URL, EXECUTE_WEBHOOK } from "../rest/EndPoints";
import axios from "axios";
import { version } from "../../package.json";
import { RequestError } from "../utils/Errors";
import { Deprecated } from "../utils/Decorators";

export interface WebhookOptions {
  id: string;
  token: string;
}
export interface executeWebhookOptions {
  content?: string;
  embeds?: Embed[];
  components?: Array<ComponentsType>;
  files?: FileOption[];
}
export class Webhook {
  public id: string;
  public token: string;

  public username?: string;
  public avatar_url?: string;
  constructor(options: WebhookOptions) {
    if (!options.id) throw new Error("[WEBHOOKS] No id was provided");
    if (!options.token) throw new Error("[WEBHOOKS] No token was provided");
    this.id = options.id;
    this.token = options.token;
  }

  setUsername(username: string) {
    this.username = username;
    return this;
  }
  setAvatar(url: string) {
    this.avatar_url = url;
    return this;
  }

  /**
   * Sends a message to a webhook
   * @param options the payload for the webhook
   * @deprecated
   */
  @Deprecated.Method("Use webhook#execute instead")
  async send(options: string | executeWebhookOptions) {
    return this.execute(options);
  }
  /**
   * Sends a message to a webhook
   * @param options the payload for the webhook
   */
  async execute(options: string | executeWebhookOptions) {
    const payload = {
      content: "" as any,
      embeds: [] as any,
      components: [] as any,
      attachments: [] as any,
      username: this.username,
      avatar_url: this.avatar_url,
    };
    if (typeof options === "string") {
      payload.content = options;
    }
    if (typeof options === "object") {
      if (typeof options?.content === "string") {
        payload.content = options?.content;
      }
      if (options.embeds) {
        options.embeds.forEach((em: any) => {
          if (em instanceof Embed) {
            payload.embeds.push((em as Embed).getJSON());
          } else {
            throw new Error("[LIBCORD] Embeds must be an instance of <Embed>");
          }
        });
      }
      if (options.components?.length! > 0) {
        options.components?.forEach((comp: ComponentsType) => {
          payload.components.push(comp);
        });
      }
      if (options.files) {
        let temp = new FormData();
        const { files } = await FileUtils.resolveFiles(options.files, payload);
        const attachment = files.map((file: any, i: any) => {
          const filee = options.files?.[i];
          for (const file of files) {
            temp.append(`files[${i}]`, file.file, file.name);
          }
          return {
            id: i.toString(),
            description: filee?.description,
            filename: file.name,
          };
        });
        if (Array.isArray(attachment)) {
          payload.attachments.push(...(attachment ?? []));
        } else {
          payload.attachments = attachment;
        }
        const JSONPayload = JSON.stringify(payload);
        temp.append("payload_json", JSONPayload);

        const userHeaders = {
          "User-Agent": `DiscordBot (https://github.com/Libcord, ${version})`,
        };
        await axios({
          method: "POST",
          baseURL: BASE_URL,
          url: EXECUTE_WEBHOOK(this.id, this.token),
          data: temp,
          headers: temp.getHeaders(userHeaders),
          timeout: 10000,
        }).catch(
          () => new RequestError("API ERROR", "post", "webhook/", undefined)
        );
        return this;
      }
    }
    await axios({
      method: "POST",
      baseURL: BASE_URL,
      url: EXECUTE_WEBHOOK(this.id, this.token),
      data: payload,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": `DiscordBot (https://github.com/Libcord, ${version})`,
      },
      timeout: 10000,
    }).catch(
      () => new RequestError("API ERROR", "post", "webhook/", undefined)
    );
  }
}
