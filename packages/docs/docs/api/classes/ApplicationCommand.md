---
id: "ApplicationCommand"
title: "Class: ApplicationCommand"
sidebar_label: "ApplicationCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`ApplicationCommand`**

## Constructors

### constructor

• **new ApplicationCommand**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `Object` |

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:150](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L150)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Base.ts#L8)

___

### data

• **data**: `Object`

#### Index signature

▪ [index: `string`]: `any`

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:148](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L148)

___

### defaultPermission

• **defaultPermission**: `boolean`

if the command is enable by default on add guild

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:144](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L144)

___

### description

• **description**: `string`

the description of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:134](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L134)

___

### guild

• **guild**: ``null`` \| [`Guild`](Guild.md)

the guild of the command (is null for global commands)

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:124](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L124)

___

### id

• **id**: `string`

the id of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:119](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L119)

___

### name

• **name**: `string`

the name of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:129](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L129)

___

### options

• **options**: ``null`` \| [`ApplicationCommandOption`](../interfaces/ApplicationCommandOption.md)[]

the options of the command

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:139](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L139)

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

[packages/libcord/src/structures/ApplicationCommand.ts:168](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L168)

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

[packages/libcord/src/structures/ApplicationCommand.ts:179](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L179)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/ApplicationCommand.ts:175](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L175)

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

[packages/libcord/src/structures/ApplicationCommand.ts:195](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/ApplicationCommand.ts#L195)
