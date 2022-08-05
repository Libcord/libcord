[libcord](../README.md) / [Exports](../modules.md) / CategoryChannel

# Class: CategoryChannel

## Hierarchy

- [`GuildChannel`](GuildChannel.md)

  ↳ **`CategoryChannel`**

## Table of contents

### Constructors

- [constructor](CategoryChannel.md#constructor)

### Properties

- [client](CategoryChannel.md#client)
- [guild](CategoryChannel.md#guild)
- [id](CategoryChannel.md#id)
- [name](CategoryChannel.md#name)
- [nsfw](CategoryChannel.md#nsfw)
- [parentId](CategoryChannel.md#parentid)
- [permissionOverwrites](CategoryChannel.md#permissionoverwrites)
- [position](CategoryChannel.md#position)
- [type](CategoryChannel.md#type)

### Accessors

- [mention](CategoryChannel.md#mention)

### Methods

- [update](CategoryChannel.md#update)

## Constructors

### constructor

• **new CategoryChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIGuildChannel`<`any`\> |

#### Inherited from

[GuildChannel](GuildChannel.md).[constructor](GuildChannel.md#constructor)

#### Defined in

[src/structures/channels/GuildChannel.ts:16](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/GuildChannel.ts#L16)

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

• `Readonly` **type**: [`ChannelTypes`](../enums/ChannelTypes.md) = `ChannelTypes.Category`

#### Overrides

[GuildChannel](GuildChannel.md).[type](GuildChannel.md#type)

#### Defined in

[src/structures/channels/CategoryChannel.ts:5](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/CategoryChannel.ts#L5)

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
