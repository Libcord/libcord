[libcord](../README.md) / [Exports](../modules.md) / Message

# Class: Message

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Message`**

## Table of contents

### Constructors

- [constructor](Message.md#constructor)

### Properties

- [author](Message.md#author)
- [channel](Message.md#channel)
- [channelID](Message.md#channelid)
- [client](Message.md#client)
- [content](Message.md#content)
- [guild](Message.md#guild)
- [id](Message.md#id)
- [member](Message.md#member)

### Methods

- [reply](Message.md#reply)

## Constructors

### constructor

• **new Message**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `CustomMessageData` |

#### Overrides

Base.constructor

#### Defined in

[src/structures/Message.ts:26](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L26)

## Properties

### author

• **author**: `undefined` \| [`User`](User.md)

#### Defined in

[src/structures/Message.ts:22](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L22)

___

### channel

• **channel**: [`TextChannel`](TextChannel.md)

#### Defined in

[src/structures/Message.ts:18](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L18)

___

### channelID

• **channelID**: `string`

#### Defined in

[src/structures/Message.ts:20](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L20)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### content

• **content**: `string`

#### Defined in

[src/structures/Message.ts:21](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L21)

___

### guild

• `Optional` **guild**: [`Guild`](Guild.md)

#### Defined in

[src/structures/Message.ts:24](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L24)

___

### id

• **id**: `string`

#### Defined in

[src/structures/Message.ts:19](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L19)

___

### member

• **member**: [`Member`](Member.md)

#### Defined in

[src/structures/Message.ts:23](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L23)

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

[src/structures/Message.ts:83](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Message.ts#L83)
