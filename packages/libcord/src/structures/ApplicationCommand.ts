import type { APIApplicationCommand } from "discord-api-types/v9";
import type { Client } from "../Client";
import { Base } from "./Base";
import type { Guild } from "./Guild";
import { Permission, Permissions } from "../types/permissions";
import type { Snowflake } from "../utils/Utils";

export enum ApplicationCommandType {
  CHAT_INPUT = 1,
  USER = 2,
  MESSAGE = 3,
}
export interface ApplicationCommandBase {
  /**
   * the name of the command
   */
  name: string;
  /**
   * the description of the command
   */
  description?: string;

  type?: ApplicationCommandType;
  /**
   * the options of the command
   */
  options?: Array<
    ApplicationCommandOption | ApplicationCommandOptionWithSubCommand
  >;
  /**
   * Default permissions for the user to have if they want to use this command
   */
  default_member_permissions?: Permission[] | Permissions[];
}

export interface EditApplicationCommandOptions {
  /**
   * the name of the command
   */
  name?: string;
  /**
   * the description of the command
   */
  description?: string;
  /**
   * the options of the command
   */
  options?: Array<
    ApplicationCommandOption | ApplicationCommandOptionWithSubCommand
  >;
  /**
   * Default permissions for the user to have if they want to use this command
   */
  default_member_permissions?: Permission[] | Permissions[];
}

export interface ApplicationCommandOption {
  /**
   * the type of the command option
   */
  type: ApplicationCommandOptionsType;
  /**
   * name of the command option (1 to 32 characters that match `^[\w-]{1,32}$`)
   */
  name: string;
  /**
   * description of the command option (1 to 100 characters)
   */
  description: string;
  /**
   * if the option is required
   * @default false
   */
  required: boolean;

  /**
   * choices of the command option,You can specify a maximum of 25 choices per option
   */
  choices?: ApplicationCommandOptionChoice[];
}

export interface ApplicationCommandOptionWithSubCommand
  extends ApplicationCommandOption {
  /**
   * options of command subCommand/subCommandGroup
   */
  options?: ApplicationCommandOptionWithSubCommand;
}

export enum ApplicationCommandOptionsTypes {
  subCommand = 1,
  subCommandGroup,
  string,
  integer,
  boolean,
  user,
  channel,
  role,
  mentionable,
}

export interface ApplicationCommandOptionChoice {
  /**
   * the name of the choice
   */
  name: string;
  /**
   * the value of the choice
   */
  value: string | number;
}

export type ApplicationCommandOptionsType =
  keyof typeof ApplicationCommandOptionsTypes;

export class ApplicationCommand extends Base {
  /**
   * the id of the command
   */
  public id: Snowflake;

  /**
   * the guild of the command (is null for global commands)
   */
  public guild: Guild | null;

  /**
   * the name of the command
   */
  public name: string;

  /**
   * the description of the command
   */
  public description: string;

  /**
   * the options of the command
   */
  public options: ApplicationCommandOption[] | null;
  /**
   * @internal
   */
  public data: { [index: string]: any };

  constructor(client: Client, data: { [index: string]: any }) {
    super(client);
    this.id = data.id;
    this.guild = data["guild_id"]
      ? client.guilds.get(data["guild_id"]) || null
      : null;
    this.name = data.name;
    this.description = data.description;
    this.options = data.options
      ? (data.options as unknown as ApplicationCommandOption[])
      : null;
    this.data = data;
  }

  /**
   * edits an existing application command
   * @param data New options for the command
   * @param cache wether to store the command in the clients cache
   * @returns {any} returns the application command
   */
  public edit(data: EditApplicationCommandOptions, cache = true) {
    return this.client.application?.editCommand(this.id, data, cache);
  }

  public toString(): string {
    return `${this.name} : ${this.description}`;
  }

  public toJSON(space = 1): string {
    return JSON.stringify(
      {
        id: this.id,
        application_id: this.client.user?.id || undefined,
        //guild_id: this.guild ? this.guild.id : undefined,
        name: this.name,
        description: this.description,
        options: this.options || undefined,
      },
      null,
      space
    );
  }

  updateData(data: APIApplicationCommand): ApplicationCommand {
    if (data.id && (data.id as unknown as Snowflake) !== this.id)
      this.id = data.id as unknown as Snowflake;
    if (data.name && data.name !== this.name) this.name = data.name;
    if (data.description && data.description !== this.description)
      this.description = data.description;
    if (
      data.options &&
      JSON.stringify(data.options as any) !== JSON.stringify(this.options)
    )
      this.options = data.options as any;
    this.data = data;
    return this;
  }
}

/**
 * @internal
 */
export function resolveApplicationCommandForApi({
  cmd,
}: {
  cmd: { [p: string]: any; [p: number]: any };
}): object {
  if (cmd.hasOwnProperty("options"))
    cmd["options"] = resolveApplicationCommandOptionsForApi(cmd["options"]);
  if (cmd.hasOwnProperty("default_member_permissions")) {
    let permissions: any = 0;
    for (const permission of cmd["default_member_permissions"]) {
      permissions += Permissions[permission];
    }
    cmd["default_member_permissions"] = permissions;
  }
  return cmd;
}

/**
 * @internal
 */
function resolveApplicationCommandOptionsForApi(
  options: { [index: string]: any }[]
): object[] {
  const newOptions = [];
  for (let option of options) {
    if (option["options"])
      option["options"] = resolveApplicationCommandOptionsForApi(
        option["options"]
      );
    option["type"] = ApplicationCommandOptionsTypes[option["type"]];
    newOptions.push(option);
  }
  return newOptions;
}
