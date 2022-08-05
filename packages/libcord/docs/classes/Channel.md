[libcord](../README.md) / [Exports](../modules.md) / Channel

# Class: Channel

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Channel`**

  ↳↳ [`GroupChannel`](GroupChannel.md)

  ↳↳ [`GuildChannel`](GuildChannel.md)

  ↳↳ [`PrivateChannel`](PrivateChannel.md)

## Table of contents

### Constructors

- [constructor](Channel.md#constructor)

### Properties

- [client](Channel.md#client)
- [id](Channel.md#id)
- [name](Channel.md#name)
- [type](Channel.md#type)

### Accessors

- [mention](Channel.md#mention)

## Constructors

### constructor

• **new Channel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIChannel` |

#### Overrides

Base.constructor

#### Defined in

[src/structures/channels/Channel.ts:12](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L12)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### id

• **id**: `string`

#### Defined in

[src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L8)

___

### name

• **name**: `string`

#### Defined in

[src/structures/channels/Channel.ts:10](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L10)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Defined in

[src/structures/channels/Channel.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L9)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/channels/Channel.ts:19](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L19)
