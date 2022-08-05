[libcord](../README.md) / [Exports](../modules.md) / ClientUser

# Class: ClientUser

## Hierarchy

- [`User`](User.md)

  ↳ **`ClientUser`**

## Table of contents

### Constructors

- [constructor](ClientUser.md#constructor)

### Properties

- [avatar](ClientUser.md#avatar)
- [bot](ClientUser.md#bot)
- [client](ClientUser.md#client)
- [createAt](ClientUser.md#createat)
- [discriminator](ClientUser.md#discriminator)
- [id](ClientUser.md#id)
- [publicFlags](ClientUser.md#publicflags)
- [system](ClientUser.md#system)
- [tag](ClientUser.md#tag)
- [username](ClientUser.md#username)

### Accessors

- [presence](ClientUser.md#presence)

### Methods

- [avatarURL](ClientUser.md#avatarurl)
- [edit](ClientUser.md#edit)
- [setActivity](ClientUser.md#setactivity)
- [setAvatar](ClientUser.md#setavatar)
- [setPresence](ClientUser.md#setpresence)
- [setStatus](ClientUser.md#setstatus)
- [setUsername](ClientUser.md#setusername)
- [toJSON](ClientUser.md#tojson)
- [toString](ClientUser.md#tostring)

## Constructors

### constructor

• **new ClientUser**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIUser` |

#### Inherited from

[User](User.md).[constructor](User.md#constructor)

#### Defined in

[src/structures/User.ts:63](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L63)

## Properties

### avatar

• **avatar**: ``null`` \| `string`

hash of user avatar

#### Inherited from

[User](User.md).[avatar](User.md#avatar)

#### Defined in

[src/structures/User.ts:21](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L21)

___

### bot

• **bot**: `boolean`

if the user is a bot

#### Inherited from

[User](User.md).[bot](User.md#bot)

#### Defined in

[src/structures/User.ts:41](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L41)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[User](User.md).[client](User.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### createAt

• `Readonly` **createAt**: `number`

the date of the user account was created in timestamp

#### Inherited from

[User](User.md).[createAt](User.md#createat)

#### Defined in

[src/structures/User.ts:51](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L51)

___

### discriminator

• **discriminator**: `string`

discriminator of the user

#### Inherited from

[User](User.md).[discriminator](User.md#discriminator)

#### Defined in

[src/structures/User.ts:31](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L31)

___

### id

• **id**: `string`

the id of the user

#### Inherited from

[User](User.md).[id](User.md#id)

#### Defined in

[src/structures/User.ts:16](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L16)

___

### publicFlags

• **publicFlags**: `number`

user public's flags

#### Inherited from

[User](User.md).[publicFlags](User.md#publicflags)

#### Defined in

[src/structures/User.ts:56](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L56)

___

### system

• **system**: `boolean`

if the user are a official discord system user

#### Inherited from

[User](User.md).[system](User.md#system)

#### Defined in

[src/structures/User.ts:46](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L46)

___

### tag

• **tag**: `string`

tag of the user (username#descriminator)

#### Inherited from

[User](User.md).[tag](User.md#tag)

#### Defined in

[src/structures/User.ts:36](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L36)

___

### username

• **username**: `string`

username of the user

#### Inherited from

[User](User.md).[username](User.md#username)

#### Defined in

[src/structures/User.ts:26](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L26)

## Accessors

### presence

• `get` **presence**(): ``null`` \| [`Presence`](../interfaces/Presence.md)

get current presence of the bot

#### Returns

``null`` \| [`Presence`](../interfaces/Presence.md)

#### Defined in

[src/structures/ClientUser.ts:12](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ClientUser.ts#L12)

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

#### Inherited from

[User](User.md).[avatarURL](User.md#avatarurl)

#### Defined in

[src/structures/User.ts:84](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L84)

___

### edit

▸ **edit**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.avatar?` | `string` |
| `data.username?` | `string` |

#### Returns

`void`

#### Defined in

[src/structures/ClientUser.ts:62](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ClientUser.ts#L62)

___

### setActivity

▸ **setActivity**(`activity`): `void`

update the activity of the ClientUser

**`Example`**

```ts
client.user.setActivity({
    name: 'using libcord',
    type: 'game'
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `activity` | [`Activity`](../interfaces/Activity.md) | the activity to set |

#### Returns

`void`

#### Defined in

[src/structures/ClientUser.ts:57](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ClientUser.ts#L57)

___

### setAvatar

▸ **setAvatar**(`avatar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `avatar` | `string` |

#### Returns

`void`

#### Defined in

[src/structures/ClientUser.ts:76](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ClientUser.ts#L76)

___

### setPresence

▸ **setPresence**(`presence`): `void`

update bot presence

**`Example`**

```ts
client.user.setPresence({
    status: "dnd",
    activity: {
        type: "game",
        name: "on libcord"
    }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presence` | [`Presence`](../interfaces/Presence.md) | a object of presence |

#### Returns

`void`

#### Defined in

[src/structures/ClientUser.ts:30](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ClientUser.ts#L30)

___

### setStatus

▸ **setStatus**(`status`): `void`

update the status of the ClientUser

**`Example`**

```ts
client.user.setStatus('dnd');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PresenceStatus`](../modules.md#presencestatus) | the status to set |

#### Returns

`void`

#### Defined in

[src/structures/ClientUser.ts:43](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ClientUser.ts#L43)

___

### setUsername

▸ **setUsername**(`username`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`void`

#### Defined in

[src/structures/ClientUser.ts:72](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/ClientUser.ts#L72)

___

### toJSON

▸ **toJSON**(`space?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `space` | `number` | `1` |

#### Returns

`string`

#### Inherited from

[User](User.md).[toJSON](User.md#tojson)

#### Defined in

[src/structures/User.ts:98](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L98)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[User](User.md).[toString](User.md#tostring)

#### Defined in

[src/structures/User.ts:94](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L94)
