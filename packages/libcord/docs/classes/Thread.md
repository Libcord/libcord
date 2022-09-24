[libcord](../README.md) / [Exports](../modules.md) / Thread

# Class: Thread

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Thread`**

  ↳↳ [`NewsThread`](NewsThread.md)

  ↳↳ [`PrivateThread`](PrivateThread.md)

  ↳↳ [`PublicThread`](PublicThread.md)

## Table of contents

### Constructors

- [constructor](Thread.md#constructor)

### Properties

- [archived](Thread.md#archived)
- [channel](Thread.md#channel)
- [client](Thread.md#client)
- [data](Thread.md#data)
- [id](Thread.md#id)
- [locked](Thread.md#locked)
- [member\_count](Thread.md#member_count)
- [rate\_limit](Thread.md#rate_limit)
- [type](Thread.md#type)

### Methods

- [delete](Thread.md#delete)
- [send](Thread.md#send)

## Constructors

### constructor

• **new Thread**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIThreadChannel` |

#### Overrides

Base.constructor

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:28](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L28)

## Properties

### archived

• `Readonly` **archived**: `undefined` \| `boolean`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:16](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L16)

___

### channel

• `Readonly` **channel**: `undefined` \| `Promise`<`undefined` \| [`TextChannel`](TextChannel.md) \| [`NewsChannel`](NewsChannel.md)\>

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:24](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L24)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### data

• `Readonly` **data**: `APIThreadChannel`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:27](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L27)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:15](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L15)

___

### locked

• `Readonly` **locked**: `undefined` \| `boolean`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:17](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L17)

___

### member\_count

• `Readonly` **member\_count**: `undefined` \| `number`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:23](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L23)

___

### rate\_limit

• `Readonly` **rate\_limit**: `undefined` \| `number`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:22](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L22)

___

### type

• `Readonly` **type**: `GuildNewsThread` \| `GuildPublicThread` \| `GuildPrivateThread`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:18](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L18)

## Methods

### delete

▸ **delete**(): `Promise`<`default`\>

#### Returns

`Promise`<`default`\>

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

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:45](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L45)

▸ **send**(`msg`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| [`Embed`](Embed.md) \| [`MessageOptions`](../interfaces/MessageOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:46](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Thread.ts#L46)
