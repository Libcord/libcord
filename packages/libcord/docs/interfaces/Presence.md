[libcord](../README.md) / [Exports](../modules.md) / Presence

# Interface: Presence

a presence object

**`Interface`**

## Table of contents

### Properties

- [activity](Presence.md#activity)
- [afk](Presence.md#afk)
- [status](Presence.md#status)

## Properties

### activity

• `Optional` **activity**: [`Activity`](Activity.md)

The user's activities

See https://discord.com/developers/docs/topics/gateway#activity-object

#### Defined in

[src/structures/User.ts:155](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L155)

___

### afk

• `Optional` **afk**: `boolean`

Whether or not the client is afk. default false

#### Defined in

[src/structures/User.ts:165](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L165)

___

### status

• `Optional` **status**: [`PresenceStatus`](../modules.md#presencestatus)

The user's new status

See https://discord.com/developers/docs/topics/gateway#update-status-status-types

#### Defined in

[src/structures/User.ts:161](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L161)
