---
id: "Interaction"
title: "Class: Interaction"
sidebar_label: "Interaction"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Interaction`**

  ↳↳ [`CommandInteraction`](CommandInteraction.md)

## Constructors

### constructor

• **new Interaction**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIBaseInteraction`<`any`, `any`\> |

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:20](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L20)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Base.ts#L8)

___

### data

• **data**: `APIBaseInteraction`<`any`, `any`\>

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:17](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L17)

___

### name

• **name**: `string`

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:18](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L18)

___

### type

• **type**: `number`

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:19](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L19)

## Methods

### isButton

▸ **isButton**(): this is ButtonInteraction

#### Returns

this is ButtonInteraction

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:38](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L38)

___

### isCommand

▸ **isCommand**(): this is CommandInteraction

#### Returns

this is CommandInteraction

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:26](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L26)

___

### isMessageContextMenu

▸ **isMessageContextMenu**(): this is MessageContextMenuInteraction

#### Returns

this is MessageContextMenuInteraction

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:30](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L30)

___

### isSelectMenu

▸ **isSelectMenu**(): this is SelectMenuInteraction

#### Returns

this is SelectMenuInteraction

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:46](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L46)

___

### isUserContextMenu

▸ **isUserContextMenu**(): this is UserContextMenuInteraction

#### Returns

this is UserContextMenuInteraction

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:34](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/interactions/Interaction.ts#L34)
