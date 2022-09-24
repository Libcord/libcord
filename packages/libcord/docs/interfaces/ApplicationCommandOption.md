[libcord](../README.md) / [Exports](../modules.md) / ApplicationCommandOption

# Interface: ApplicationCommandOption

## Hierarchy

- **`ApplicationCommandOption`**

  ↳ [`ApplicationCommandOptionWithSubCommand`](ApplicationCommandOptionWithSubCommand.md)

## Table of contents

### Properties

- [choices](ApplicationCommandOption.md#choices)
- [description](ApplicationCommandOption.md#description)
- [name](ApplicationCommandOption.md#name)
- [required](ApplicationCommandOption.md#required)
- [type](ApplicationCommandOption.md#type)

## Properties

### choices

• `Optional` **choices**: [`ApplicationCommandOptionChoice`](ApplicationCommandOptionChoice.md)[]

choices of the command option,You can specify a maximum of 25 choices per option

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:85](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L85)

___

### description

• **description**: `string`

description of the command option (1 to 100 characters)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:75](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L75)

___

### name

• **name**: `string`

name of the command option (1 to 32 characters that match `^[\w-]{1,32}$`)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:71](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L71)

___

### required

• **required**: `boolean`

if the option is required

**`Default`**

false

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:80](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L80)

___

### type

• **type**: ``"string"`` \| ``"boolean"`` \| ``"channel"`` \| ``"user"`` \| ``"integer"`` \| ``"mentionable"`` \| ``"role"`` \| ``"subCommand"`` \| ``"subCommandGroup"``

the type of the command option

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:67](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L67)
