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

packages/libcord/src/structures/Member.ts:24

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### data

• `Private` **data**: `APIGuildMember`

#### Defined in

packages/libcord/src/structures/Member.ts:22

___

### deaf

• **deaf**: `boolean`

#### Defined in

packages/libcord/src/structures/Member.ts:19

___

### displayName

• **displayName**: `string`

#### Defined in

packages/libcord/src/structures/Member.ts:15

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

packages/libcord/src/structures/Member.ts:21

___

### id

• **id**: `string`

#### Defined in

packages/libcord/src/structures/Member.ts:13

___

### joinedAt

• **joinedAt**: `string`

#### Defined in

packages/libcord/src/structures/Member.ts:17

___

### mute

• **mute**: `boolean`

#### Defined in

packages/libcord/src/structures/Member.ts:20

___

### premiumSince

• **premiumSince**: ``null`` \| `string`

#### Defined in

packages/libcord/src/structures/Member.ts:18

___

### roles

• **roles**: [`Collection`](Collection.md)<`string`, [`Role`](Role.md)\>

#### Defined in

packages/libcord/src/structures/Member.ts:16

___

### user

• **user**: [`User`](User.md)

#### Defined in

packages/libcord/src/structures/Member.ts:14

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/libcord/src/structures/Member.ts:52
