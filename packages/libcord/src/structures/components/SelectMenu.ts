import {
  APIMessageComponentEmoji,
  APIPartialEmoji,
  APISelectMenuOption,
  ButtonStyle,
  ComponentType,
} from "discord-api-types/v9";
import {
  ColorStrings,
  resolvePartialEmoji,
  ParseColor,
} from "../../utils/Utils";

export interface SelectMenuOption {
  label: string;
  value: string;
  description?: string;
  emoji?: string | object;
  default?: boolean;
}
export class SelectMenu {
  public type: ComponentType = ComponentType.SelectMenu;
  public custom_id: string = "SelectMenu";
  public options: APISelectMenuOption[] = [];
  public placeholder?: string;
  public disabled?: boolean;

  public setDisabled(disabled: boolean = true) {
    this.disabled = disabled;
    return this;
  }
  public setPlaceholder(holder: string) {
    this.placeholder = holder;
    return this;
  }
  public setCustomID(id: string) {
    this.custom_id = id;
    return this;
  }
  public addOption(option: SelectMenuOption) {
    let emojiObj;
    if (option.emoji) {
      const emoji = resolvePartialEmoji(option.emoji);
      emojiObj = {
        id: emoji?.id,
        name: emoji?.name,
      };
    }
    option.emoji = emojiObj;
    this.options?.push(option as APISelectMenuOption);
    return this;
  }

  public toJSON(): object {
    return {
      type: this.type,
      custom_id: this.custom_id,
      options: this.options,
      placeholder: this.placeholder,
      disabled: this.disabled,
    };
  }
}
