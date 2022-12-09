---
id: "Channel"
title: "Class: Channel"
sidebar_label: "Channel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Channel`**

  ↳↳ [`GroupChannel`](GroupChannel.md)

  ↳↳ [`GuildChannel`](GuildChannel.md)

  ↳↳ [`PrivateChannel`](PrivateChannel.md)

## Constructors

### constructor

• **new Channel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIChannel` |

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:12](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L12)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Base.ts#L8)

___

### id

• **id**: `string`

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L8)

___

### name

• **name**: `string`

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:10](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L10)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:9](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L9)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:19](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L19)
