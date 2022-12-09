---
id: "Activity"
title: "Interface: Activity"
sidebar_label: "Activity"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### name

• **name**: `string`

The activity's name

#### Defined in

[packages/libcord/src/structures/User.ts:185](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L185)

___

### type

• `Optional` **type**: ``"custom"`` \| ``"game"`` \| ``"streaming"`` \| ``"listening"`` \| ``"watching"`` \| ``"competing"``

Activity type

**`See`**

https://discord.com/developers/docs/topics/gateway#activity-object-activity-types

**`Default`**

"game"

#### Defined in

[packages/libcord/src/structures/User.ts:192](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L192)

___

### url

• `Optional` **url**: `string`

Stream url (only with type Streaming)

#### Defined in

[packages/libcord/src/structures/User.ts:196](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/User.ts#L196)
