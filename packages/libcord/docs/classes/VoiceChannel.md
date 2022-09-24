[libcord](../README.md) / [Exports](../modules.md) / VoiceChannel

# Class: VoiceChannel

## Hierarchy

- [`GuildChannel`](GuildChannel.md)

  ↳ **`VoiceChannel`**

  ↳↳ [`StageChannel`](StageChannel.md)

## Table of contents

### Constructors

- [constructor](VoiceChannel.md#constructor)

### Properties

- [client](VoiceChannel.md#client)
- [guild](VoiceChannel.md#guild)
- [id](VoiceChannel.md#id)
- [name](VoiceChannel.md#name)
- [nsfw](VoiceChannel.md#nsfw)
- [parentId](VoiceChannel.md#parentid)
- [permissionOverwrites](VoiceChannel.md#permissionoverwrites)
- [position](VoiceChannel.md#position)
- [type](VoiceChannel.md#type)

### Accessors

- [mention](VoiceChannel.md#mention)

### Methods

- [edit](VoiceChannel.md#edit)
- [update](VoiceChannel.md#update)

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

[packages/libcord/src/structures/channels/VoiceChannel.ts:14](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/VoiceChannel.ts#L14)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[client](GuildChannel.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[guild](GuildChannel.md#guild)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L14)

___

### id

• **id**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[id](GuildChannel.md#id)

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Channel.ts#L8)

___

### name

• **name**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[name](GuildChannel.md#name)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L13)

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[GuildChannel](GuildChannel.md).[nsfw](GuildChannel.md#nsfw)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:15](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L15)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[parentId](GuildChannel.md#parentid)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:17](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L17)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[GuildChannel](GuildChannel.md).[permissionOverwrites](GuildChannel.md#permissionoverwrites)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:18](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L18)

___

### position

• **position**: `number`

#### Inherited from

[GuildChannel](GuildChannel.md).[position](GuildChannel.md#position)

#### Defined in

[packages/libcord/src/structures/channels/GuildChannel.ts:16](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L16)

___

### type

• `Readonly` **type**: [`Voice`](../enums/ChannelTypes.md#voice) \| [`Stage`](../enums/ChannelTypes.md#stage) \| [`UNKNOWN`](../enums/ChannelTypes.md#unknown)

#### Overrides

[GuildChannel](GuildChannel.md).[type](GuildChannel.md#type)

#### Defined in

[packages/libcord/src/structures/channels/VoiceChannel.ts:7](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/VoiceChannel.ts#L7)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

GuildChannel.mention

#### Defined in

[packages/libcord/src/structures/channels/Channel.ts:19](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/Channel.ts#L19)

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

[packages/libcord/src/structures/channels/GuildChannel.ts:71](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L71)

___

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

[packages/libcord/src/structures/channels/GuildChannel.ts:43](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L43)
