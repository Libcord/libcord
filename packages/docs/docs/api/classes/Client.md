---
id: "Client"
title: "Class: Client"
sidebar_label: "Client"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `EventEmitter`

  ↳ **`Client`**

## Constructors

### constructor

• **new Client**(`options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ClientOptions`](../interfaces/ClientOptions.md) | options of the bot |

#### Inherited from

EventEmitter.constructor

#### Defined in

[packages/libcord/src/Client.ts:247](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L247)

## Properties

### bot

• **bot**: `boolean`

#### Defined in

[packages/libcord/src/Client.ts:217](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L217)

___

### channels

• **channels**: [`Collection`](Collection.md)<`string`, [`VoiceChannel`](VoiceChannel.md) \| [`TextChannel`](TextChannel.md) \| [`CategoryChannel`](CategoryChannel.md) \| [`PrivateChannel`](PrivateChannel.md)\>

#### Defined in

[packages/libcord/src/Client.ts:228](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L228)

___

### disableEvents

• `Optional` `Readonly` **disableEvents**: (``"ApplicationCommandPermissionsUpdate"`` \| ``"ChannelCreate"`` \| ``"ChannelDelete"`` \| ``"ChannelPinsUpdate"`` \| ``"ChannelUpdate"`` \| ``"GuildBanAdd"`` \| ``"GuildBanRemove"`` \| ``"GuildCreate"`` \| ``"GuildDelete"`` \| ``"GuildEmojisUpdate"`` \| ``"GuildIntegrationsUpdate"`` \| ``"GuildMemberAdd"`` \| ``"GuildMemberRemove"`` \| ``"GuildMembersChunk"`` \| ``"GuildMemberUpdate"`` \| ``"GuildRoleCreate"`` \| ``"GuildRoleDelete"`` \| ``"GuildRoleUpdate"`` \| ``"GuildStickersUpdate"`` \| ``"GuildUpdate"`` \| ``"IntegrationCreate"`` \| ``"IntegrationDelete"`` \| ``"IntegrationUpdate"`` \| ``"InteractionCreate"`` \| ``"InviteCreate"`` \| ``"InviteDelete"`` \| ``"MessageCreate"`` \| ``"MessageDelete"`` \| ``"MessageDeleteBulk"`` \| ``"MessageReactionAdd"`` \| ``"MessageReactionRemove"`` \| ``"MessageReactionRemoveAll"`` \| ``"MessageReactionRemoveEmoji"`` \| ``"MessageUpdate"`` \| ``"PresenceUpdate"`` \| ``"StageInstanceCreate"`` \| ``"StageInstanceDelete"`` \| ``"StageInstanceUpdate"`` \| ``"Ready"`` \| ``"Resumed"`` \| ``"ThreadCreate"`` \| ``"ThreadDelete"`` \| ``"ThreadListSync"`` \| ``"ThreadMembersUpdate"`` \| ``"ThreadMemberUpdate"`` \| ``"ThreadUpdate"`` \| ``"TypingStart"`` \| ``"UserUpdate"`` \| ``"VoiceServerUpdate"`` \| ``"VoiceStateUpdate"`` \| ``"WebhooksUpdate"`` \| ``"GuildScheduledEventCreate"`` \| ``"GuildScheduledEventUpdate"`` \| ``"GuildScheduledEventDelete"`` \| ``"GuildScheduledEventUserAdd"`` \| ``"GuildScheduledEventUserRemove"``)[]

list of events that the bot don't emit

#### Defined in

[packages/libcord/src/Client.ts:208](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L208)

___

### fetchAllMembers

• **fetchAllMembers**: `boolean`

#### Defined in

[packages/libcord/src/Client.ts:216](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L216)

___

### gateway

• **gateway**: `Gateway`

bot gateway

#### Defined in

[packages/libcord/src/Client.ts:203](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L203)

___

### guilds

• **guilds**: [`Collection`](Collection.md)<`string`, [`Guild`](Guild.md)\>

#### Defined in

[packages/libcord/src/Client.ts:227](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L227)

___

### intents

• **intents**: `number`

int number for intents

#### Defined in

[packages/libcord/src/Client.ts:195](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L195)

