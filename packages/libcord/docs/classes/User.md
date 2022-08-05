[libcord](../README.md) / [Exports](../modules.md) / User

# Class: User

## Hierarchy

- [`Base`](Base.md)

  ↳ **`User`**

  ↳↳ [`ClientUser`](ClientUser.md)

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Properties

- [avatar](User.md#avatar)
- [bot](User.md#bot)
- [client](User.md#client)
- [createAt](User.md#createat)
- [discriminator](User.md#discriminator)
- [id](User.md#id)
- [publicFlags](User.md#publicflags)
- [system](User.md#system)
- [tag](User.md#tag)
- [username](User.md#username)

### Methods

- [avatarURL](User.md#avatarurl)
- [toJSON](User.md#tojson)
- [toString](User.md#tostring)

## Constructors

### constructor

• **new User**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIUser` |

#### Overrides

Base.constructor

#### Defined in

[src/structures/User.ts:63](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L63)

## Properties

### avatar

• **avatar**: ``null`` \| `string`

hash of user avatar

#### Defined in

[src/structures/User.ts:21](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L21)

___

### bot

• **bot**: `boolean`

if the user is a bot

#### Defined in

[src/structures/User.ts:41](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L41)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### createAt

• `Readonly` **createAt**: `number`

the date of the user account was created in timestamp

#### Defined in

[src/structures/User.ts:51](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L51)

___

### discriminator

• **discriminator**: `string`

discriminator of the user

#### Defined in

[src/structures/User.ts:31](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L31)

___

### id

• **id**: `string`

the id of the user

#### Defined in

[src/structures/User.ts:16](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L16)

___

### publicFlags

• **publicFlags**: `number`

user public's flags

#### Defined in

[src/structures/User.ts:56](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L56)

___

### system

• **system**: `boolean`

if the user are a official discord system user

#### Defined in

[src/structures/User.ts:46](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L46)

___

### tag

• **tag**: `string`

tag of the user (username#descriminator)

#### Defined in

[src/structures/User.ts:36](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L36)

___

### username

• **username**: `string`

username of the user

#### Defined in

[src/structures/User.ts:26](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L26)

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

[src/structures/User.ts:84](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L84)

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

[src/structures/User.ts:98](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L98)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/User.ts:94](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L94)
