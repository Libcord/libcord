import {
  FooterOptions,
  ImageOptions,
  ThumbnailOptions,
  AuthorOptions,
} from "../Constants";
export class Embed {
  /**
   * The title
   */
  public title?: string;

  /**
   * The description
   */
  public description?: string;

  /**
   * The URL
   */
  public url?: string;

  /**
   * The timestamp
   */
  public timestamp?: Date;

  /**
   * The color
   */
  public color?: string | number;

  /**
   * The footer
   */
  public footer?: FooterOptions;

  /**
   * The image
   */
  public image?: ImageOptions;

  /**
   * The thumbnail
   */
  public thumbnail?: ThumbnailOptions;

  /**
   * The author
   */
  public author?: AuthorOptions;

  /**
   * Embed fields
   */
  public fields?: Array<Object>;

  constructor() {
    this.title = undefined;
    this.description = undefined;
    this.url = undefined;
    this.timestamp = undefined;
    this.color = undefined;
    this.footer = undefined;
    this.image = undefined;
    this.thumbnail = undefined;
    this.author = undefined;
    this.fields = undefined;
  }
  /**
   *
   * @param {AuthorOptions} author The options for the other must be an object
   * @returns {Embed} The embed
   */
  public setAuthor(author: AuthorOptions): Embed {
    if (typeof author !== "object")
      throw new Error("[LIBCORD.Embed] Author must be an object.");
    if (!author?.name && !author?.url)
      throw new Error("[LIBCORD.Embed] Author name is REQUIRED");
    if (author && !author.name) {
      throw new Error("[LIBCORD.Embed] Author name is REQUIRED");
    }
    if (author.url && !this.validateURL(author.url)) {
      throw new Error("[LIBCORD.Embed] Author url must be a valid url!");
    }
    this.author = author;
    return this;
  }
  /**
   *
   * @param {String} title the title for the embed
   * @returns {Embed} The embed
   */
  public setTitle(title: string): Embed {
    if (!title || typeof title !== "string")
      throw new Error("[LIBCORD.EMBED] No title provided");
    this.title = title;
    return this;
  }
  /**
   *
   * @param {String} url The url for the embed
   * @returns {Embed} The embed
   */
  public setURL(url: string): Embed {
    if (!url || !this.validateURL(url))
      throw new Error("[LIBCORD.Embed] No url provided");
    this.url = url;
    return this;
  }
  /**
   *
   * @param {String} url The thumbnail url
   * @returns {Embed} The embed
   */
  public setThumbnail(url: string | undefined): Embed {
    if (!url)
      throw new Error(
        "[LIBCORD.Embed] Thumbnail must be an object with an url property."
      );
    this.thumbnail = {};
    this.thumbnail.url =
      url && this.validateURL(url as string) ? url : undefined;
    return this;
  }
  /**
   *
   * @param {Date} date The date for the timestamp (Not required)
   * @returns {Embed} The embed
   */
  public setTimestamp(date?: Date): Embed {
    if (date) {
      this.timestamp = date;
    } else {
      this.timestamp = new Date();
    }
    return this;
  }
  /**
   *
   * @param {String} image The url of the image to display on the embed
   * @returns {Embed} The embed
   */
  public setImage(image: string | undefined): Embed {
    if (!image || !this.validateURL(image))
      throw new Error("[LIBCORD.Embed] No image url provided");
    this.image = {};
    this.image.url = image;
    return this;
  }
  /**
   *
   * @param {String} color The hex color for the embed
   * @returns {Embed} The embed
   */
  public setColor(color: string): Embed {
    if (!color || typeof color !== "string")
      throw new Error("[LIBCORD.Embed] No color provided");
    this.color = this.formatColor(color);
    return this;
  }
  /**
   *
   * @param {String} description The description for the embed
   * @returns {Embed} The embed
   */
  public setDescription(description: string): Embed {
    if (!description || typeof description !== "string")
      throw new Error("[LIBCORD.Embed] No description provided");
    this.description = description;
    return this;
  }
  /**
   *
   * @param {String} name The name for the field to display
   * @param {String} value The value for the field
   * @param {Boolean} inline Wether to inline the field or not
   * @returns {Embed} The embed
   */
  public addField(name: string, value: string, inline?: boolean): Embed {
    if (
      !name ||
      typeof name !== "string" ||
      !value ||
      typeof value !== "string"
    )
      throw new Error("[LIBCORD.Embed] Invalid field provided");
    if (!Array.isArray(this.fields)) this.fields = [];
    this.fields.push({
      name: name,
      value: value,
      inline: inline && typeof inline === "boolean" ? inline : true,
    });
    return this;
  }
  /**
   *
   * @param {Object} footer The footer for the embed
   * @returns {Embed} The embed
   */
  public setFooter(footer: any): Embed {
    if (!footer || typeof footer !== "object")
      throw new Error(
        "[LIBCORD.Embed] Footer was not provided or the footer is not an object"
      );
    if (!footer.text)
      throw new Error("[LIBCORD.Embed] Footer must have text property.");
    this.footer = {};
    this.footer.icon_url =
      footer.url &&
      typeof footer.url === "string" &&
      this.validateURL(footer.url)
        ? footer.url
        : undefined;

    this.footer.text = footer.text;
    return this;
  }

  private validateURL(url: string): boolean {
    const urlRegex = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlRegex.test(url);
  }
  private formatColor(color: string | any): number {
    if (color.startsWith("#")) return parseInt(color.split("#")[1], 16);
    if (color === "RANDOM") return Math.floor(Math.random() * (0xffffff + 1));
    return Number(color);
  }
  getJSON(): object {
    return {
      title: this.title,
      description: this.description,
      url: this.url,
      timestamp: this.timestamp,
      color: this.color,
      footer: this.footer,
      image: this.image,
      thumbnail: this.thumbnail,
      author: this.author,
      fields: this.fields,
    };
  }
}
