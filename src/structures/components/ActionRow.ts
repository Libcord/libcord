import { APIMessageComponent, ComponentType } from "discord-api-types";
import { Button } from "../..";

export type ComponentsType = Button | APIMessageComponent | ActionRow;

export class ActionRow {
  private type: ComponentType = ComponentType.ActionRow;
  private components: Array<ComponentsType> = [];

  public addComponent(component: ComponentsType): ActionRow {
    this.components.push(component);
    return this;
  }
}