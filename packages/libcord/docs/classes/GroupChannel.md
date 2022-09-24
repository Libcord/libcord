[libcord](../README.md) / [Exports](../modules.md) / GroupChannel

# Class: GroupChannel

## Hierarchy

- [`Channel`](Channel.md)

  ↳ **`GroupChannel`**

## Table of contents

### Constructors

- [constructor](GroupChannel.md#constructor)

### Properties

- [client](GroupChannel.md#client)
- [id](GroupChannel.md#id)
- [name](GroupChannel.md#name)
- [type](GroupChannel.md#type)

### Accessors

- [mention](GroupChannel.md#mention)

## Constructors

### constructor

• **new GroupChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIChannel` |

#### Overrides

[Channel](Channel.md).[constructor](Channel.md#constructor)

#### Defined in

[packages/libcord/src/structures/channels/GroupChannel.ts:6](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GroupChannel.ts#L6)

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
