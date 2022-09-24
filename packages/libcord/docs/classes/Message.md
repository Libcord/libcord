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

[packages/libcord/src/structures/Message.ts:27](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L27)

## Properties

### author

• **author**: `undefined` \| [`User`](User.md)

#### Defined in

[packages/libcord/src/structures/Message.ts:23](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L23)

___

### channel

• **channel**: [`TextChannel`](TextChannel.md)

#### Defined in

[packages/libcord/src/structures/Message.ts:19](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L19)

___

### channelID

• **channelID**: `string`

#### Defined in

[packages/libcord/src/structures/Message.ts:21](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L21)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### content

• **content**: `string`

#### Defined in

[packages/libcord/src/structures/Message.ts:22](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L22)

___

### guild

• `Optional` **guild**: [`Guild`](Guild.md)

#### Defined in

[packages/libcord/src/structures/Message.ts:25](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[packages/libcord/src/structures/Message.ts:20](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L20)

___

### member

• **member**: [`Member`](Member.md)

#### Defined in

[packages/libcord/src/structures/Message.ts:24](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L24)

## Methods

### reply

▸ **reply**(`options`): `Promise`<[`Message`](Message.md)\>

Reply to a message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`Embed`](Embed.md) \| [`MessageOptions`](../interfaces/MessageOptions.md) | The options for the message, can be a string or embed or object |

#### Returns

`Promise`<[`Message`](Message.md)\>

message

#### Defined in

[packages/libcord/src/structures/Message.ts:89](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L89)
