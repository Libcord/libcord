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

packages/libcord/src/structures/channels/TextChannel.ts:22

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[client](GuildChannel.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[guild](GuildChannel.md#guild)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:10

___

### id

• **id**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[id](GuildChannel.md#id)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:8

___

### lastMessageId

• **lastMessageId**: ``null`` \| `string`

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:19

___

### messages

• **messages**: [`Collection`](Collection.md)<`string`, [`Message`](Message.md)\>

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:20

___

### name

• **name**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[name](GuildChannel.md#name)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:9

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[GuildChannel](GuildChannel.md).[nsfw](GuildChannel.md#nsfw)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:11

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[parentId](GuildChannel.md#parentid)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:13

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[GuildChannel](GuildChannel.md).[permissionOverwrites](GuildChannel.md#permissionoverwrites)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:14

___

### position

• **position**: `number`

#### Inherited from

[GuildChannel](GuildChannel.md).[position](GuildChannel.md#position)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:12

___

### rateLimitPerUser

• **rateLimitPerUser**: ``null`` \| `number`

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:18

___

### topic

• **topic**: ``null`` \| `string`

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:17

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Overrides

[GuildChannel](GuildChannel.md).[type](GuildChannel.md#type)

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:16

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

GuildChannel.mention

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

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:36

▸ **send**(`msg`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| [`Embed`](Embed.md) \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

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

#### Overrides

[GuildChannel](GuildChannel.md).[update](GuildChannel.md#update)

#### Defined in

packages/libcord/src/structures/channels/TextChannel.ts:30
