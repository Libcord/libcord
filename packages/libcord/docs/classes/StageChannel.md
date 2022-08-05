[libcord](../README.md) / [Exports](../modules.md) / StageChannel

# Class: StageChannel

## Hierarchy

- [`VoiceChannel`](VoiceChannel.md)

  ↳ **`StageChannel`**

## Table of contents

### Constructors

- [constructor](StageChannel.md#constructor)

### Properties

- [client](StageChannel.md#client)
- [guild](StageChannel.md#guild)
- [id](StageChannel.md#id)
- [name](StageChannel.md#name)
- [nsfw](StageChannel.md#nsfw)
- [parentId](StageChannel.md#parentid)
- [permissionOverwrites](StageChannel.md#permissionoverwrites)
- [position](StageChannel.md#position)
- [type](StageChannel.md#type)

### Accessors

- [mention](StageChannel.md#mention)

### Methods

- [update](StageChannel.md#update)

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

[src/structures/channels/VoiceChannel.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/VoiceChannel.ts#L14)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[VoiceChannel](VoiceChannel.md).[client](VoiceChannel.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[VoiceChannel](VoiceChannel.md).[guild](VoiceChannel.md#guild)

#### Defined in

[src/structures/channels/GuildChannel.ts:10](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L10)

___

### id

• **id**: `string`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[id](VoiceChannel.md#id)

#### Defined in

[src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L8)

___

### name

• **name**: `string`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[name](VoiceChannel.md#name)

#### Defined in

[src/structures/channels/GuildChannel.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L9)

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[nsfw](VoiceChannel.md#nsfw)

#### Defined in

[src/structures/channels/GuildChannel.ts:11](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L11)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[parentId](VoiceChannel.md#parentid)

#### Defined in

[src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L13)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[permissionOverwrites](VoiceChannel.md#permissionoverwrites)

#### Defined in

[src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L14)

___

### position

• **position**: `number`

#### Inherited from

[VoiceChannel](VoiceChannel.md).[position](VoiceChannel.md#position)

#### Defined in

[src/structures/channels/GuildChannel.ts:12](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L12)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md) = `ChannelTypes.Stage`

#### Overrides

[VoiceChannel](VoiceChannel.md).[type](VoiceChannel.md#type)

#### Defined in

[src/structures/channels/StageChannel.ts:5](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/StageChannel.ts#L5)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

VoiceChannel.mention

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

[VoiceChannel](VoiceChannel.md).[update](VoiceChannel.md#update)

#### Defined in

[src/structures/channels/GuildChannel.ts:39](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L39)
