---
id: "NewsChannel"
title: "Class: NewsChannel"
sidebar_label: "NewsChannel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`TextChannel`](TextChannel.md)

  ↳ **`NewsChannel`**

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

packages/libcord/src/structures/channels/TextChannel.ts:22

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[TextChannel](TextChannel.md).[client](TextChannel.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[TextChannel](TextChannel.md).[guild](TextChannel.md#guild)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:10

___

### id

• **id**: `string`

#### Inherited from

[TextChannel](TextChannel.md).[id](TextChannel.md#id)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:8

___

### lastMessageId

• **lastMessageId**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[lastMessageId](TextChannel.md#lastmessageid)

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:19

___

### messages

• **messages**: [`Collection`](Collection.md)<`string`, [`Message`](Message.md)\>

#### Inherited from

[TextChannel](TextChannel.md).[messages](TextChannel.md#messages)

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:20

___

### name

• **name**: `string`

#### Inherited from

[TextChannel](TextChannel.md).[name](TextChannel.md#name)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:9

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[TextChannel](TextChannel.md).[nsfw](TextChannel.md#nsfw)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:11

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[parentId](TextChannel.md#parentid)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:13

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[TextChannel](TextChannel.md).[permissionOverwrites](TextChannel.md#permissionoverwrites)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:14

___

### position

• **position**: `number`

#### Inherited from

[TextChannel](TextChannel.md).[position](TextChannel.md#position)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:12

___

### rateLimitPerUser

• **rateLimitPerUser**: ``null``

#### Overrides

[TextChannel](TextChannel.md).[rateLimitPerUser](TextChannel.md#ratelimitperuser)

#### Defined in

packages/libcord/src/structures/channels/NewsChannel.ts:5

___

### topic

• **topic**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[topic](TextChannel.md#topic)

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:17

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md) = `ChannelTypes.News`

#### Overrides

[TextChannel](TextChannel.md).[type](TextChannel.md#type)

#### Defined in

packages/libcord/src/structures/channels/NewsChannel.ts:6

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

TextChannel.mention

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:19

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

packages/libcord/src/structures/channels/TextChannel.ts:36

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

packages/libcord/src/structures/channels/TextChannel.ts:39

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

packages/libcord/src/structures/channels/TextChannel.ts:30
