---
id: "GuildChannel"
title: "Class: GuildChannel"
sidebar_label: "GuildChannel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Channel`](Channel.md)

  ↳ **`GuildChannel`**

  ↳↳ [`CategoryChannel`](CategoryChannel.md)

  ↳↳ [`TextChannel`](TextChannel.md)

  ↳↳ [`VoiceChannel`](VoiceChannel.md)

## Constructors

### constructor

• **new GuildChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIGuildChannel`<`any`\> |

#### Overrides

[Channel](Channel.md).[constructor](Channel.md#constructor)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:16

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Channel](Channel.md).[client](Channel.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:10

___

### id

• **id**: `string`

#### Inherited from

[Channel](Channel.md).[id](Channel.md#id)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:8

___

### name

• **name**: `string`

#### Overrides

[Channel](Channel.md).[name](Channel.md#name)

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:9

___

### nsfw

• **nsfw**: `boolean`

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:11

___

### parentId

• **parentId**: ``null`` \| `string`

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:13

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:14

___

### position

• **position**: `number`

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:12

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Inherited from

[Channel](Channel.md).[type](Channel.md#type)

#### Defined in

packages/libcord/src/structures/channels/Channel.ts:9

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

Channel.mention

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

#### Defined in

packages/libcord/src/structures/channels/GuildChannel.ts:39
