[libcord](../README.md) / [Exports](../modules.md) / ApplicationCommandOptionWithSubCommand

# Interface: ApplicationCommandOptionWithSubCommand

## Hierarchy

- [`ApplicationCommandOption`](ApplicationCommandOption.md)

  ↳ **`ApplicationCommandOptionWithSubCommand`**

## Table of contents

### Properties

- [choices](ApplicationCommandOptionWithSubCommand.md#choices)
- [description](ApplicationCommandOptionWithSubCommand.md#description)
- [name](ApplicationCommandOptionWithSubCommand.md#name)
- [options](ApplicationCommandOptionWithSubCommand.md#options)
- [required](ApplicationCommandOptionWithSubCommand.md#required)
- [type](ApplicationCommandOptionWithSubCommand.md#type)

## Properties

### choices

• `Optional` **choices**: [`ApplicationCommandOptionChoice`](ApplicationCommandOptionChoice.md)[]

choices of the command option,You can specify a maximum of 25 choices per option

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[choices](ApplicationCommandOption.md#choices)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:85](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L85)

___

### description

• **description**: `string`

description of the command option (1 to 100 characters)

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[description](ApplicationCommandOption.md#description)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:75](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L75)

___

### name

• **name**: `string`

name of the command option (1 to 32 characters that match `^[\w-]{1,32}$`)

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[name](ApplicationCommandOption.md#name)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:71](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L71)

___

### options

• `Optional` **options**: [`ApplicationCommandOptionWithSubCommand`](ApplicationCommandOptionWithSubCommand.md)

options of command subCommand/subCommandGroup

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:93](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L93)

___

### required

• **required**: `boolean`

if the option is required

**`Default`**

false

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[required](ApplicationCommandOption.md#required)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:80](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L80)

___

### type

• **type**: ``"string"`` \| ``"boolean"`` \| ``"channel"`` \| ``"user"`` \| ``"integer"`` \| ``"mentionable"`` \| ``"role"`` \| ``"subCommand"`` \| ``"subCommandGroup"``

the type of the command option

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[type](ApplicationCommandOption.md#type)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:67](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L67)
