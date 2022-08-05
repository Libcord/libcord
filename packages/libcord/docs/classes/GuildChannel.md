[libcord](../README.md) / [Exports](../modules.md) / GuildChannel

# Class: GuildChannel

## Hierarchy

- [`Channel`](Channel.md)

  ↳ **`GuildChannel`**

  ↳↳ [`CategoryChannel`](CategoryChannel.md)

  ↳↳ [`TextChannel`](TextChannel.md)

  ↳↳ [`VoiceChannel`](VoiceChannel.md)

## Table of contents

### Constructors

- [constructor](GuildChannel.md#constructor)

### Properties

- [client](GuildChannel.md#client)
- [guild](GuildChannel.md#guild)
- [id](GuildChannel.md#id)
- [name](GuildChannel.md#name)
- [nsfw](GuildChannel.md#nsfw)
- [parentId](GuildChannel.md#parentid)
- [permissionOverwrites](GuildChannel.md#permissionoverwrites)
- [position](GuildChannel.md#position)
- [type](GuildChannel.md#type)

### Accessors

- [mention](GuildChannel.md#mention)

### Methods

- [update](GuildChannel.md#update)

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

[src/structures/channels/GuildChannel.ts:16](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L16)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Channel](Channel.md).[client](Channel.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[src/structures/channels/GuildChannel.ts:10](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L10)

___

### id

• **id**: `string`

#### Inherited from

[Channel](Channel.md).[id](Channel.md#id)

#### Defined in

[src/structures/channels/Channel.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L8)

___

### name

• **name**: `string`

#### Overrides

[Channel](Channel.md).[name](Channel.md#name)

#### Defined in

[src/structures/channels/GuildChannel.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L9)

___

### nsfw

• **nsfw**: `boolean`

#### Defined in

[src/structures/channels/GuildChannel.ts:11](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L11)

___

### parentId

• **parentId**: ``null`` \| `string`

#### Defined in

[src/structures/channels/GuildChannel.ts:13](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L13)

___

### permissionOverwrites

• **permissionOverwrites**: [`PermissionOverwrite`](PermissionOverwrite.md)[] = `[]`

#### Defined in

[src/structures/channels/GuildChannel.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L14)

___

### position

• **position**: `number`

#### Defined in

[src/structures/channels/GuildChannel.ts:12](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L12)

___

### type

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md)

#### Inherited from

[Channel](Channel.md).[type](Channel.md#type)

#### Defined in

[src/structures/channels/Channel.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Channel.ts#L9)

## Accessors

### mention

• `get` **mention**(): `string`

#### Returns

`string`

#### Inherited from

Channel.mention

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

#### Defined in

[src/structures/channels/GuildChannel.ts:39](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L39)
