---
id: "modules"
title: "libcord"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [ActivityTypes](enums/ActivityTypes.md)
- [ApplicationCommandOptionTypes](enums/ApplicationCommandOptionTypes.md)
- [ApplicationCommandOptionsTypes](enums/ApplicationCommandOptionsTypes.md)
- [ApplicationCommandType](enums/ApplicationCommandType.md)
- [CLIENT\_EVENTS](enums/CLIENT_EVENTS.md)
- [ChannelTypes](enums/ChannelTypes.md)
- [Colors](enums/Colors.md)
- [Intents](enums/Intents.md)
- [Permissions](enums/Permissions.md)

## Other Classes

- [ActionRow](classes/ActionRow.md)
- [ApplicationCommand](classes/ApplicationCommand.md)
- [Button](classes/Button.md)
- [CategoryChannel](classes/CategoryChannel.md)
- [Channel](classes/Channel.md)
- [Client](classes/Client.md)
- [Collection](classes/Collection.md)
- [Color](classes/Color.md)
- [Embed](classes/Embed.md)
- [GroupChannel](classes/GroupChannel.md)
- [GuildChannel](classes/GuildChannel.md)
- [Interaction](classes/Interaction.md)
- [NewsChannel](classes/NewsChannel.md)
- [NewsThread](classes/NewsThread.md)
- [PermissionOverwrite](classes/PermissionOverwrite.md)
- [PrivateChannel](classes/PrivateChannel.md)
- [PrivateThread](classes/PrivateThread.md)
- [PublicThread](classes/PublicThread.md)
- [Role](classes/Role.md)
- [SelectMenu](classes/SelectMenu.md)
- [StageChannel](classes/StageChannel.md)
- [TextChannel](classes/TextChannel.md)
- [Thread](classes/Thread.md)
- [VoiceChannel](classes/VoiceChannel.md)
- [Webhook](classes/Webhook.md)

## Structures Classes

- [Base](classes/Base.md)
- [ClientUser](classes/ClientUser.md)
- [CommandInteraction](classes/CommandInteraction.md)
- [Guild](classes/Guild.md)
- [Member](classes/Member.md)
- [Message](classes/Message.md)
- [MessageContextMenuInteraction](classes/MessageContextMenuInteraction.md)
- [User](classes/User.md)
- [UserContextMenuInteraction](classes/UserContextMenuInteraction.md)

## Interfaces

- [Activity](interfaces/Activity.md)
- [ApplicationCommandBase](interfaces/ApplicationCommandBase.md)
- [ApplicationCommandOption](interfaces/ApplicationCommandOption.md)
- [ApplicationCommandOptionChoice](interfaces/ApplicationCommandOptionChoice.md)
- [ApplicationCommandOptionWithSubCommand](interfaces/ApplicationCommandOptionWithSubCommand.md)
- [AuthorOptions](interfaces/AuthorOptions.md)
- [ChannelCreateOptions](interfaces/ChannelCreateOptions.md)
- [ChannelEditOptions](interfaces/ChannelEditOptions.md)
- [ClientOptions](interfaces/ClientOptions.md)
- [EditApplicationCommandOptions](interfaces/EditApplicationCommandOptions.md)
- [FileOption](interfaces/FileOption.md)
- [FooterOptions](interfaces/FooterOptions.md)
- [ImageOptions](interfaces/ImageOptions.md)
- [ImageUrlOptions](interfaces/ImageUrlOptions.md)
- [MessageInteractionOptions](interfaces/MessageInteractionOptions.md)
- [Presence](interfaces/Presence.md)
- [RoleCreateOptions](interfaces/RoleCreateOptions.md)
- [RoleEditOptions](interfaces/RoleEditOptions.md)
- [SelectMenuOption](interfaces/SelectMenuOption.md)
- [ThumbnailOptions](interfaces/ThumbnailOptions.md)
- [WebhookOptions](interfaces/WebhookOptions.md)
- [executeWebhookOptions](interfaces/executeWebhookOptions.md)

## Type Aliases

### ActivityType

Ƭ **ActivityType**: keyof typeof [`ActivityTypes`](enums/ActivityTypes.md)

#### Defined in

packages/libcord/src/structures/User.ts:143

___

### ApplicationCommandOptionsType

Ƭ **ApplicationCommandOptionsType**: keyof typeof [`ApplicationCommandOptionsTypes`](enums/ApplicationCommandOptionsTypes.md)

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:112

___

### ColorStrings

Ƭ **ColorStrings**: ``"LINK"`` \| ``"PRIMARY"`` \| ``"SECONDARY"`` \| ``"SUCCESS"`` \| ``"DANGER"``

#### Defined in

packages/libcord/src/utils/Utils.ts:23

___

### ComponentsType

Ƭ **ComponentsType**: [`Button`](classes/Button.md) \| [`SelectMenu`](classes/SelectMenu.md) \| `APIMessageComponent` \| [`ActionRow`](classes/ActionRow.md)

#### Defined in

packages/libcord/src/structures/components/ActionRow.ts:4

___

### Permission

Ƭ **Permission**: keyof typeof [`Permissions`](enums/Permissions.md)

