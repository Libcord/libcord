import { Buffer } from "node:buffer";
import * as path from "path";
import * as fs from "fs";
import axios from "axios";

export class FileUtils {
  static async resolveFile(file: any) {
    if (Buffer.isBuffer(file)) return { data: file };
    if (typeof file[Symbol.asyncIterator] === "function") {
      const buffers = [];
      for await (const data of file) buffers.push(data);
      return { data: Buffer.concat(buffers) };
    }
    if (typeof file === "string") {
      if (/^https?:\/\//.test(file)) {
        const res = await axios.get(file, { responseType: "arraybuffer" });
        return {
          data: Buffer.from(res.data),
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
  static async resolveFiles(files: any, body: any) {
    files = await Promise.all(
      files?.map((file: any) => this.resolveData(file)) ?? []
    );
    return {
      files,
      body,
    };
  }
  static async resolveData(file: any) {
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

    const { data, contentType } = (await this.resolveFile(attachment)) as any;
    return { file: await data, name, contentType };
  }
}
