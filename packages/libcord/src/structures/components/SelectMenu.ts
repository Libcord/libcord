import type {
  APISelectMenuComponent,
  APISelectMenuOption,
} from "discord-api-types/v9";
import { resolvePartialEmoji } from "../../utils/Utils";

export interface SelectMenuOption {
  label: string;
  value: string;
  description?: string;
  emoji?: string | object;
  default?: boolean;
}
export enum MenuTypes {
  "string" = 3,
  "roles" = 6,
  "channels" = 8,
  "users" = 5,
  "mentionable" = 7,
}
export class SelectMenu {
  public type: MenuTypes = MenuTypes.string;
  public custom_id: string = "SelectMenu";
  public options: APISelectMenuOption[] = [];
  public placeholder?: string;
  public disabled?: boolean;

  public setDisabled(disabled: boolean = true) {
    this.disabled = disabled;
    return this;
  }
  public setType(type: keyof typeof MenuTypes) {
    this.type = MenuTypes[type];
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

  public toJSON(): APISelectMenuComponent {
    return {
      type: this.type as any,
      custom_id: this.custom_id,
      options: this.options,
      placeholder: this.placeholder,
      disabled: this.disabled,
    };
  }
}
