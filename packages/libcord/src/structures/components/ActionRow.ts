import { APIMessageComponent, ComponentType } from "discord-api-types/v9";
import { Button, SelectMenu } from "../..";

export type ComponentsType =
  | Button
  | SelectMenu
  | APIMessageComponent
  | ActionRow;

export class ActionRow {
  private type: ComponentType = ComponentType.ActionRow;
  private components: Array<ComponentsType> = [];

  public addComponent(component: ComponentsType): ActionRow {
    this.components.push(component);
    return this;
  }
}
