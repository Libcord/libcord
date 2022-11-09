import { Buffer } from "node:buffer";
import * as path from "path";
import * as fs from "fs";
import type { MessageOptions } from "../Constants";
import type { Client } from "../Client";
import { FormData, request } from "undici";
import { Blob } from "buffer";
import type { ComponentsType } from "../structures";
import type { InteractionOptions } from "../structures/interactions/CommandInteraction";
import { MessageFlags } from "discord-api-types/v9";

export class Parser {
  static async resolveFile(client: Client, file: any) {
    if (Buffer.isBuffer(file)) return { data: file };
    if (typeof file[Symbol.asyncIterator] === "function") {
      const buffers = [];
      for await (const data of file) buffers.push(data);
      return { data: Buffer.concat(buffers) };
    }
    if (typeof file === "string") {
      if (/^https?:\/\//.test(file)) {
        const res = await request(file, {
          method: "GET",
        });

        return {
          data: await res.body.arrayBuffer(),
          contentType: res.headers["content-type"],
        };
      }

      const fileData = path.resolve(file);

      fs.stat(fileData, (c, fileStats) => {
        if (!fileStats.isFile()) throw new Error("[ATTACHEMENTS] Invalid file");
        return fileStats;
      });

      return {
        data: new Promise((resolve, reject) => {
          fs.readFile(fileData, (err, data) => {
            resolve(data);
          });
        }),
      };
    }
  }
  static basename(pathe: any, ext?: string) {
    const res = path.parse(pathe);
    return ext && res.ext.startsWith(ext) ? res.name : res.base.split("?")[0];
  }
  static async resolveFiles(client: Client, files: any, body: any) {
    files = await Promise.all(
      files?.map((file: any) => this.resolveData(client, file)) ?? []
    );
    return {
      files,
      body,
    };
  }
  static async resolveData(client: Client, file: any) {
    let attachment;
    let name;

    const findName = (thing: any) => {
      if (typeof thing === "string") {
        return this.basename(thing);
      }

      if (thing.path) {
        return this.basename(thing.path);
      }

      return "file.jpg";
    };

    const ownAttachment =
      typeof file === "string" ||
      file instanceof Buffer ||
      typeof file.pipe === "function";
    if (ownAttachment) {
      attachment = file;
      name = findName(attachment);
    } else {
      attachment = file.file;
      name = file.name ?? findName(attachment);
    }

    const { data, contentType } = (await this.resolveFile(
      client,
      attachment
    )) as any;
    return { file: await data, name, contentType };
  }
  static async resolveContentForApi(
    client: Client,
    data: MessageOptions | InteractionOptions,
    interaction: boolean = false
  ) {
    const payload: any = {
      content: "" as any,
      attachments: [] as any,
      components: [] as any,
    };
    if (typeof data === "object") {
      if (typeof data?.content === "string") {
        payload.content = data?.content;
      }
      if ("mentions" in data && data.mentions) {
        if (data.mentions.message) {
          payload.message_reference = {
            message_id: data.mentions.message.id,
          };
        }
      }
      if ((data as InteractionOptions).ephemeral) {
        payload.flags = MessageFlags.Ephemeral;
      }
      if (data.components?.length! > 0) {
        data.components?.forEach((comp: ComponentsType) => {
          payload.components.push(comp);
        });
      }
      if (data.files) {
        let temp = new FormData();
        const { files } = await this.resolveFiles(client, data.files, payload);
        const attachment = files.map((file: any, i: any) => {
          const filee = data.files?.[i];
          for (const file of files) {
            temp.append(`files[${i}]`, new Blob([file.file]), file.name);
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
        if (interaction) {
          const JSONPayload = JSON.stringify(payload);
          temp.append("payload_json", {
            type: 4,
            data: JSONPayload,
          });
        } else {
          const JSONPayload = JSON.stringify(payload);
          temp.append("payload_json", JSONPayload);
        }
        return { type: "file", data: temp };
      }
    }
    return { type: "json", data: payload };
  }
}
