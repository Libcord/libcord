---
id: "MessageContextMenuInteraction"
title: "Class: MessageContextMenuInteraction"
sidebar_label: "MessageContextMenuInteraction"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`CommandInteraction`](CommandInteraction.md)

  ↳ **`MessageContextMenuInteraction`**

## Constructors

### constructor

• **new MessageContextMenuInteraction**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIMessageApplicationCommandInteraction` |

#### Overrides

[CommandInteraction](CommandInteraction.md).[constructor](CommandInteraction.md#constructor)

#### Defined in

packages/libcord/src/structures/interactions/MessageContextMenuInteraction.ts:16

## Properties

### channel

• **channel**: ``null`` \| [`Channel`](Channel.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[channel](CommandInteraction.md#channel)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:26

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[client](CommandInteraction.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### data

• **data**: `APIBaseInteraction`<`any`, `any`\>

#### Inherited from

[CommandInteraction](CommandInteraction.md).[data](CommandInteraction.md#data)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:17

___

### defered

• `Optional` **defered**: `boolean`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[defered](CommandInteraction.md#defered)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:32

___

### guild

• **guild**: ``null`` \| [`Guild`](Guild.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[guild](CommandInteraction.md#guild)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:27

___

### id

• **id**: `string`

#### Overrides

[CommandInteraction](CommandInteraction.md).[id](CommandInteraction.md#id)

#### Defined in

packages/libcord/src/structures/interactions/MessageContextMenuInteraction.ts:14

___

### member

• **member**: ``null`` \| [`Member`](Member.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[member](CommandInteraction.md#member)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:29

___

### name

• **name**: `string`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[name](CommandInteraction.md#name)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:18

___

### options

• `Optional` **options**: `any`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[options](CommandInteraction.md#options)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:31

___

### replied

• `Optional` **replied**: `boolean`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[replied](CommandInteraction.md#replied)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:33

___

### token

• **token**: `string`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[token](CommandInteraction.md#token)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:30

___

### type

• **type**: `number`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[type](CommandInteraction.md#type)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:19

___

### user

• `Optional` **user**: [`User`](User.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[user](CommandInteraction.md#user)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:28

## Accessors

### targetMessage

• `get` **targetMessage**(): `APIMessage`

#### Returns

`APIMessage`

#### Defined in

packages/libcord/src/structures/interactions/MessageContextMenuInteraction.ts:22

## Methods

### defer

▸ **defer**(`ephemeral`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ephemeral` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[CommandInteraction](CommandInteraction.md).[defer](CommandInteraction.md#defer)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:67

___

### isButton

▸ **isButton**(): this is ButtonInteraction

#### Returns

this is ButtonInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isButton](CommandInteraction.md#isbutton)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:38

___

### isCommand

▸ **isCommand**(): this is CommandInteraction

#### Returns

this is CommandInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isCommand](CommandInteraction.md#iscommand)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:26

___

### isMessageContextMenu

▸ **isMessageContextMenu**(): this is MessageContextMenuInteraction

#### Returns

this is MessageContextMenuInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isMessageContextMenu](CommandInteraction.md#ismessagecontextmenu)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:30

___

### isSelectMenu

▸ **isSelectMenu**(): this is SelectMenuInteraction

#### Returns

this is SelectMenuInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isSelectMenu](CommandInteraction.md#isselectmenu)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:46

___

### isUserContextMenu

▸ **isUserContextMenu**(): this is UserContextMenuInteraction

#### Returns

this is UserContextMenuInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isUserContextMenu](CommandInteraction.md#isusercontextmenu)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:34

___

### reply

▸ **reply**(`interactionOptions`): `Promise`<[`MessageContextMenuInteraction`](MessageContextMenuInteraction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionOptions` | `string` \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`MessageContextMenuInteraction`](MessageContextMenuInteraction.md)\>

#### Inherited from

[CommandInteraction](CommandInteraction.md).[reply](CommandInteraction.md#reply)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:80
