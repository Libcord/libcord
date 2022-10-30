import { Base } from "./Base";
import type { Snowflake } from "../utils/Utils";
import type { Client } from "../Client";
import type { APIApplication } from "discord-api-types/v9";
import type { ApplicationCommand } from "./ApplicationCommand";
import Collection from "../utils/Collection";

/**
 * @category Structures
 * represents the client application
 */
export class ClientApplication extends Base {
  public id: Snowflake;
  public flags: number;
  public commands: Collection<string, ApplicationCommand>;

  constructor(client: Client, data: Pick<APIApplication, "id" | "flags">) {
    super(client);
    this.id = data.id;
    this.flags = data.flags;
    this.commands = new Collection<string, ApplicationCommand>();
  }
}
