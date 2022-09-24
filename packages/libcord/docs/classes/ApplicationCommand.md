[libcord](../README.md) / [Exports](../modules.md) / ApplicationCommand

# Class: ApplicationCommand

## Hierarchy

- [`Base`](Base.md)

  ↳ **`ApplicationCommand`**

## Table of contents

### Constructors

- [constructor](ApplicationCommand.md#constructor)

### Properties

- [client](ApplicationCommand.md#client)
- [defaultPermission](ApplicationCommand.md#defaultpermission)
- [description](ApplicationCommand.md#description)
- [guild](ApplicationCommand.md#guild)
- [id](ApplicationCommand.md#id)
- [name](ApplicationCommand.md#name)
- [options](ApplicationCommand.md#options)

### Methods

- [edit](ApplicationCommand.md#edit)
- [toJSON](ApplicationCommand.md#tojson)
- [toString](ApplicationCommand.md#tostring)
- [updateData](ApplicationCommand.md#updatedata)

## Constructors

### constructor

• **new ApplicationCommand**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `Object` |

#### Overrides

Base.constructor

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:156](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L156)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### defaultPermission

• **defaultPermission**: `boolean`

if the command is enable by default on add guild

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:150](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L150)

___

### description

• **description**: `string`

the description of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:141](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L141)

___

### guild

• **guild**: ``null`` \| [`Guild`](Guild.md)

the guild of the command (is null for global commands)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:131](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L131)

___

### id

• **id**: `string`

the id of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:126](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L126)

___

### name

• **name**: `string`

the name of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:136](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L136)

___

### options

• **options**: ``null`` \| [`ApplicationCommandOption`](../interfaces/ApplicationCommandOption.md)[]

the options of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:146](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L146)

## Methods

### edit

▸ **edit**(`data`, `cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`EditApplicationCommandOptions`](../interfaces/EditApplicationCommandOptions.md) | `undefined` |
| `cache` | `boolean` | `true` |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)\>

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:174](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L174)

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

[packages/libcord/src/structures/ApplicationCommand.ts:185](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L185)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:181](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L181)

___

### updateData

▸ **updateData**(`data`): [`ApplicationCommand`](ApplicationCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `APIApplicationCommand` |

#### Returns

[`ApplicationCommand`](ApplicationCommand.md)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:201](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ApplicationCommand.ts#L201)
