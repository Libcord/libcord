[libcord](../README.md) / [Exports](../modules.md) / ApplicationCommandBase

# Interface: ApplicationCommandBase

## Table of contents

### Properties

- [default\_member\_permissions](ApplicationCommandBase.md#default_member_permissions)
- [default\_permission](ApplicationCommandBase.md#default_permission)
- [description](ApplicationCommandBase.md#description)
- [name](ApplicationCommandBase.md#name)
- [options](ApplicationCommandBase.md#options)
- [type](ApplicationCommandBase.md#type)

## Properties

### default\_member\_permissions

• `Optional` **default\_member\_permissions**: (``"CREATE_INSTANT_INVITE"`` \| ``"KICK_MEMBERS"`` \| ``"BAN_MEMBERS"`` \| ``"ADMINISTRATOR"`` \| ``"MANAGE_CHANNELS"`` \| ``"MANAGE_GUILDS"`` \| ``"ADD_REACTIONS"`` \| ``"VIEW_AUDIT_LOG"`` \| ``"PRIORITY_SPEAKER"`` \| ``"STREAM"`` \| ``"VIEW_CHANNEL"`` \| ``"SEND_MESSAGES"`` \| ``"SEND_TTS_MESSAGES"`` \| ``"MANAGE_MESSAGES"`` \| ``"EMBED_LINKS"`` \| ``"ATTACH_FILES"`` \| ``"READ_MESSAGE_HISTORY"`` \| ``"MENTION_EVERYONE"`` \| ``"USE_EXTERNAL_EMOJIS"`` \| ``"VIEW_GUILD_INSIGHTS"`` \| ``"CONNECT"`` \| ``"SPEAK"`` \| ``"MUTE_MEMBERS"`` \| ``"DEAFEN_MEMBERS"`` \| ``"MOVE_MEMBERS"`` \| ``"USE_VAD"`` \| ``"CHANGE_NICKNAME"`` \| ``"MANAGE_NICKNAMES"`` \| ``"MANAGE_ROLES"`` \| ``"MANAGE_WEBHOOKS"`` \| ``"MANAGE_EMOJIS"`` \| ``"USE_SLASH_COMMANDS"`` \| ``"REQUEST_TO_SPEAK"`` \| ``"MANAGE_THREADS"`` \| ``"USE_PUBLIC_THREADS"`` \| ``"USE_PRIVATE_THREADS"``)[] \| [`Permissions`](../enums/Permissions.md)[]

Default permissions for the user to have if they want to use this command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:34](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L34)

___

### default\_permission

• `Optional` **default\_permission**: `boolean`

if the command are enable when the app is add to a guild

**`Deprecated`**

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:39](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L39)

___

### description

• `Optional` **description**: `string`

the description of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:22](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L22)

___

### name

• **name**: `string`

the name of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:18](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L18)

___

### options

• `Optional` **options**: ([`ApplicationCommandOption`](ApplicationCommandOption.md) \| [`ApplicationCommandOptionWithSubCommand`](ApplicationCommandOptionWithSubCommand.md))[]

the options of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:28](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L28)

___

### type

• `Optional` **type**: [`ApplicationCommandType`](../enums/ApplicationCommandType.md)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:24](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L24)
