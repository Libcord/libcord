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

[src/structures/User.ts:182](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L182)

___

### type

• `Optional` **type**: ``"custom"`` \| ``"game"`` \| ``"streaming"`` \| ``"listening"`` \| ``"watching"`` \| ``"competing"``

Activity type

**`See`**

https://discord.com/developers/docs/topics/gateway#activity-object-activity-types

**`Default`**

"game"

#### Defined in

[src/structures/User.ts:189](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L189)

___

### url

• `Optional` **url**: `string`

Stream url (only with type Streaming)

#### Defined in

[src/structures/User.ts:193](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/User.ts#L193)