___

### options

• **options**: [`ClientOptions`](../interfaces/ClientOptions.md)

the options for the client

#### Defined in

[packages/libcord/src/Client.ts:243](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L243)

___

### presence

• **presence**: [`Presence`](../interfaces/Presence.md) = `{}`

bot current presence

#### Defined in

[packages/libcord/src/Client.ts:199](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L199)

___

### requestHandler

• **requestHandler**: `RestManager`

#### Defined in

[packages/libcord/src/Client.ts:204](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L204)

___

### rest

• **rest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ping` | `number` |

#### Defined in

[packages/libcord/src/Client.ts:222](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L222)

___

### slashCommand

• `Readonly` **slashCommand**: `boolean`

#### Defined in

[packages/libcord/src/Client.ts:239](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L239)

___

### slashCommands

• **slashCommands**: [`Collection`](Collection.md)<`string`, [`ApplicationCommand`](ApplicationCommand.md)\>

#### Defined in

[packages/libcord/src/Client.ts:232](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L232)

___

### token

• **token**: `any`

#### Defined in

[packages/libcord/src/Client.ts:214](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L214)

___

### unavailableGuilds

• **unavailableGuilds**: `string`[] = `[]`

#### Defined in

[packages/libcord/src/Client.ts:234](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L234)

___

### user

• `Optional` **user**: [`ClientUser`](ClientUser.md)

a user object of the bot

#### Defined in

[packages/libcord/src/Client.ts:213](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L213)

___

### users

• **users**: [`Collection`](Collection.md)<`string`, [`User`](User.md)\>

#### Defined in

[packages/libcord/src/Client.ts:226](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L226)

___

### ws

• **ws**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ping` | `number` |

#### Defined in

[packages/libcord/src/Client.ts:219](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L219)

## Methods

### bulkOverwriteApplicationCommands

▸ **bulkOverwriteApplicationCommands**(`commands`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

Takes a list of application commands, overwriting existing commands that are registered globally for this application. Updates will be available in all guilds after 1 hour.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commands` | [`ApplicationCommandBase`](../interfaces/ApplicationCommandBase.md)[] | `undefined` | a list of command object |
| `cache?` | `boolean` | `true` | set commands to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

#### Defined in

[packages/libcord/src/Client.ts:541](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L541)

___

### bulkOverwriteGuildApplicationCommands

▸ **bulkOverwriteGuildApplicationCommands**(`guildId`, `commands`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

Takes a list of application commands, overwriting existing commands for the guild.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guildId` | `string` | `undefined` | the id of the guild |
| `commands` | [`ApplicationCommandBase`](../interfaces/ApplicationCommandBase.md)[] | `undefined` | a list of command object |
| `cache?` | `boolean` | `true` | set commands to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

#### Defined in

[packages/libcord/src/Client.ts:751](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L751)

___

### connect

▸ **connect**(`token`): [`Client`](Client.md)

connect the bot to discord

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`Client`](Client.md)

#### Defined in

[packages/libcord/src/Client.ts:274](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L274)

___

### createApplicationCommand

▸ **createApplicationCommand**(`data`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md) \| [`ApplicationCommand`](ApplicationCommand.md)[]\>

Create a new global command. New global commands will be available in all guilds after 1 hour, this also takes arrays <br></br>
⚠ Creating a command with the same name as an existing command for your application will overwrite the old command. see [discord-api-docs](https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | [`ApplicationCommandBase`](../interfaces/ApplicationCommandBase.md) \| [`ApplicationCommandBase`](../interfaces/ApplicationCommandBase.md)[] | `undefined` | a base object of the command or an array of the commands |
| `cache?` | `boolean` | `true` | set the command to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md) \| [`ApplicationCommand`](ApplicationCommand.md)[]\>

#### Defined in

[packages/libcord/src/Client.ts:413](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L413)

___

### createDM

