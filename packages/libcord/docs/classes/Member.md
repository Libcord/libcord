[libcord](../README.md) / [Exports](../modules.md) / Member

# Class: Member

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Member`**

## Table of contents

### Constructors

- [constructor](Member.md#constructor)

### Properties

- [client](Member.md#client)
- [deaf](Member.md#deaf)
- [displayName](Member.md#displayname)
- [guild](Member.md#guild)
- [id](Member.md#id)
- [joinedAt](Member.md#joinedat)
- [mute](Member.md#mute)
- [premiumSince](Member.md#premiumsince)
- [roles](Member.md#roles)
- [user](Member.md#user)

### Methods

- [toString](Member.md#tostring)

## Constructors

### constructor

• **new Member**(`client`, `guild`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `guild` | [`Guild`](Guild.md) |
| `data` | `APIGuildMember` |

#### Overrides

Base.constructor

#### Defined in

[src/structures/Member.ts:24](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L24)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### deaf

• **deaf**: `boolean`

#### Defined in

[src/structures/Member.ts:19](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L19)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/structures/Member.ts:15](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L15)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[src/structures/Member.ts:21](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[src/structures/Member.ts:13](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L13)

___

### joinedAt

• **joinedAt**: `string`

#### Defined in

[src/structures/Member.ts:17](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L17)

___

### mute

• **mute**: `boolean`

#### Defined in

[src/structures/Member.ts:20](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L20)

___

### premiumSince

• **premiumSince**: ``null`` \| `string`

#### Defined in

[src/structures/Member.ts:18](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L18)

___

### roles

• **roles**: [`Collection`](Collection.md)<`string`, [`Role`](Role.md)\>

#### Defined in

[src/structures/Member.ts:16](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L16)

___

### user

• **user**: [`User`](User.md)

#### Defined in

[src/structures/Member.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L14)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Member.ts:52](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Member.ts#L52)
