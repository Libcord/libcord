---
id: "StageChannel"
title: "Class: StageChannel"
sidebar_label: "StageChannel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`VoiceChannel`](VoiceChannel.md)

  ↳ **`StageChannel`**

## Constructors

### constructor

• **new StageChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIVoiceChannel` |

#### Inherited from

[VoiceChannel](VoiceChannel.md).[constructor](VoiceChannel.md#constructor)

#### Defined in

packages/libcord/src/structures/channels/VoiceChannel.ts:14

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[VoiceChannel](VoiceChannel.md).[client](VoiceChannel.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[VoiceChannel](VoiceChannel.md).[guild](VoiceChannel.md#guild)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:10

___

### id

• **id**: `string`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[id](VoiceChannel.md#id)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:8

___

### name

• **name**: `string`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[name](VoiceChannel.md#name)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:9

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[nsfw](VoiceChannel.md#nsfw)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:11

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[parentId](VoiceChannel.md#parentid)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:13

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[permissionOverwrites](VoiceChannel.md#permissionoverwrites)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:14

___

### position

• **position**: `number`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[position](VoiceChannel.md#position)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:12

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md) = `ChannelTypes.Stage`

#### Overrides

[VoiceChannel](VoiceChannel.md).[type](VoiceChannel.md#type)

#### Defined in

packages/libcord/src/structures/channels/StageChannel.ts:5

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

VoiceChannel.mention

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

[VoiceChannel](VoiceChannel.md).[update](VoiceChannel.md#update)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:39
