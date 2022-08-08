---
id: "Presence"
title: "Interface: Presence"
sidebar_label: "Presence"
sidebar_position: 0
custom_edit_url: null
---

a presence object

**`Interface`**

## Properties

### activity

• `Optional` **activity**: [`Activity`](Activity.md)

The user's activities

See https://discord.com/developers/docs/topics/gateway#activity-object

#### Defined in

[packages/libcord/src/structures/User.ts:158](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L158)

___

### afk

• `Optional` **afk**: `boolean`

Whether or not the client is afk. default false

#### Defined in

[packages/libcord/src/structures/User.ts:168](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L168)

___

### status

• `Optional` **status**: [`PresenceStatus`](../modules.md#presencestatus)

The user's new status

See https://discord.com/developers/docs/topics/gateway#update-status-status-types

#### Defined in

[packages/libcord/src/structures/User.ts:164](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L164)