▸ **createDM**(`userId`): `Promise`<[`PrivateChannel`](PrivateChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<[`PrivateChannel`](PrivateChannel.md)\>

#### Defined in

[packages/libcord/src/Client.ts:373](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L373)

___

### createGuildApplicationCommand

▸ **createGuildApplicationCommand**(`guildId`, `data`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md) \| [`ApplicationCommand`](ApplicationCommand.md)[]\>

Create a new guild command. <br></br>
⚠ Creating a command with the same name as an existing command for your application will overwrite the old command. see [discord-api-docs](https://discord.com/developers/docs/interactions/slash-commands#create-guild-application-command)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guildId` | `string` | `undefined` | the id of the guild |
| `data` | [`ApplicationCommandBase`](../interfaces/ApplicationCommandBase.md) \| [`ApplicationCommandBase`](../interfaces/ApplicationCommandBase.md)[] | `undefined` | a base object of the command, or an array of commands |
| `cache?` | `boolean` | `true` | set the command to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md) \| [`ApplicationCommand`](ApplicationCommand.md)[]\>

#### Defined in

[packages/libcord/src/Client.ts:601](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L601)

___

### deleteApplicationCommand

▸ **deleteApplicationCommand**(`commandId`): `Promise`<`void`\>

delete a global application command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | the id of the command |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/libcord/src/Client.ts:524](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L524)

___

### deleteGuildApplicationCommand

▸ **deleteGuildApplicationCommand**(`guildId`, `commandId`): `Promise`<`void`\>

delete a guild command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | the id of the guild |
| `commandId` | `string` | the id of the command |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/libcord/src/Client.ts:728](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L728)

___

### editApplicationCommand

