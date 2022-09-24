[libcord](../README.md) / [Exports](../modules.md) / Guild

# Class: Guild

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Guild`**

## Table of contents

### Constructors

- [constructor](Guild.md#constructor)

### Properties

- [afkChannelId](Guild.md#afkchannelid)
- [bans](Guild.md#bans)
- [channels](Guild.md#channels)
- [client](Guild.md#client)
- [data](Guild.md#data)
- [discoverySlash](Guild.md#discoveryslash)
- [icon](Guild.md#icon)
- [id](Guild.md#id)
- [members](Guild.md#members)
- [name](Guild.md#name)
- [owner](Guild.md#owner)
- [ownerId](Guild.md#ownerid)
- [roles](Guild.md#roles)
- [slash](Guild.md#slash)
- [slashCommands](Guild.md#slashcommands)

### Accessors

- [afkChannel](Guild.md#afkchannel)

### Methods

- [fetchApplicationCommands](Guild.md#fetchapplicationcommands)

## Constructors

### constructor

• **new Guild**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `GatewayGuildCreateDispatchData` |

#### Overrides

Base.constructor

#### Defined in

[packages/libcord/src/structures/Guild.ts:38](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L38)

## Properties

### afkChannelId

• **afkChannelId**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/Guild.ts:29](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L29)

___

### bans

• **bans**: `GuildBanManager`

#### Defined in

[packages/libcord/src/structures/Guild.ts:31](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L31)

___

### channels

• **channels**: `default`

#### Defined in

[packages/libcord/src/structures/Guild.ts:30](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L30)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### data

• **data**: `GatewayGuildCreateDispatchData`

#### Defined in

[packages/libcord/src/structures/Guild.ts:36](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L36)

___

### discoverySlash

• **discoverySlash**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/Guild.ts:26](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L26)

___

### icon

• **icon**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/Guild.ts:24](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L24)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[packages/libcord/src/structures/Guild.ts:22](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L22)

___

### members

• **members**: [`Collection`](Collection.md)<`string`, [`Member`](Member.md)\>

#### Defined in

[packages/libcord/src/structures/Guild.ts:32](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L32)

___

### name

• **name**: `string`

#### Defined in

[packages/libcord/src/structures/Guild.ts:23](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L23)

___

### owner

• **owner**: [`User`](User.md)

#### Defined in

[packages/libcord/src/structures/Guild.ts:28](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L28)

___

### ownerId

• **ownerId**: `string`

#### Defined in

[packages/libcord/src/structures/Guild.ts:27](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L27)

___

### roles

• **roles**: `default`

#### Defined in

[packages/libcord/src/structures/Guild.ts:34](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L34)

___

### slash

• **slash**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/Guild.ts:25](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L25)

___

### slashCommands

• **slashCommands**: [`Collection`](Collection.md)<`string`, [`ApplicationCommand`](ApplicationCommand.md)\>

#### Defined in

[packages/libcord/src/structures/Guild.ts:33](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L33)

## Accessors

### afkChannel

• `get` **afkChannel**(): ``null`` \| [`VoiceChannel`](VoiceChannel.md)

#### Returns

``null`` \| [`VoiceChannel`](VoiceChannel.md)

#### Defined in

[packages/libcord/src/structures/Guild.ts:60](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L60)

## Methods

### fetchApplicationCommands

▸ **fetchApplicationCommands**(`cache?`): `Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

get all applications commands of this guild

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cache?` | `boolean` | `true` | set the commands to cache |

#### Returns

`Promise`<[`ApplicationCommand`](ApplicationCommand.md)[]\>

a array of commands object

#### Defined in

[packages/libcord/src/structures/Guild.ts:73](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Guild.ts#L73)
