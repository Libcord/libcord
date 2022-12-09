---
id: "Member"
title: "Class: Member"
sidebar_label: "Member"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Member`**

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

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[packages/libcord/src/structures/Member.ts:24](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L24)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Base.ts#L8)

___

### data

• `Private` **data**: `APIGuildMember`

#### Defined in

[packages/libcord/src/structures/Member.ts:22](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L22)

___

### deaf

• **deaf**: `boolean`

#### Defined in

[packages/libcord/src/structures/Member.ts:19](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L19)

___

### displayName

• **displayName**: `string`

#### Defined in

[packages/libcord/src/structures/Member.ts:15](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L15)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[packages/libcord/src/structures/Member.ts:21](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[packages/libcord/src/structures/Member.ts:13](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L13)

___

### joinedAt

• **joinedAt**: `string`

#### Defined in

[packages/libcord/src/structures/Member.ts:17](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L17)

___

### mute

• **mute**: `boolean`

#### Defined in

[packages/libcord/src/structures/Member.ts:20](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L20)

___

### premiumSince

• **premiumSince**: ``null`` \| `string`

#### Defined in

[packages/libcord/src/structures/Member.ts:18](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L18)

___

### roles

• **roles**: [`Collection`](Collection.md)<`string`, [`Role`](Role.md)\>

#### Defined in

[packages/libcord/src/structures/Member.ts:16](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L16)

___

### user

• **user**: [`User`](User.md)

#### Defined in

[packages/libcord/src/structures/Member.ts:14](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L14)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/Member.ts:52](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Member.ts#L52)
