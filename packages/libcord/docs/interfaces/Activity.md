[libcord](../README.md) / [Exports](../modules.md) / Activity

# Interface: Activity

## Table of contents

### Properties

- [name](Activity.md#name)
- [type](Activity.md#type)
- [url](Activity.md#url)

## Properties

### name

• **name**: `string`

The activity's name

#### Defined in

[packages/libcord/src/structures/User.ts:185](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L185)

___

### type

• `Optional` **type**: ``"custom"`` \| ``"game"`` \| ``"streaming"`` \| ``"listening"`` \| ``"watching"`` \| ``"competing"``

Activity type

**`See`**

https://discord.com/developers/docs/topics/gateway#activity-object-activity-types

**`Default`**

"game"

#### Defined in

[packages/libcord/src/structures/User.ts:192](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L192)

___

### url

• `Optional` **url**: `string`

Stream url (only with type Streaming)

#### Defined in

[packages/libcord/src/structures/User.ts:196](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/User.ts#L196)
