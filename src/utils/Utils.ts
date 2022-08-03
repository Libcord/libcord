export type imageFormats = "jpg" | "png" | "webp" | "gif";
export type imageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;

export interface ImageUrlOptions {
  /**
   * the format of the image
   * @default jpg
   */
  format?: imageFormats;
  /**
   * the size of the image
   * @default 4096
   */
  size?: imageSize;
  /**
   * if the avatar are animated give gif url
   * @default false
   */
  dynamic?: boolean;
}

// Adapted from discord.js

export const parseEmoji = (text: string) => {
  if (text.includes("%")) text = decodeURIComponent(text);
  if (!text.includes(":")) return { animated: false, name: text, id: null };
  const match = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
  return (
    match && {
      animated: Boolean(match[1]),
      name: match[2],
      id: match[3] ?? null,
    }
  );
};


export const resolvePartialEmoji = (emoji: any) => {
  if (!emoji) return null;
  if (typeof emoji === "string")
    return /^\d{17,19}$/.test(emoji) ? { id: emoji } : parseEmoji(emoji);
  const { id, name, animated } = emoji;
  if (!id && !name) return null;
  return { id, name, animated: Boolean(animated) };
};
