import type { APIMessageComponent } from "discord-api-types/v9";
import { ComponentType } from "discord-api-types/v9";
import type { Button } from "./Button";
import type { SelectMenu } from "./SelectMenu";

export type ComponentsType = Button | SelectMenu | APIMessageComponent | Row;

export class Row {
  public type: ComponentType = ComponentType.ActionRow;
  public components: Array<ComponentsType> = [];

  public addComponent(component: ComponentsType): Row {
    this.components.push(component);
    return this;
  }
}
