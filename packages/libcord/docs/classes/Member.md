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
- [data](Member.md#data)
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

[packages/libcord/src/structures/Member.ts:25](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L25)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### data

• **data**: `APIGuildMember`

#### Defined in

[packages/libcord/src/structures/Member.ts:23](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L23)

___

### deaf

• **deaf**: `boolean`

#### Defined in

[packages/libcord/src/structures/Member.ts:20](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L20)

___

### displayName

• **displayName**: `string`

#### Defined in

[packages/libcord/src/structures/Member.ts:16](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L16)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[packages/libcord/src/structures/Member.ts:22](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L22)

___

### id

• **id**: `string`

#### Defined in

[packages/libcord/src/structures/Member.ts:14](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L14)

___

### joinedAt

• **joinedAt**: `string`

#### Defined in

[packages/libcord/src/structures/Member.ts:18](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L18)

___

### mute

• **mute**: `boolean`

#### Defined in

[packages/libcord/src/structures/Member.ts:21](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L21)

___

### premiumSince

• **premiumSince**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/Member.ts:19](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L19)

___

### roles

• **roles**: `default`

#### Defined in

[packages/libcord/src/structures/Member.ts:17](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L17)

___

### user

• **user**: [`User`](User.md)

#### Defined in

[packages/libcord/src/structures/Member.ts:15](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L15)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/Member.ts:46](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Member.ts#L46)
