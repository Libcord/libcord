[libcord](../README.md) / [Exports](../modules.md) / ApplicationCommandBase

# Interface: ApplicationCommandBase

## Table of contents

### Properties

- [defaultPermissions](ApplicationCommandBase.md#defaultpermissions)
- [description](ApplicationCommandBase.md#description)
- [name](ApplicationCommandBase.md#name)
- [options](ApplicationCommandBase.md#options)
- [type](ApplicationCommandBase.md#type)

## Properties

### defaultPermissions

• `Optional` **defaultPermissions**: `boolean`

if the command are enable when the app is add to a guild

#### Defined in

[src/structures/ApplicationCommand.ts:32](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ApplicationCommand.ts#L32)

___

### description

• `Optional` **description**: `string`

the description of the command

#### Defined in

[src/structures/ApplicationCommand.ts:20](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ApplicationCommand.ts#L20)

___

### name

• **name**: `string`

the name of the command

#### Defined in

[src/structures/ApplicationCommand.ts:16](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ApplicationCommand.ts#L16)

___

### options

• `Optional` **options**: ([`ApplicationCommandOption`](ApplicationCommandOption.md) \| [`ApplicationCommandOptionWithSubCommand`](ApplicationCommandOptionWithSubCommand.md))[]

the options of the command

#### Defined in

[src/structures/ApplicationCommand.ts:26](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ApplicationCommand.ts#L26)

___

### type

• `Optional` **type**: [`ApplicationCommandType`](../enums/ApplicationCommandType.md)

#### Defined in

[src/structures/ApplicationCommand.ts:22](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ApplicationCommand.ts#L22)
