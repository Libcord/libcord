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

[src/structures/channels/VoiceChannel.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/VoiceChannel.ts#L14)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[client](GuildChannel.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[GuildChannel](GuildChannel.md).[guild](GuildChannel.md#guild)

#### Defined in

[src/structures/channels/GuildChannel.ts:10](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L10)

___

### id

• **id**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[id](GuildChannel.md#id)

#### Defined in

[src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L8)

___

### name

• **name**: `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[name](GuildChannel.md#name)

#### Defined in

[src/structures/channels/GuildChannel.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L9)

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[GuildChannel](GuildChannel.md).[nsfw](GuildChannel.md#nsfw)

#### Defined in

[src/structures/channels/GuildChannel.ts:11](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L11)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[GuildChannel](GuildChannel.md).[parentId](GuildChannel.md#parentid)

#### Defined in

[src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L13)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[GuildChannel](GuildChannel.md).[permissionOverwrites](GuildChannel.md#permissionoverwrites)

#### Defined in

[src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L14)

___

### position

• **position**: `number`

#### Inherited from

[GuildChannel](GuildChannel.md).[position](GuildChannel.md#position)

#### Defined in

[src/structures/channels/GuildChannel.ts:12](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L12)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Overrides

[GuildChannel](GuildChannel.md).[type](GuildChannel.md#type)

#### Defined in

[src/structures/channels/VoiceChannel.ts:7](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/VoiceChannel.ts#L7)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

GuildChannel.mention

#### Defined in

[src/structures/channels/Channel.ts:19](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L19)

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

[src/structures/channels/GuildChannel.ts:39](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L39)
