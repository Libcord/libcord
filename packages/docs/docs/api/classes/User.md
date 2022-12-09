---
id: "User"
title: "Class: User"
sidebar_label: "User"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`User`**

  ↳↳ [`ClientUser`](ClientUser.md)

## Constructors

### constructor

• **new User**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIUser` |

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[packages/libcord/src/structures/User.ts:62](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L62)

## Properties

### avatar

• **avatar**: ``null`` \| `string`

hash of user avatar

#### Defined in

[packages/libcord/src/structures/User.ts:20](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L20)

___

### bot

• **bot**: `boolean`

if the user is a bot

#### Defined in

[packages/libcord/src/structures/User.ts:40](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L40)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Base.ts#L8)

___

### createAt

• `Readonly` **createAt**: `number`

the date of the user account was created in timestamp

#### Defined in

[packages/libcord/src/structures/User.ts:50](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L50)

___

### discriminator

• **discriminator**: `string`

discriminator of the user

#### Defined in

[packages/libcord/src/structures/User.ts:30](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L30)

___

### id

• **id**: `string`

the id of the user

#### Defined in

[packages/libcord/src/structures/User.ts:15](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L15)

___

### publicFlags

• **publicFlags**: `number`

user public's flags

#### Defined in

[packages/libcord/src/structures/User.ts:55](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L55)

___

### system

• **system**: `boolean`

if the user are a official discord system user

#### Defined in

[packages/libcord/src/structures/User.ts:45](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L45)

___

### tag

• **tag**: `string`

tag of the user (username#descriminator)

#### Defined in

[packages/libcord/src/structures/User.ts:35](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L35)

___

### username

• **username**: `string`

username of the user

#### Defined in

[packages/libcord/src/structures/User.ts:25](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L25)

## Methods

### avatarURL

▸ **avatarURL**(`__namedParameters`): `string`

get avatar URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ImageUrlOptions`](../interfaces/ImageUrlOptions.md) |

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/User.ts:83](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L83)

___

### toJSON

▸ **toJSON**(`space?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `space` | `number` | `1` |

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/User.ts:97](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L97)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/User.ts:93](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L93)
