import { Base } from "./Base";
import type { Snowflake } from "../utils/Utils";
import type { Client } from "../Client";
import type {
  APIApplication,
  RESTGetAPIApplicationCommandResult,
  RESTPatchAPIApplicationCommandResult,
  RESTPostAPIApplicationCommandsResult,
} from "discord-api-types/v9";
import {
  ApplicationCommand,
  ApplicationCommandBase,
  EditApplicationCommandOptions,
  resolveApplicationCommandForApi,
} from "./ApplicationCommand";
import Collection from "../utils/Collection";
import { Endpoints } from "../";

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
  /**
   * Create a new global command. New global commands will be available in all guilds after 1 hour, this also takes arrays <br></br>
   * ⚠ Creating a command with the same name as an existing command for your application will overwrite the old command. see [discord-api-docs](https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command)
   * @param data a base object of the command or an array of the commands
   * @param [cache=true] set the command to cache
   */
  public createCommand(
    data: ApplicationCommandBase[],
    cache = true
  ): Promise<ApplicationCommand[]> {
    return new Promise(async (resolve, reject) => {
      let arr = [];
      for (const {} of data) {
        const resolvedData = resolveApplicationCommandForApi({
          cmd: data,
        }) as ApplicationCommandBase;
        const command = new ApplicationCommand(
          this.client,
          await this.client.requestHandler.request<RESTPostAPIApplicationCommandsResult>(
            {
              method: "POST",
              path: Endpoints.ApplicationCommands(this.id),
              json: resolvedData,
              auth: true,
            }
          )
        );
        if (cache) this.commands.set(command.id, command);
        arr.push(command);
      }

      resolve(arr);
    });
  }
  /**
   * fetch a global application command with the command id
   * @param commandId the id of the command
   * @param [checkCache=true] check if the command are already in the cache
   * @param [cache=true] set the command to cache
   */
  public fetchCommand(
    commandId: Snowflake,
    checkCache = true,
    cache = true
  ): Promise<ApplicationCommand> {
    return new Promise(async (resolve, reject) => {
      if (checkCache && this.commands.has(commandId))
        return resolve(this.commands.get(commandId)!);
      const command = new ApplicationCommand(
        this.client,
        await this.client.requestHandler.request<RESTGetAPIApplicationCommandResult>(
          {
            method: "GET",
            path: Endpoints.ApplicationCommand(this.id, commandId),
            auth: true,
          }
        )
      );
      if (cache) this.commands.set(command.id, command);
      resolve(command);
    });
  }
  /**
   * Edit a global command. Updates will be available in all guilds after 1 hour
   * @param commandId the id of the command
   * @param data options to edit
   * @param [cache=true] set/update the command to cache
   */
  public editCommand(
    commandId: Snowflake,
    data: EditApplicationCommandOptions,
    cache = true
  ): Promise<ApplicationCommand> {
    return new Promise(async (resolve, reject) => {
      if (!(data.name && data.description && data.options))
        return reject(new Error("you need to change one options or more"));
      data = resolveApplicationCommandForApi({
        cmd: data,
      }) as EditApplicationCommandOptions;
      const cmd =
        await this.client.requestHandler.request<RESTPatchAPIApplicationCommandResult>(
          {
            method: "PATCH",
            path: Endpoints.ApplicationCommand(this.id, commandId),
            json: data,
            auth: true,
          }
        );
      const command = this.commands.has(commandId)
        ? this.commands.get(commandId)!.updateData(cmd)
        : new ApplicationCommand(this.client, cmd);
      if (cache) this.commands.set(command.id, command);
      resolve(command);
    });
  }
  /**
   * delete a global application command
   * @param commandId the id of the command
   */
  public deleteCommand(commandId: Snowflake): Promise<void> {
    return new Promise(async (resolve, reject) => {
      await this.client.requestHandler.request({
        method: "DELETE",
        path: Endpoints.ApplicationCommand(this.id, commandId),
        auth: true,
      });
      if (this.commands.get(commandId)) this.commands.delete(commandId);
      resolve();
    });
  }
  /**
   * Create a new command in a specific guild. New guild commands will be available in the guild immediately after creation <br></br>
   * ⚠ Creating a command with the same name as an existing command for your application will overwrite the old command. see [discord-api-docs](https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command)
   * @param guildId The id of the guild to create the command in
   * @param data a base object of the command or an array of the commands
   * @param [cache=true] set the command to cache
   */
  public createGuildCommand(
    guildId: Snowflake,
    data: ApplicationCommandBase[],
    cache = true
  ): Promise<ApplicationCommand[]> {
    return new Promise(async (resolve, reject) => {
      let arr = [];
      for (const {} of data) {
        const resolvedData = resolveApplicationCommandForApi({
          cmd: data,
        }) as ApplicationCommandBase;
        console.log(resolvedData);
        const command = new ApplicationCommand(
          this.client,
          await this.client.requestHandler.request<RESTPostAPIApplicationCommandsResult>(
            {
              method: "POST",
              path: Endpoints.ApplicationGuildCommands(this.id, guildId),
              json: resolvedData[0],
              auth: true,
            }
          )
        );
        if (cache && this.client.clientOptions.cache?.guilds)
          this.client.guilds.get(guildId)?.commands.set(command.id, command);
        arr.push(command);
      }

      resolve(arr);
    });
  }
  /**
   * fetch a guild only application command with the command id
   * @param guildId the id of the guild the command is in
   * @param commandId the id of the command
   * @param [checkCache=true] check if the command are already in the cache
   * @param [cache=true] set the command to cache
   */
  public fetchGuildCommand(
    guildId: Snowflake,
    commandId: Snowflake,
    checkCache = true,
    cache = true
  ): Promise<ApplicationCommand> {
    return new Promise(async (resolve, reject) => {
      if (checkCache && this.commands.has(commandId))
        return resolve(this.commands.get(commandId)!);
      const command = new ApplicationCommand(
        this.client,
        await this.client.requestHandler.request<RESTGetAPIApplicationCommandResult>(
          {
            method: "GET",
            path: Endpoints.ApplicationGuildCommand(
              this.id,
              commandId,
              guildId
            ),
            auth: true,
          }
        )
      );
      if (cache && this.client.clientOptions.cache?.guilds)
        this.client.guilds.get(guildId)?.commands.set(command.id, command);
      resolve(command);
    });
  }
  /**
   * Edit a guild only command. Updates will be available in all guilds after editing it
   * @param guildId the id of the guild
   * @param commandId the id of the command
   * @param data options to edit
   * @param [cache=true] set/update the command to cache
   */
  public editGuildCommand(
    guildId: Snowflake,
    commandId: Snowflake,
    data: EditApplicationCommandOptions,
    cache = true
  ): Promise<ApplicationCommand> {
    return new Promise(async (resolve, reject) => {
      if (!(data.name && data.description && data.options))
        return reject(new Error("you need to change one options or more"));
      data = resolveApplicationCommandForApi({
        cmd: data,
      }) as EditApplicationCommandOptions;
      const cmd =
        await this.client.requestHandler.request<RESTPatchAPIApplicationCommandResult>(
          {
            method: "PATCH",
            path: Endpoints.ApplicationGuildCommand(
              this.id,
              commandId,
              guildId
            ),
            json: data,
            auth: true,
          }
        );
      const command = this.commands.has(commandId)
        ? this.commands.get(commandId)!.updateData(cmd)
        : new ApplicationCommand(this.client, cmd);
      if (cache && this.client.clientOptions.cache?.guilds)
        this.client.guilds.get(guildId)?.commands.set(command.id, command);
      resolve(command);
    });
  }
  /**
   * delete a guild only application command
   * @param guildId the id of the guild
   * @param commandId the id of the command
   */
  public deleteGuildCommand(
    guildId: Snowflake,
    commandId: Snowflake
  ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      await this.client.requestHandler.request({
        method: "DELETE",
        path: Endpoints.ApplicationGuildCommand(this.id, commandId, guildId),
        auth: true,
      });
      if (this.client.guilds.get(guildId)?.commands.get(commandId))
        this.commands.delete(commandId);
      resolve();
    });
  }
}