▸ **editApplicationCommand**(`commandId`, `data`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

Edit a global command. Updates will be available in all guilds after 1 hour

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commandId` | `string` | `undefined` | the id of the command |
| `data` | [`EditApplicationCommandOptions`](../interfaces/EditApplicationCommandOptions.md) | `undefined` | options to edit |
| `cache?` | `boolean` | `true` | set/update the command to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

#### Defined in

[packages/libcord/src/Client.ts:488](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L488)

___

### editGuildApplicationCommand

▸ **editGuildApplicationCommand**(`guildId`, `commandId`, `data`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

Edit a guild command.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guildId` | `string` | `undefined` | the id of the guild |
| `commandId` | `string` | `undefined` | the id of the command |
| `data` | [`EditApplicationCommandOptions`](../interfaces/EditApplicationCommandOptions.md) | `undefined` | options to edit |
| `cache?` | `boolean` | `true` | set/update the command to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

#### Defined in

[packages/libcord/src/Client.ts:685](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L685)

___

### emit

▸ **emit**<`K`\>(`event`, ...`args`): `Promise`<[`Client`](Client.md)\>

Emit a typed event and wait for each typed listener to return.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | The typed event name to emit. |
| `...args` | `Parameters`<{}[`K`]\> | The arguments to pass to the typed listeners. |

#### Returns

`Promise`<[`Client`](Client.md)\>

#### Inherited from

EventEmitter.emit

#### Defined in

[packages/libcord/src/utils/EventEmitter.ts:139](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/utils/EventEmitter.ts#L139)

___

### emitSync

▸ **emitSync**<`K`\>(`event`, ...`args`): [`Client`](Client.md)

Emit a typed event without waiting for each listener to
return.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | The typed event name to emit. |
| `...args` | `Parameters`<{}[`K`]\> | The arguments to pass to the typed listeners. |

#### Returns

[`Client`](Client.md)

#### Inherited from

EventEmitter.emitSync

#### Defined in

[packages/libcord/src/utils/EventEmitter.ts:112](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/utils/EventEmitter.ts#L112)

___

### fetchApplicationCommand

▸ **fetchApplicationCommand**(`commandId`, `checkCache?`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

fetch a global application command with the command id

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commandId` | `string` | `undefined` | the id of the command |
| `checkCache?` | `boolean` | `true` | check if the command are already in the cache |
| `cache?` | `boolean` | `true` | set the command to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

#### Defined in

[packages/libcord/src/Client.ts:460](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L460)

___

### fetchApplicationCommands

▸ **fetchApplicationCommands**(`cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

get all global bot applications commands

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cache?` | `boolean` | `true` | set the commands to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

a array of commands object

#### Defined in

[packages/libcord/src/Client.ts:389](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L389)

___

### fetchChannel

▸ **fetchChannel**(`id`, `checkCache?`, `setToCache?`): `Promise`<`undefined` \| [`VoiceChannel`](VoiceChannel.md) \| [`TextChannel`](TextChannel.md) \| [`CategoryChannel`](CategoryChannel.md) \| [`PrivateChannel`](PrivateChannel.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `checkCache` | `boolean` | `true` |
| `setToCache` | `boolean` | `true` |

#### Returns

`Promise`<`undefined` \| [`VoiceChannel`](VoiceChannel.md) \| [`TextChannel`](TextChannel.md) \| [`CategoryChannel`](CategoryChannel.md) \| [`PrivateChannel`](PrivateChannel.md)\>

#### Defined in

[packages/libcord/src/Client.ts:310](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L310)

___

### fetchGuild

▸ **fetchGuild**(`id`, `checkCache?`, `setToCache?`): `Promise`<[`Guild`](Guild.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `checkCache` | `boolean` | `true` |
| `setToCache` | `boolean` | `true` |

#### Returns

`Promise`<[`Guild`](Guild.md)\>

#### Defined in

[packages/libcord/src/Client.ts:292](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L292)

___

### fetchGuildApplicationCommand

▸ **fetchGuildApplicationCommand**(`guildId`, `commandId`, `checkCache?`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

fetch a guild command with id

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guildId` | `string` | `undefined` | the id of the guild |
| `commandId` | `string` | `undefined` | the id of the command |
| `checkCache?` | `boolean` | `true` | check if  command are already in cache |
| `cache?` | `boolean` | `true` | set the command to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

#### Defined in

[packages/libcord/src/Client.ts:655](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L655)

___

### fetchGuildApplicationCommands

▸ **fetchGuildApplicationCommands**(`guildID`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

get all applications commands of a guild

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `guildID` | `string` | `undefined` | the id of the guild |
| `cache?` | `boolean` | `true` | set the commands to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

a array of commands object

#### Defined in

[packages/libcord/src/Client.ts:570](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L570)

___

### fetchMembers

▸ **fetchMembers**(`guildId`, `limit?`, `setToCache?`, `after?`): `Promise`<[`Member`](Member.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `guildId` | `string` | `undefined` |
| `limit` | `number` | `100` |
| `setToCache` | `boolean` | `true` |
| `after` | `number` | `0` |

#### Returns

`Promise`<[`Member`](Member.md)[]\>

#### Defined in

[packages/libcord/src/Client.ts:340](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L340)

___

### off

▸ **off**<`K`\>(`event`, `listener`): [`Client`](Client.md)

Remove a specific listener in the event emitter on a specific
typed event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | The typed event name. |
| `listener` | {}[`K`] | The typed event listener function. |

#### Returns

[`Client`](Client.md)

#### Inherited from

EventEmitter.off

#### Defined in

[packages/libcord/src/utils/EventEmitter.ts:68](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/utils/EventEmitter.ts#L68)

▸ **off**<`K`\>(`event`): [`Client`](Client.md)

Remove all listeners on a specific typed event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | The typed event name. |

#### Returns

[`Client`](Client.md)

#### Inherited from

EventEmitter.off

#### Defined in

[packages/libcord/src/utils/EventEmitter.ts:74](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/utils/EventEmitter.ts#L74)

▸ **off**(): [`Client`](Client.md)

Remove all events from the event listener.

#### Returns

[`Client`](Client.md)

#### Inherited from

EventEmitter.off

#### Defined in

[packages/libcord/src/utils/EventEmitter.ts:79](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/utils/EventEmitter.ts#L79)

___

### once

▸ **once**<`K`\>(`event`, `listener`): [`Client`](Client.md)

Listen for a typed event once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | The typed event name to listen for. |
| `listener` | {}[`K`] | The typed listener function. |

#### Returns

[`Client`](Client.md)

#### Inherited from

EventEmitter.once

#### Defined in

[packages/libcord/src/utils/EventEmitter.ts:49](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/utils/EventEmitter.ts#L49)

___

### queue

▸ **queue**<`K`\>(`event`, ...`args`): [`Client`](Client.md)

The same as emitSync, but wait for each typed listener to
return before calling the next typed listener.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | The typed event name. |
| `...args` | `Parameters`<{}[`K`]\> | The arguments to pass to the typed listeners. |

#### Returns

[`Client`](Client.md)

#### Inherited from

EventEmitter.queue

#### Defined in

[packages/libcord/src/utils/EventEmitter.ts:170](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/utils/EventEmitter.ts#L170)

___

### toJSON

▸ **toJSON**(`space?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `space` | `number` | `1` |

#### Returns

`string`

#### Defined in

[packages/libcord/src/Client.ts:776](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L776)

## Events

### on

▸ **on**(`event`, `listener`): [`Client`](Client.md)

raw packets emitted by the Gateway
 Client#raw

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"raw"`` \| [`RAW`](../enums/CLIENT_EVENTS.md#raw) |
| `listener` | (`eventName`: `string`, `data`: `any`) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:87](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L87)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when the client is ready
 Client#ready

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`READY`](../enums/CLIENT_EVENTS.md#ready) \| ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:95](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L95)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when the client receives a new Message
 Client#messageCreate

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MESSAGE`](../enums/CLIENT_EVENTS.md#message) \| ``"messageCreate"`` |
| `listener` | (`message`: [`Message`](Message.md)) => `void` \| `Promise`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:100](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L100)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when the client receives a new Message
 Client#messageCreate

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`INTERACTION_CREATE`](../enums/CLIENT_EVENTS.md#interaction_create) \| ``"interactionCreate"`` |
| `listener` | (`interaction`: [`CommandInteraction`](CommandInteraction.md) \| [`Interaction`](Interaction.md) \| [`MessageContextMenuInteraction`](MessageContextMenuInteraction.md)) => `void` \| `Promise`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:108](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L108)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when there is an error
 Client#error

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` \| [`ERROR`](../enums/CLIENT_EVENTS.md#error) |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:121](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L121)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when the bot has joined a new server
 Client#guildCreate

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`GUILD_CREATE`](../enums/CLIENT_EVENTS.md#guild_create) \| ``"guildCreate"`` |
| `listener` | (`guild`: [`Guild`](Guild.md)) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:129](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L129)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when the bot has left a server
 Client#guildDelete

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`GUILD_DELETE`](../enums/CLIENT_EVENTS.md#guild_delete) \| ``"guildDelete"`` |
| `listener` | (`guild`: [`Guild`](Guild.md)) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:137](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L137)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when a new channel has been created in a server
 Client#channelCreate

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CHANNEL_CREATE`](../enums/CLIENT_EVENTS.md#channel_create) \| ``"channelCreate"`` |
| `listener` | (`channel`: [`GuildChannel`](GuildChannel.md)) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:145](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L145)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when a channel has been deleted
 Client#channelDelete

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CHANNEL_DELETE`](../enums/CLIENT_EVENTS.md#channel_delete) \| ``"channelDelete"`` |
| `listener` | (`channel`: [`GuildChannel`](GuildChannel.md)) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:153](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L153)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when a channel has been edited
 Client#channelUpdate

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CHANNEL_EDIT`](../enums/CLIENT_EVENTS.md#channel_edit) \| ``"channelUpdate"`` |
| `listener` | (`channel`: [`GuildChannel`](GuildChannel.md)) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:161](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L161)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when a role has been created
 Client#roleCreate

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ROLE_CREATE`](../enums/CLIENT_EVENTS.md#role_create) \| ``"roleCreate"`` |
| `listener` | (`role`: [`Role`](Role.md)) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:169](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L169)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when a role has been edited
 Client#roleUpdate

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ROLE_EDIT`](../enums/CLIENT_EVENTS.md#role_edit) \| ``"roleUpdate"`` |
| `listener` | (`role`: [`Role`](Role.md)) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:177](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L177)

▸ **on**(`event`, `listener`): [`Client`](Client.md)

emitted when a role has been deleted
 Client#roleDelete

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ROLE_DELETE`](../enums/CLIENT_EVENTS.md#role_delete) \| ``"roleDelete"`` |
| `listener` | (`role`: [`Role`](Role.md)) => `void` |

#### Returns

[`Client`](Client.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/libcord/src/Client.ts:185](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/Client.ts#L185)
