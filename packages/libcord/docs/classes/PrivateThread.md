[libcord](../README.md) / [Exports](../modules.md) / PrivateThread

# Class: PrivateThread

## Hierarchy

- [`Thread`](Thread.md)

  ↳ **`PrivateThread`**

## Table of contents

### Constructors

- [constructor](PrivateThread.md#constructor)

### Properties

- [archived](PrivateThread.md#archived)
- [channel](PrivateThread.md#channel)
- [client](PrivateThread.md#client)
- [data](PrivateThread.md#data)
- [id](PrivateThread.md#id)
- [locked](PrivateThread.md#locked)
- [member\_count](PrivateThread.md#member_count)
- [rate\_limit](PrivateThread.md#rate_limit)
- [type](PrivateThread.md#type)

### Methods

- [delete](PrivateThread.md#delete)
- [send](PrivateThread.md#send)

## Constructors

### constructor

• **new PrivateThread**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIThreadChannel` |

#### Inherited from

[Thread](Thread.md).[constructor](Thread.md#constructor)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:28](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L28)

## Properties

### archived

• `Readonly` **archived**: `undefined` \| `boolean`

#### Inherited from

[Thread](Thread.md).[archived](Thread.md#archived)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:16](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L16)

___

### channel

• `Readonly` **channel**: `undefined` \| `Promise`<`undefined` \| [`TextChannel`](TextChannel.md) \| [`NewsChannel`](NewsChannel.md)\>

#### Inherited from

[Thread](Thread.md).[channel](Thread.md#channel)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:24](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L24)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Thread](Thread.md).[client](Thread.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### data

• `Readonly` **data**: `APIThreadChannel`

#### Inherited from

[Thread](Thread.md).[data](Thread.md#data)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:27](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L27)

___

### id

• `Readonly` **id**: `string`

#### Inherited from

[Thread](Thread.md).[id](Thread.md#id)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:15](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L15)

___

### locked

• `Readonly` **locked**: `undefined` \| `boolean`

#### Inherited from

[Thread](Thread.md).[locked](Thread.md#locked)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:17](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L17)

___

### member\_count

• `Readonly` **member\_count**: `undefined` \| `number`

#### Inherited from

[Thread](Thread.md).[member_count](Thread.md#member_count)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:23](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L23)

___

### rate\_limit

• `Readonly` **rate\_limit**: `undefined` \| `number`

#### Inherited from

[Thread](Thread.md).[rate_limit](Thread.md#rate_limit)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:22](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L22)

___

### type

• `Readonly` **type**: `GuildNewsThread` \| `GuildPublicThread` \| `GuildPrivateThread`

#### Inherited from

[Thread](Thread.md).[type](Thread.md#type)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:18](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L18)

## Methods

### delete

▸ **delete**(): `Promise`<`default`\>

#### Returns

`Promise`<`default`\>

#### Inherited from

[Thread](Thread.md).[delete](Thread.md#delete)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:42](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L42)

___

### send

▸ **send**(`content`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| [`Embed`](Embed.md) \| [`MessageOptions`](../interfaces/MessageOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Inherited from

[Thread](Thread.md).[send](Thread.md#send)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:45](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L45)

▸ **send**(`msg`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| [`Embed`](Embed.md) \| [`MessageOptions`](../interfaces/MessageOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Inherited from

[Thread](Thread.md).[send](Thread.md#send)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:46](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L46)
