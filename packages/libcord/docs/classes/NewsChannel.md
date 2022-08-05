[libcord](../README.md) / [Exports](../modules.md) / NewsChannel

# Class: NewsChannel

## Hierarchy

- [`TextChannel`](TextChannel.md)

  ↳ **`NewsChannel`**

## Table of contents

### Constructors

- [constructor](NewsChannel.md#constructor)

### Properties

- [client](NewsChannel.md#client)
- [guild](NewsChannel.md#guild)
- [id](NewsChannel.md#id)
- [lastMessageId](NewsChannel.md#lastmessageid)
- [messages](NewsChannel.md#messages)
- [name](NewsChannel.md#name)
- [nsfw](NewsChannel.md#nsfw)
- [parentId](NewsChannel.md#parentid)
- [permissionOverwrites](NewsChannel.md#permissionoverwrites)
- [position](NewsChannel.md#position)
- [rateLimitPerUser](NewsChannel.md#ratelimitperuser)
- [topic](NewsChannel.md#topic)
- [type](NewsChannel.md#type)

### Accessors

- [mention](NewsChannel.md#mention)

### Methods

- [send](NewsChannel.md#send)
- [update](NewsChannel.md#update)

## Constructors

### constructor

• **new NewsChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APITextChannel` |

#### Inherited from

[TextChannel](TextChannel.md).[constructor](TextChannel.md#constructor)

#### Defined in

[src/structures/channels/TextChannel.ts:22](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L22)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[TextChannel](TextChannel.md).[client](TextChannel.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[TextChannel](TextChannel.md).[guild](TextChannel.md#guild)

#### Defined in

[src/structures/channels/GuildChannel.ts:10](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L10)

___

### id

• **id**: `string`

#### Inherited from

[TextChannel](TextChannel.md).[id](TextChannel.md#id)

#### Defined in

[src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L8)

___

### lastMessageId

• **lastMessageId**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[lastMessageId](TextChannel.md#lastmessageid)

#### Defined in

[src/structures/channels/TextChannel.ts:19](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L19)

___

### messages

• **messages**: [`Collection`](Collection.md)<`string`, [`Message`](Message.md)\>

#### Inherited from

[TextChannel](TextChannel.md).[messages](TextChannel.md#messages)

#### Defined in

[src/structures/channels/TextChannel.ts:20](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L20)

___

### name

• **name**: `string`

#### Inherited from

[TextChannel](TextChannel.md).[name](TextChannel.md#name)

#### Defined in

[src/structures/channels/GuildChannel.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L9)

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[TextChannel](TextChannel.md).[nsfw](TextChannel.md#nsfw)

#### Defined in

[src/structures/channels/GuildChannel.ts:11](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L11)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[parentId](TextChannel.md#parentid)

#### Defined in

[src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L13)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[TextChannel](TextChannel.md).[permissionOverwrites](TextChannel.md#permissionoverwrites)

#### Defined in

[src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L14)

___

### position

• **position**: `number`

#### Inherited from

[TextChannel](TextChannel.md).[position](TextChannel.md#position)

#### Defined in

[src/structures/channels/GuildChannel.ts:12](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L12)

___

### rateLimitPerUser

• **rateLimitPerUser**: ``null``

#### Overrides

[TextChannel](TextChannel.md).[rateLimitPerUser](TextChannel.md#ratelimitperuser)

#### Defined in

[src/structures/channels/NewsChannel.ts:5](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/NewsChannel.ts#L5)

___

### topic

• **topic**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[topic](TextChannel.md#topic)

#### Defined in

[src/structures/channels/TextChannel.ts:17](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L17)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md) = `ChannelTypes.News`

#### Overrides

[TextChannel](TextChannel.md).[type](TextChannel.md#type)

#### Defined in

[src/structures/channels/NewsChannel.ts:6](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/NewsChannel.ts#L6)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

TextChannel.mention

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

#### Inherited from

[TextChannel](TextChannel.md).[send](TextChannel.md#send)

#### Defined in

[src/structures/channels/TextChannel.ts:36](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L36)

▸ **send**(`msg`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| [`Embed`](Embed.md) \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Inherited from

[TextChannel](TextChannel.md).[send](TextChannel.md#send)

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

#### Inherited from

[TextChannel](TextChannel.md).[update](TextChannel.md#update)

#### Defined in

[src/structures/channels/TextChannel.ts:30](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/TextChannel.ts#L30)
