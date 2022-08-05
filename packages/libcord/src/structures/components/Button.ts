import {
  APIMessageComponentEmoji,
  APIPartialEmoji,
  ButtonStyle,
  ComponentType,
} from "discord-api-types/v9";
import {
  ColorStrings,
  resolvePartialEmoji,
  ParseColor,
} from "../../utils/Utils";

export class Button {
  public type: ComponentType = ComponentType.Button;
  public label: string = "";
  public custom_id: string = "";
  public style: ButtonStyle = ButtonStyle.Secondary;
  public url?: string;
  public disabled?: boolean;
  public emoji?: any;

  public setLabel(label: string): Button {
    this.label = label;
    return this;
  }

  public setCustomId(customId: string): Button {
    this.custom_id = customId;
    return this;
  }

  public setStyle(style: ButtonStyle | ColorStrings): Button {
    this.style = ParseColor(style);
    return this;
  }

  public setUrl(url: string): Button {
    this.url = url;
    return this;
  }

  public setDisabled(disabled: boolean): Button {
    this.disabled = disabled;
    return this;
  }

  public setEmoji(emoji: any): Button {
    this.emoji = resolvePartialEmoji(emoji);
    return this;
  }

  public toJSON(): object {
    return {
      label: this.label,
      custom_id: this.custom_id,
      style: this.style,
      url: this.url,
      disabled: this.disabled,
      type: this.type,
      emoji: this.emoji,
    };
  }
}
