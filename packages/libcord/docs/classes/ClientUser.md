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

[packages/libcord/src/structures/User.ts:62](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L62)

## Properties

### avatar

• **avatar**: ``null`` \| `string`

hash of user avatar

#### Inherited from

[User](User.md).[avatar](User.md#avatar)

#### Defined in

[packages/libcord/src/structures/User.ts:20](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L20)

___

### bot

• **bot**: `boolean`

if the user is a bot

#### Inherited from

[User](User.md).[bot](User.md#bot)

#### Defined in

[packages/libcord/src/structures/User.ts:40](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L40)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[User](User.md).[client](User.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### createAt

• `Readonly` **createAt**: `number`

the date of the user account was created in timestamp

#### Inherited from

[User](User.md).[createAt](User.md#createat)

#### Defined in

[packages/libcord/src/structures/User.ts:50](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L50)

___

### discriminator

• **discriminator**: `string`

discriminator of the user

#### Inherited from

[User](User.md).[discriminator](User.md#discriminator)

#### Defined in

[packages/libcord/src/structures/User.ts:30](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L30)

___

### id

• **id**: `string`

the id of the user

#### Inherited from

[User](User.md).[id](User.md#id)

#### Defined in

[packages/libcord/src/structures/User.ts:15](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L15)

___

### publicFlags

• **publicFlags**: `number`

user public's flags

#### Inherited from

[User](User.md).[publicFlags](User.md#publicflags)

#### Defined in

[packages/libcord/src/structures/User.ts:55](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L55)

___

### system

• **system**: `boolean`

if the user are a official discord system user

#### Inherited from

[User](User.md).[system](User.md#system)

#### Defined in

[packages/libcord/src/structures/User.ts:45](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L45)

___

### tag

• **tag**: `string`

tag of the user (username#descriminator)

#### Inherited from

[User](User.md).[tag](User.md#tag)

#### Defined in

[packages/libcord/src/structures/User.ts:35](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L35)

___

### username

• **username**: `string`

username of the user

#### Inherited from

[User](User.md).[username](User.md#username)

#### Defined in

[packages/libcord/src/structures/User.ts:25](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L25)

## Accessors

### presence

• `get` **presence**(): ``null`` \| [`Presence`](../interfaces/Presence.md)

get current presence of the bot

#### Returns

``null`` \| [`Presence`](../interfaces/Presence.md)

#### Defined in

[packages/libcord/src/structures/ClientUser.ts:12](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ClientUser.ts#L12)

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

[packages/libcord/src/structures/User.ts:83](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L83)

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

[packages/libcord/src/structures/ClientUser.ts:62](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ClientUser.ts#L62)

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

[packages/libcord/src/structures/ClientUser.ts:57](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ClientUser.ts#L57)

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

[packages/libcord/src/structures/ClientUser.ts:76](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ClientUser.ts#L76)

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

[packages/libcord/src/structures/ClientUser.ts:30](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ClientUser.ts#L30)

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

[packages/libcord/src/structures/ClientUser.ts:43](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ClientUser.ts#L43)

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

[packages/libcord/src/structures/ClientUser.ts:72](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/ClientUser.ts#L72)

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

[packages/libcord/src/structures/User.ts:97](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L97)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[User](User.md).[toString](User.md#tostring)

#### Defined in

[packages/libcord/src/structures/User.ts:93](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L93)
