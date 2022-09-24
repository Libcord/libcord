[libcord](../README.md) / [Exports](../modules.md) / PrivateChannel

# Class: PrivateChannel

## Hierarchy

- [`Channel`](Channel.md)

  ↳ **`PrivateChannel`**

## Table of contents

### Constructors

- [constructor](PrivateChannel.md#constructor)

### Properties

- [client](PrivateChannel.md#client)
- [id](PrivateChannel.md#id)
- [name](PrivateChannel.md#name)
- [type](PrivateChannel.md#type)

### Accessors

- [mention](PrivateChannel.md#mention)

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

[packages/libcord/src/structures/channels/Channel.ts:12](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Channel.ts#L12)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Channel](Channel.md).[client](Channel.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### id

• **id**: `string`

#### Inherited from

[Channel](Channel.md).[id](Channel.md#id)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Channel.ts#L8)

___

### name

• **name**: `string`

#### Inherited from

[Channel](Channel.md).[name](Channel.md#name)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:10](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Channel.ts#L10)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Inherited from

[Channel](Channel.md).[type](Channel.md#type)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:9](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Channel.ts#L9)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

Channel.mention

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:19](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Channel.ts#L19)
