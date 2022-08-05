---
id: "ClientUser"
title: "Class: ClientUser"
sidebar_label: "ClientUser"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`User`](User.md)

  ↳ **`ClientUser`**

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

packages/libcord/src/structures/User.ts:63

## Properties

### avatar

• **avatar**: ``null`` \| `string`

hash of user avatar

#### Inherited from

[User](User.md).[avatar](User.md#avatar)

#### Defined in

packages/libcord/src/structures/User.ts:21

___

### bot

• **bot**: `boolean`

if the user is a bot

#### Inherited from

[User](User.md).[bot](User.md#bot)

#### Defined in

packages/libcord/src/structures/User.ts:41

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[User](User.md).[client](User.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### createAt

• `Readonly` **createAt**: `number`

the date of the user account was created in timestamp

#### Inherited from

[User](User.md).[createAt](User.md#createat)

#### Defined in

packages/libcord/src/structures/User.ts:51

___

### discriminator

• **discriminator**: `string`

discriminator of the user

#### Inherited from

[User](User.md).[discriminator](User.md#discriminator)

#### Defined in

packages/libcord/src/structures/User.ts:31

___

### id

• **id**: `string`

the id of the user

#### Inherited from

[User](User.md).[id](User.md#id)

#### Defined in

packages/libcord/src/structures/User.ts:16

___

### publicFlags

• **publicFlags**: `number`

user public's flags

#### Inherited from

[User](User.md).[publicFlags](User.md#publicflags)

#### Defined in

packages/libcord/src/structures/User.ts:56

___

### system

• **system**: `boolean`

if the user are a official discord system user

#### Inherited from

[User](User.md).[system](User.md#system)

#### Defined in

packages/libcord/src/structures/User.ts:46

___

### tag

• **tag**: `string`

tag of the user (username#descriminator)

#### Inherited from

[User](User.md).[tag](User.md#tag)

#### Defined in

packages/libcord/src/structures/User.ts:36

___

### username

• **username**: `string`

username of the user

#### Inherited from

[User](User.md).[username](User.md#username)

#### Defined in

packages/libcord/src/structures/User.ts:26

## Accessors

### presence

• `get` **presence**(): ``null`` \| [`Presence`](../interfaces/Presence.md)

get current presence of the bot

#### Returns

``null`` \| [`Presence`](../interfaces/Presence.md)

#### Defined in

packages/libcord/src/structures/ClientUser.ts:12

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

packages/libcord/src/structures/User.ts:84

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

packages/libcord/src/structures/ClientUser.ts:62

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

packages/libcord/src/structures/ClientUser.ts:57

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

packages/libcord/src/structures/ClientUser.ts:76

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

packages/libcord/src/structures/ClientUser.ts:30

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

packages/libcord/src/structures/ClientUser.ts:43

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

packages/libcord/src/structures/ClientUser.ts:72

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

packages/libcord/src/structures/User.ts:98

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[User](User.md).[toString](User.md#tostring)

#### Defined in

packages/libcord/src/structures/User.ts:94
