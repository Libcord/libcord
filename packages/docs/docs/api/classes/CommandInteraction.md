---
id: "CommandInteraction"
title: "Class: CommandInteraction"
sidebar_label: "CommandInteraction"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Interaction`](Interaction.md)

  ↳ **`CommandInteraction`**

  ↳↳ [`MessageContextMenuInteraction`](MessageContextMenuInteraction.md)

  ↳↳ [`UserContextMenuInteraction`](UserContextMenuInteraction.md)

## Constructors

### constructor

• **new CommandInteraction**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIChatInputApplicationCommandInteraction` |

#### Overrides

[Interaction](Interaction.md).[constructor](Interaction.md#constructor)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:35

## Properties

### channel

• **channel**: ``null`` \| [`Channel`](Channel.md)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:26

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Interaction](Interaction.md).[client](Interaction.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### data

• **data**: `APIBaseInteraction`<`any`, `any`\>

#### Inherited from

[Interaction](Interaction.md).[data](Interaction.md#data)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:17

___

### defered

• `Optional` **defered**: `boolean`

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:32

___

### guild

• **guild**: ``null`` \| [`Guild`](Guild.md)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:27

___

### id

• **id**: `string`

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:25

___

### member

• **member**: ``null`` \| [`Member`](Member.md)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:29

___

### name

• **name**: `string`

#### Inherited from

[Interaction](Interaction.md).[name](Interaction.md#name)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:18

___

### options

• `Optional` **options**: `any`

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:31

___

### replied

• `Optional` **replied**: `boolean`

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:33

___

### token

• **token**: `string`

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:30

___

### type

• **type**: `number`

#### Inherited from

[Interaction](Interaction.md).[type](Interaction.md#type)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:19

___

### user

• `Optional` **user**: [`User`](User.md)

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:28

## Methods

### defer

▸ **defer**(`ephemeral`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ephemeral` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:67

___

### isButton

▸ **isButton**(): this is ButtonInteraction

#### Returns

this is ButtonInteraction

#### Inherited from

[Interaction](Interaction.md).[isButton](Interaction.md#isbutton)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:38

___

### isCommand

▸ **isCommand**(): this is CommandInteraction

#### Returns

this is CommandInteraction

#### Inherited from

[Interaction](Interaction.md).[isCommand](Interaction.md#iscommand)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:26

___

### isMessageContextMenu

▸ **isMessageContextMenu**(): this is MessageContextMenuInteraction

#### Returns

this is MessageContextMenuInteraction

#### Inherited from

[Interaction](Interaction.md).[isMessageContextMenu](Interaction.md#ismessagecontextmenu)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:30

___

### isSelectMenu

▸ **isSelectMenu**(): this is SelectMenuInteraction

#### Returns

this is SelectMenuInteraction

#### Inherited from

[Interaction](Interaction.md).[isSelectMenu](Interaction.md#isselectmenu)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:46

___

### isUserContextMenu

▸ **isUserContextMenu**(): this is UserContextMenuInteraction

#### Returns

this is UserContextMenuInteraction

#### Inherited from

[Interaction](Interaction.md).[isUserContextMenu](Interaction.md#isusercontextmenu)

#### Defined in

packages/libcord/src/structures/interactions/Interaction.ts:34

___

### reply

▸ **reply**(`interactionOptions`): `Promise`<[`CommandInteraction`](CommandInteraction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionOptions` | `string` \| [`MessageInteractionOptions`](../interfaces/MessageInteractionOptions.md) |

#### Returns

`Promise`<[`CommandInteraction`](CommandInteraction.md)\>

#### Defined in

packages/libcord/src/structures/interactions/CommandInteraction.ts:80
