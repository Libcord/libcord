import { Base } from "../Base";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { APIThreadChannel } from "discord-api-types/v9";

export class Thread extends Base {
  public readonly id: Snowflake;
  public readonly archived: boolean | undefined;
  public readonly locked: boolean | undefined;

  constructor(client: Client, data: APIThreadChannel) {
    super(client);
    this.id = data.id as unknown as Snowflake;
    this.archived = data.thread_metadata?.archived;
    this.locked = data.thread_metadata?.locked;
  }
}
