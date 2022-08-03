import { Base } from "../Base";
import { Client } from "../../Client";
import { APIBaseInteraction } from "discord-api-types/v9";

export class Interaction extends Base {
  public data: APIBaseInteraction<any, any>;
  public name: string;
  public type: string;
  constructor(client: Client, data: APIBaseInteraction<any, any>) {
    super(client);
    this.data = data;
    this.name = data.data.name;
    this.type = data.data.type;
  }
}
