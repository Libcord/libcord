---
id: "TextChannel"
title: "Class: TextChannel"
sidebar_label: "TextChannel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`GuildChannel`](GuildChannel.md)

  ↳ **`TextChannel`**

  ↳↳ [`NewsChannel`](NewsChannel.md)

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

[packages/libcord/src/structures/channels/TextChannel.ts:24](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L24)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[client](GuildChannel.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[guild](GuildChannel.md#guild)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/GuildChannel.ts#L14)

___

### id

• **id**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[id](GuildChannel.md#id)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/Channel.ts#L8)

___

### lastMessageId

• **lastMessageId**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:20](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L20)

___

### messages

• **messages**: [`Collection`](Collection.md)<`string`, [`Message`](Message.md)\>

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:21](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L21)

___

### name

• **name**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[name](GuildChannel.md#name)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/GuildChannel.ts#L13)

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[GuildChannel](GuildChannel.md).[nsfw](GuildChannel.md#nsfw)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:15](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/GuildChannel.ts#L15)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[parentId](GuildChannel.md#parentid)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:17](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/GuildChannel.ts#L17)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[GuildChannel](GuildChannel.md).[permissionOverwrites](GuildChannel.md#permissionoverwrites)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:18](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/GuildChannel.ts#L18)

___

### position

• **position**: `number`

#### Inherited from

[GuildChannel](GuildChannel.md).[position](GuildChannel.md#position)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:16](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/GuildChannel.ts#L16)

___

### rateLimitPerUser

• **rateLimitPerUser**: ``null`` \| `number`

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:19](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L19)

___

### threads

• **threads**: `default`

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:22](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L22)

___

### topic

• **topic**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:18](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L18)

___

### type

• `Readonly` **type**: [`Text`](../enums/ChannelTypes.md#text) \| [`News`](../enums/ChannelTypes.md#news)

#### Overrides

[GuildChannel](GuildChannel.md).[type](GuildChannel.md#type)

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:17](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L17)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

GuildChannel.mention

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:19](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/Channel.ts#L19)

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

[GuildChannel](GuildChannel.md).[edit](GuildChannel.md#edit)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:71](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/GuildChannel.ts#L71)

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

[packages/libcord/src/structures/channels/TextChannel.ts:39](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L39)

▸ **send**(`msg`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| [`Embed`](Embed.md) \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[packages/libcord/src/structures/channels/TextChannel.ts:42](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L42)

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

[packages/libcord/src/structures/channels/TextChannel.ts:33](https://github.com/Libcord/libcord/blob/58e1159/packages/libcord/src/structures/channels/TextChannel.ts#L33)
