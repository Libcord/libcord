---
id: "ApplicationCommandOption"
title: "Interface: ApplicationCommandOption"
sidebar_label: "ApplicationCommandOption"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`ApplicationCommandOption`**

  ↳ [`ApplicationCommandOptionWithSubCommand`](ApplicationCommandOptionWithSubCommand.md)

## Properties

### choices

• `Optional` **choices**: [`ApplicationCommandOptionChoice`](ApplicationCommandOptionChoice.md)[]

choices of the command option,You can specify a maximum of 25 choices per option

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:78

___

### description

• **description**: `string`

description of the command option (1 to 100 characters)

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:68

___

### name

• **name**: `string`

name of the command option (1 to 32 characters that match `^[\w-]{1,32}$`)

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:64

___

### required

• **required**: `boolean`

if the option is required

**`Default`**

false

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:73

___

### type

• **type**: ``"string"`` \| ``"boolean"`` \| ``"channel"`` \| ``"user"`` \| ``"integer"`` \| ``"mentionable"`` \| ``"role"`` \| ``"subCommand"`` \| ``"subCommandGroup"``

the type of the command option

#### Defined in

packages/libcord/src/structures/ApplicationCommand.ts:60
