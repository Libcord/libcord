import { APIChannel } from "discord-api-types/v9";
import { Client } from "../../Client";
import { Snowflake } from "../../utils/Snowflake";
import { Base } from "../Base";
import { ChannelTypes } from "../../Constants";

export class Channel extends Base {
  public id: Snowflake;
  public readonly type: ChannelTypes;
  public name: string;

  constructor(client: Client, data: APIChannel) {
    super(client);
    this.id = data.id as unknown as Snowflake;
    this.name = data.name as string;
    this.type = data.type as unknown as ChannelTypes;
  }

  get mention(): string {
    return `<#${this.id}>`;
  }
}
