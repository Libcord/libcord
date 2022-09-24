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

[packages/libcord/src/structures/User.ts:158](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L158)

___

### afk

• `Optional` **afk**: `boolean`

Whether the client is afk. default false

#### Defined in

[packages/libcord/src/structures/User.ts:168](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L168)

___

### status

• `Optional` **status**: [`PresenceStatus`](../modules.md#presencestatus)

The user's new status

See https://discord.com/developers/docs/topics/gateway#update-status-status-types

#### Defined in

[packages/libcord/src/structures/User.ts:164](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L164)
