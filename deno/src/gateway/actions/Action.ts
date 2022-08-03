import { Client } from "../../Client";
import { EventEmitter } from "events";
export class Action {
  public client: Client;
  public emitter: EventEmitter;

  constructor(client: Client, emitter?: any) {
    this.client = client;
    this.emitter = emitter;
  }
}
