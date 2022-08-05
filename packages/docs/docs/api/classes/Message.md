---
id: "Message"
title: "Class: Message"
sidebar_label: "Message"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Message`**

## Constructors

### constructor

• **new Message**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `CustomMessageData` |

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

packages/libcord/src/structures/Message.ts:26

## Properties

### author

• **author**: `undefined` \| [`User`](User.md)

#### Defined in

packages/libcord/src/structures/Message.ts:22

___

### channel

• **channel**: [`TextChannel`](TextChannel.md)

#### Defined in

packages/libcord/src/structures/Message.ts:18

___

### channelID

• **channelID**: `string`

#### Defined in

packages/libcord/src/structures/Message.ts:20

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### content

• **content**: `string`

#### Defined in

packages/libcord/src/structures/Message.ts:21

___

### guild

• `Optional` **guild**: [`Guild`](Guild.md)

#### Defined in

packages/libcord/src/structures/Message.ts:24

___

### id

• **id**: `string`

#### Defined in

packages/libcord/src/structures/Message.ts:19

___

### member

• **member**: [`Member`](Member.md)

#### Defined in

packages/libcord/src/structures/Message.ts:23

## Methods

### reply

▸ **reply**(`msg`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| [`Embed`](Embed.md) \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

packages/libcord/src/structures/Message.ts:83
