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

- [edit](CategoryChannel.md#edit)
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

[packages/libcord/src/structures/channels/GuildChannel.ts:20](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/GuildChannel.ts#L20)

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

• `Readonly` **type**: [`Category`](../enums/ChannelTypes.md#category) = `ChannelTypes.Category`

#### Overrides

[GuildChannel](GuildChannel.md).[type](GuildChannel.md#type)

#### Defined in

[packages/libcord/src/structures/channels/CategoryChannel.ts:5](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/channels/CategoryChannel.ts#L5)

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
