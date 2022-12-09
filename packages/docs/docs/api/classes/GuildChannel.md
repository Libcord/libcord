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

[packages/libcord/src/structures/channels/GuildChannel.ts:20](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L20)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Channel](Channel.md).[client](Channel.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L14)

___

### id

• **id**: `string`

#### Inherited from

[Channel](Channel.md).[id](Channel.md#id)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L8)

___

### name

• **name**: `string`

#### Overrides

[Channel](Channel.md).[name](Channel.md#name)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L13)

___

### nsfw

• **nsfw**: `boolean`

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:15](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L15)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:17](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L17)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:18](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L18)

___

### position

• **position**: `number`

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:16](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L16)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Inherited from

[Channel](Channel.md).[type](Channel.md#type)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:9](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/Channel.ts#L9)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

Channel.mention

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

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:71](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L71)

___

### update

▸ **update**(`data`): [`GuildChannel`](GuildChannel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `APIGuildChannel`<`any`\> |

#### Returns

[`GuildChannel`](GuildChannel.md)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:43](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/channels/GuildChannel.ts#L43)
