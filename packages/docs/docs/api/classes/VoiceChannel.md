---
id: "VoiceChannel"
title: "Class: VoiceChannel"
sidebar_label: "VoiceChannel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`GuildChannel`](GuildChannel.md)

  ↳ **`VoiceChannel`**

  ↳↳ [`StageChannel`](StageChannel.md)

## Constructors

### constructor

• **new VoiceChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIVoiceChannel` |

#### Overrides

[GuildChannel](GuildChannel.md).[constructor](GuildChannel.md#constructor)

#### Defined in

packages/libcord/src/structures/channels/VoiceChannel.ts:14

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

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Overrides

[GuildChannel](GuildChannel.md).[type](GuildChannel.md#type)

#### Defined in

packages/libcord/src/structures/channels/VoiceChannel.ts:7

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

### update

▸ **update**(`data`): [`GuildChannel`](GuildChannel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `APIGuildChannel`<`any`\> |

#### Returns

[`GuildChannel`](GuildChannel.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[update](GuildChannel.md#update)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:39
