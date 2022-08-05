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

packages/libcord/src/structures/User.ts:63

## Properties

### avatar

• **avatar**: ``null`` \| `string`

hash of user avatar

#### Defined in

packages/libcord/src/structures/User.ts:21

___

### bot

• **bot**: `boolean`

if the user is a bot

#### Defined in

packages/libcord/src/structures/User.ts:41

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### createAt

• `Readonly` **createAt**: `number`

the date of the user account was created in timestamp

#### Defined in

packages/libcord/src/structures/User.ts:51

___

### discriminator

• **discriminator**: `string`

discriminator of the user

#### Defined in

packages/libcord/src/structures/User.ts:31

___

### id

• **id**: `string`

the id of the user

#### Defined in

packages/libcord/src/structures/User.ts:16

___

### publicFlags

• **publicFlags**: `number`

user public's flags

#### Defined in

packages/libcord/src/structures/User.ts:56

___

### system

• **system**: `boolean`

if the user are a official discord system user

#### Defined in

packages/libcord/src/structures/User.ts:46

___

### tag

• **tag**: `string`

tag of the user (username#descriminator)

#### Defined in

packages/libcord/src/structures/User.ts:36

___

### username

• **username**: `string`

username of the user

#### Defined in

packages/libcord/src/structures/User.ts:26

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

packages/libcord/src/structures/User.ts:84

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

packages/libcord/src/structures/User.ts:98

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/libcord/src/structures/User.ts:94
