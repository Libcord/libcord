---
id: "PrivateChannel"
title: "Class: PrivateChannel"
sidebar_label: "PrivateChannel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Channel`](Channel.md)

  ↳ **`PrivateChannel`**

## Constructors

### constructor

• **new PrivateChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIChannel` |

#### Inherited from

[Channel](Channel.md).[constructor](Channel.md#constructor)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:12

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Channel](Channel.md).[client](Channel.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### id

• **id**: `string`

#### Inherited from

[Channel](Channel.md).[id](Channel.md#id)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:8

___

### name

• **name**: `string`

#### Inherited from

[Channel](Channel.md).[name](Channel.md#name)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:10

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Inherited from

[Channel](Channel.md).[type](Channel.md#type)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:9

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

Channel.mention

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:19