#### Defined in

packages/libcord/src/utils/Permissions.ts:148

___

### PresenceStatus

Ƭ **PresenceStatus**: ``"online"`` \| ``"dnd"`` \| ``"idle"`` \| ``"invisible"`` \| ``"offline"``

#### Defined in

packages/libcord/src/structures/User.ts:168

___

### RGB

Ƭ **RGB**: [`number`, `number`, `number`]

#### Defined in

packages/libcord/src/utils/Color.ts:1

___

### Snowflake

Ƭ **Snowflake**: `string`

#### Defined in

packages/libcord/src/utils/Snowflake.ts:1

___

### imageFormats

Ƭ **imageFormats**: ``"jpg"`` \| ``"png"`` \| ``"webp"`` \| ``"gif"``

#### Defined in

packages/libcord/src/utils/Utils.ts:3

___

### imageSize

Ƭ **imageSize**: ``16`` \| ``32`` \| ``64`` \| ``128`` \| ``256`` \| ``512`` \| ``1024`` \| ``2048`` \| ``4096``

#### Defined in

packages/libcord/src/utils/Utils.ts:4

## Variables

### API\_VERSION

• `Const` **API\_VERSION**: `number` = `9`

#### Defined in

packages/libcord/src/Constants.ts:167

## Functions

### ParseColor

