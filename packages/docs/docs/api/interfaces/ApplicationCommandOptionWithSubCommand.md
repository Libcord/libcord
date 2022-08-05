---
id: "ApplicationCommandOptionWithSubCommand"
title: "Interface: ApplicationCommandOptionWithSubCommand"
sidebar_label: "ApplicationCommandOptionWithSubCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ApplicationCommandOption`](ApplicationCommandOption.md)

  ↳ **`ApplicationCommandOptionWithSubCommand`**

## Properties

### choices

• `Optional` **choices**: [`ApplicationCommandOptionChoice`](ApplicationCommandOptionChoice.md)[]

choices of the command option,You can specify a maximum of 25 choices per option

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[choices](ApplicationCommandOption.md#choices)

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:78

___

### description

• **description**: `string`

description of the command option (1 to 100 characters)

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[description](ApplicationCommandOption.md#description)

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:68

___

### name

• **name**: `string`

name of the command option (1 to 32 characters that match `^[\w-]{1,32}$`)

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[name](ApplicationCommandOption.md#name)

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:64

___

### options

• `Optional` **options**: [`ApplicationCommandOptionWithSubCommand`](ApplicationCommandOptionWithSubCommand.md)

options of command subCommand/subCommandGroup

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:86

___

### required

• **required**: `boolean`

if the option is required

**`Default`**

false

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[required](ApplicationCommandOption.md#required)

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:73

___

### type

• **type**: ``"string"`` \| ``"boolean"`` \| ``"channel"`` \| ``"user"`` \| ``"integer"`` \| ``"mentionable"`` \| ``"role"`` \| ``"subCommand"`` \| ``"subCommandGroup"``

the type of the command option

#### Inherited from

[ApplicationCommandOption](ApplicationCommandOption.md).[type](ApplicationCommandOption.md#type)

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:60
