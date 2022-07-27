import { APIChannel } from "discord-api-types/v9";
import { Client } from "../../Client";
import { Channel } from "./Channel";

export class GroupChannel extends Channel {
  constructor(client: Client, data: APIChannel) {
    super(client, data);
  }
}