▸ **ParseColor**(`color`): `ButtonStyle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `ButtonStyle` \| [`ColorStrings`](modules.md#colorstrings) |

#### Returns

`ButtonStyle`

#### Defined in

packages/libcord/src/utils/Utils.ts:44

___

### addPermission

▸ **addPermission**(`permissions`, `permission`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | `number` |
| `permission` | ``"CREATE_INSTANT_INVITE"`` \| ``"KICK_MEMBERS"`` \| ``"BAN_MEMBERS"`` \| ``"ADMINISTRATOR"`` \| ``"MANAGE_CHANNELS"`` \| ``"MANAGE_GUILDS"`` \| ``"ADD_REACTIONS"`` \| ``"VIEW_AUDIT_LOG"`` \| ``"PRIORITY_SPEAKER"`` \| ``"STREAM"`` \| ``"VIEW_CHANNEL"`` \| ``"SEND_MESSAGES"`` \| ``"SEND_TTS_MESSAGES"`` \| ``"MANAGE_MESSAGES"`` \| ``"EMBED_LINKS"`` \| ``"ATTACH_FILES"`` \| ``"READ_MESSAGE_HISTORY"`` \| ``"MENTION_EVERYONE"`` \| ``"USE_EXTERNAL_EMOJIS"`` \| ``"VIEW_GUILD_INSIGHTS"`` \| ``"CONNECT"`` \| ``"SPEAK"`` \| ``"MUTE_MEMBERS"`` \| ``"DEAFEN_MEMBERS"`` \| ``"MOVE_MEMBERS"`` \| ``"USE_VAD"`` \| ``"CHANGE_NICKNAME"`` \| ``"MANAGE_NICKNAMES"`` \| ``"MANAGE_ROLES"`` \| ``"MANAGE_WEBHOOKS"`` \| ``"MANAGE_EMOJIS"`` \| ``"USE_SLASH_COMMANDS"`` \| ``"REQUEST_TO_SPEAK"`` \| ``"MANAGE_THREADS"`` \| ``"USE_PUBLIC_THREADS"`` \| ``"USE_PRIVATE_THREADS"`` |

#### Returns

`number`

#### Defined in

packages/libcord/src/utils/Permissions.ts:157

___

### getAllPermissions

▸ **getAllPermissions**(`permissions`): [`Permission`](modules.md#permission)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | `number` |

#### Returns

[`Permission`](modules.md#permission)[]

#### Defined in

packages/libcord/src/utils/Permissions.ts:173

___

### getDate

▸ **getDate**(`snowflake`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `snowflake` | `string` |

#### Returns

`number`

#### Defined in

packages/libcord/src/utils/Snowflake.ts:3

___

### hasPermission

▸ **hasPermission**(`permissions`, `permission`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | `number` |
| `permission` | ``"CREATE_INSTANT_INVITE"`` \| ``"KICK_MEMBERS"`` \| ``"BAN_MEMBERS"`` \| ``"ADMINISTRATOR"`` \| ``"MANAGE_CHANNELS"`` \| ``"MANAGE_GUILDS"`` \| ``"ADD_REACTIONS"`` \| ``"VIEW_AUDIT_LOG"`` \| ``"PRIORITY_SPEAKER"`` \| ``"STREAM"`` \| ``"VIEW_CHANNEL"`` \| ``"SEND_MESSAGES"`` \| ``"SEND_TTS_MESSAGES"`` \| ``"MANAGE_MESSAGES"`` \| ``"EMBED_LINKS"`` \| ``"ATTACH_FILES"`` \| ``"READ_MESSAGE_HISTORY"`` \| ``"MENTION_EVERYONE"`` \| ``"USE_EXTERNAL_EMOJIS"`` \| ``"VIEW_GUILD_INSIGHTS"`` \| ``"CONNECT"`` \| ``"SPEAK"`` \| ``"MUTE_MEMBERS"`` \| ``"DEAFEN_MEMBERS"`` \| ``"MOVE_MEMBERS"`` \| ``"USE_VAD"`` \| ``"CHANGE_NICKNAME"`` \| ``"MANAGE_NICKNAMES"`` \| ``"MANAGE_ROLES"`` \| ``"MANAGE_WEBHOOKS"`` \| ``"MANAGE_EMOJIS"`` \| ``"USE_SLASH_COMMANDS"`` \| ``"REQUEST_TO_SPEAK"`` \| ``"MANAGE_THREADS"`` \| ``"USE_PUBLIC_THREADS"`` \| ``"USE_PRIVATE_THREADS"`` |

#### Returns

`boolean`

#### Defined in

packages/libcord/src/utils/Permissions.ts:150

___

### parseEmoji

▸ **parseEmoji**(`text`): ``null`` \| { `animated`: `boolean` = false; `id`: ``null`` = null; `name`: `string` = text } \| { `animated`: `boolean` ; `id`: `string` ; `name`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

``null`` \| { `animated`: `boolean` = false; `id`: ``null`` = null; `name`: `string` = text } \| { `animated`: `boolean` ; `id`: `string` ; `name`: `string`  }

#### Defined in

packages/libcord/src/utils/Utils.ts:32

___

### removePermission

▸ **removePermission**(`permissions`, `permission`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | `number` |
| `permission` | ``"CREATE_INSTANT_INVITE"`` \| ``"KICK_MEMBERS"`` \| ``"BAN_MEMBERS"`` \| ``"ADMINISTRATOR"`` \| ``"MANAGE_CHANNELS"`` \| ``"MANAGE_GUILDS"`` \| ``"ADD_REACTIONS"`` \| ``"VIEW_AUDIT_LOG"`` \| ``"PRIORITY_SPEAKER"`` \| ``"STREAM"`` \| ``"VIEW_CHANNEL"`` \| ``"SEND_MESSAGES"`` \| ``"SEND_TTS_MESSAGES"`` \| ``"MANAGE_MESSAGES"`` \| ``"EMBED_LINKS"`` \| ``"ATTACH_FILES"`` \| ``"READ_MESSAGE_HISTORY"`` \| ``"MENTION_EVERYONE"`` \| ``"USE_EXTERNAL_EMOJIS"`` \| ``"VIEW_GUILD_INSIGHTS"`` \| ``"CONNECT"`` \| ``"SPEAK"`` \| ``"MUTE_MEMBERS"`` \| ``"DEAFEN_MEMBERS"`` \| ``"MOVE_MEMBERS"`` \| ``"USE_VAD"`` \| ``"CHANGE_NICKNAME"`` \| ``"MANAGE_NICKNAMES"`` \| ``"MANAGE_ROLES"`` \| ``"MANAGE_WEBHOOKS"`` \| ``"MANAGE_EMOJIS"`` \| ``"USE_SLASH_COMMANDS"`` \| ``"REQUEST_TO_SPEAK"`` \| ``"MANAGE_THREADS"`` \| ``"USE_PUBLIC_THREADS"`` \| ``"USE_PRIVATE_THREADS"`` |

#### Returns

`number`

#### Defined in

packages/libcord/src/utils/Permissions.ts:164

___

### resolveApplicationCommandForApi

▸ **resolveApplicationCommandForApi**(`cmd`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `Object` |

#### Returns

`object`

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:219

___

### resolvePartialEmoji

▸ **resolvePartialEmoji**(`emoji`): ``null`` \| { `animated`: `undefined` ; `id`: `string` = emoji; `name`: `undefined`  } \| { `animated`: `boolean` ; `id`: `any` ; `name`: `any`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `emoji` | `any` |

#### Returns

``null`` \| { `animated`: `undefined` ; `id`: `string` = emoji; `name`: `undefined`  } \| { `animated`: `boolean` ; `id`: `any` ; `name`: `any`  }

#### Defined in

packages/libcord/src/utils/Utils.ts:69

___

### warn

▸ **warn**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

packages/libcord/src/Client.ts:764

## Events

### connected

▸ **connected**(): `void`

when bot are connected to websocket

**`As Member Of`**

Client
 Client#connected

#### Returns

`void`

#### Defined in

packages/libcord/src/Client.ts:754

___

### error

▸ **error**(`error`): `void`

when the websocket connection have a error

**`As Member Of`**

Client
 Client#error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `Error` | the error |

#### Returns

`void`

#### Defined in

packages/libcord/src/Client.ts:762

___

### rawWS

▸ **rawWS**(`packet`): `void`

when bot receive a Websocket event

**`As Member Of`**

Client
 Client#rawWS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `packet` | `rawWSEvent` | a object of ws packets |

#### Returns

`void`

#### Defined in

packages/libcord/src/Client.ts:747

___

### ready

▸ **ready**(): `void`

when bot are online

**`As Member Of`**

Client
 Client#ready

#### Returns

`void`

#### Defined in

packages/libcord/src/Client.ts:739
