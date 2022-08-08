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

[packages/libcord/src/structures/channels/TextChannel.ts:24](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/TextChannel.ts#L24)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[TextChannel](TextChannel.md).[client](TextChannel.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[TextChannel](TextChannel.md).[guild](TextChannel.md#guild)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L14)

___

### id

• **id**: `string`

#### Inherited from

[TextChannel](TextChannel.md).[id](TextChannel.md#id)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L8)

___

### lastMessageId

• **lastMessageId**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[lastMessageId](TextChannel.md#lastmessageid)

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:20](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/TextChannel.ts#L20)

___

### messages

• **messages**: [`Collection`](Collection.md)<`string`, [`Message`](Message.md)\>

#### Inherited from

[TextChannel](TextChannel.md).[messages](TextChannel.md#messages)

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:21](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/TextChannel.ts#L21)

___

### name

• **name**: `string`

#### Inherited from

[TextChannel](TextChannel.md).[name](TextChannel.md#name)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L13)

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[TextChannel](TextChannel.md).[nsfw](TextChannel.md#nsfw)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:15](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L15)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[parentId](TextChannel.md#parentid)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:17](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L17)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[TextChannel](TextChannel.md).[permissionOverwrites](TextChannel.md#permissionoverwrites)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:18](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L18)

___

### position

• **position**: `number`

#### Inherited from

[TextChannel](TextChannel.md).[position](TextChannel.md#position)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:16](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L16)

___

### rateLimitPerUser

• **rateLimitPerUser**: ``null``

#### Overrides

[TextChannel](TextChannel.md).[rateLimitPerUser](TextChannel.md#ratelimitperuser)

#### Defined in

[packages/libcord/src/structures/channels/NewsChannel.ts:5](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/NewsChannel.ts#L5)

___

### threads

• **threads**: `default`

#### Inherited from

[TextChannel](TextChannel.md).[threads](TextChannel.md#threads)

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:22](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/TextChannel.ts#L22)

___

### topic

• **topic**: ``null`` \| `string`

#### Inherited from

[TextChannel](TextChannel.md).[topic](TextChannel.md#topic)

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:18](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/TextChannel.ts#L18)

___

### type

• `Readonly` **type**: [`News`](../enums/ChannelTypes.md#news) = `ChannelTypes.News`

#### Overrides

[TextChannel](TextChannel.md).[type](TextChannel.md#type)

#### Defined in

[packages/libcord/src/structures/channels/NewsChannel.ts:6](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/NewsChannel.ts#L6)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

TextChannel.mention

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:19](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L19)

## Methods

### edit

▸ **edit**(`options`): `Promise`<`undefined` \| [`VoiceChannel`](VoiceChannel.md) \| [`GuildChannel`](GuildChannel.md) \| [`TextChannel`](TextChannel.md) \| [`CategoryChannel`](CategoryChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChannelEditOptions`](../interfaces/ChannelEditOptions.md) |

#### Returns

`Promise`<`undefined` \| [`VoiceChannel`](VoiceChannel.md) \| [`GuildChannel`](GuildChannel.md) \| [`TextChannel`](TextChannel.md) \| [`CategoryChannel`](CategoryChannel.md)\>

#### Inherited from

[TextChannel](TextChannel.md).[edit](TextChannel.md#edit)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:71](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L71)

___

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

[packages/libcord/src/structures/channels/TextChannel.ts:39](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/TextChannel.ts#L39)

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

[packages/libcord/src/structures/channels/TextChannel.ts:42](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/TextChannel.ts#L42)

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

[packages/libcord/src/structures/channels/TextChannel.ts:33](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/TextChannel.ts#L33)
