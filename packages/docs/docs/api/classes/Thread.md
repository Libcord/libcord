---
id: "Thread"
title: "Class: Thread"
sidebar_label: "Thread"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Thread`**

  ↳↳ [`NewsThread`](NewsThread.md)

  ↳↳ [`PrivateThread`](PrivateThread.md)

  ↳↳ [`PublicThread`](PublicThread.md)

## Constructors

### constructor

• **new Thread**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIThreadChannel` |

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:29](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L29)

## Properties

### archived

• `Readonly` **archived**: `undefined` \| `boolean`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:17](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L17)

___

### channel

• `Readonly` **channel**: `undefined` \| `Promise`<`undefined` \| [`TextChannel`](TextChannel.md) \| [`NewsChannel`](NewsChannel.md)\>

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:25](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L25)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Base.ts#L8)

___

### data

• `Readonly` **data**: `APIThreadChannel`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:28](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L28)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:16](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L16)

___

### locked

• `Readonly` **locked**: `undefined` \| `boolean`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:18](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L18)

___

### member\_count

• `Readonly` **member\_count**: `undefined` \| `number`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:24](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L24)

___

### rate\_limit

• `Readonly` **rate\_limit**: `undefined` \| `number`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:23](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L23)

___

### type

• `Readonly` **type**: `GuildNewsThread` \| `GuildPublicThread` \| `GuildPrivateThread`

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:19](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L19)

## Methods

### delete

▸ **delete**(): `Promise`<`default`\>

#### Returns

`Promise`<`default`\>

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:43](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L43)

___

### send

▸ **send**(`content`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| [`Embed`](Embed.md) \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:46](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L46)

▸ **send**(`msg`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| [`Embed`](Embed.md) \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[packages/libcord/src/structures/channels/Thread.ts:49](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Thread.ts#L49)
