[libcord](../README.md) / [Exports](../modules.md) / TextChannel

# Class: TextChannel

## Hierarchy

- [`GuildChannel`](GuildChannel.md)

  ↳ **`TextChannel`**

  ↳↳ [`NewsChannel`](NewsChannel.md)

## Table of contents

### Constructors

- [constructor](TextChannel.md#constructor)

### Properties

- [client](TextChannel.md#client)
- [guild](TextChannel.md#guild)
- [id](TextChannel.md#id)
- [lastMessageId](TextChannel.md#lastmessageid)
- [messages](TextChannel.md#messages)
- [name](TextChannel.md#name)
- [nsfw](TextChannel.md#nsfw)
- [parentId](TextChannel.md#parentid)
- [permissionOverwrites](TextChannel.md#permissionoverwrites)
- [position](TextChannel.md#position)
- [rateLimitPerUser](TextChannel.md#ratelimitperuser)
- [topic](TextChannel.md#topic)
- [type](TextChannel.md#type)

### Accessors

- [mention](TextChannel.md#mention)

### Methods

- [send](TextChannel.md#send)
- [update](TextChannel.md#update)

## Constructors

### constructor

• **new TextChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APITextChannel` |

#### Overrides

[GuildChannel](GuildChannel.md).[constructor](GuildChannel.md#constructor)

#### Defined in

[src/structures/channels/TextChannel.ts:22](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L22)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[client](GuildChannel.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[guild](GuildChannel.md#guild)

#### Defined in

[src/structures/channels/GuildChannel.ts:10](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L10)

___

### id

• **id**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[id](GuildChannel.md#id)

#### Defined in

[src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L8)

___

### lastMessageId

• **lastMessageId**: ``null`` \| `string`

#### Defined in

[src/structures/channels/TextChannel.ts:19](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L19)

___

### messages

• **messages**: [`Collection`](Collection.md)<`string`, [`Message`](Message.md)\>

#### Defined in

[src/structures/channels/TextChannel.ts:20](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L20)

___

### name

• **name**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[name](GuildChannel.md#name)

#### Defined in

[src/structures/channels/GuildChannel.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L9)

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[GuildChannel](GuildChannel.md).[nsfw](GuildChannel.md#nsfw)

#### Defined in

[src/structures/channels/GuildChannel.ts:11](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L11)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[parentId](GuildChannel.md#parentid)

#### Defined in

[src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L13)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[GuildChannel](GuildChannel.md).[permissionOverwrites](GuildChannel.md#permissionoverwrites)

#### Defined in

[src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L14)

___

### position

• **position**: `number`

#### Inherited from

[GuildChannel](GuildChannel.md).[position](GuildChannel.md#position)

#### Defined in

[src/structures/channels/GuildChannel.ts:12](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L12)

___

### rateLimitPerUser

• **rateLimitPerUser**: ``null`` \| `number`

#### Defined in

[src/structures/channels/TextChannel.ts:18](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L18)

___

### topic

• **topic**: ``null`` \| `string`

#### Defined in

[src/structures/channels/TextChannel.ts:17](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L17)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Overrides

[GuildChannel](GuildChannel.md).[type](GuildChannel.md#type)

#### Defined in

[src/structures/channels/TextChannel.ts:16](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L16)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

GuildChannel.mention

#### Defined in

[src/structures/channels/Channel.ts:19](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L19)

## Methods

### send

▸ **send**(`content`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| [`Embed`](Embed.md) \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[src/structures/channels/TextChannel.ts:36](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L36)

▸ **send**(`msg`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| [`Embed`](Embed.md) \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[src/structures/channels/TextChannel.ts:39](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L39)

___

### update

▸ **update**(`data`): [`GuildChannel`](GuildChannel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `APITextChannel` |

#### Returns

[`GuildChannel`](GuildChannel.md)

#### Overrides

[GuildChannel](GuildChannel.md).[update](GuildChannel.md#update)

#### Defined in

[src/structures/channels/TextChannel.ts:30](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L30)
