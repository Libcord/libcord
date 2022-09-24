[libcord](../README.md) / [Exports](../modules.md) / CommandInteraction

# Class: CommandInteraction

## Hierarchy

- [`Interaction`](Interaction.md)

  ↳ **`CommandInteraction`**

  ↳↳ [`MessageContextMenuInteraction`](MessageContextMenuInteraction.md)

  ↳↳ [`UserContextMenuInteraction`](UserContextMenuInteraction.md)

## Table of contents

### Constructors

- [constructor](CommandInteraction.md#constructor)

### Properties

- [channel](CommandInteraction.md#channel)
- [client](CommandInteraction.md#client)
- [data](CommandInteraction.md#data)
- [defered](CommandInteraction.md#defered)
- [guild](CommandInteraction.md#guild)
- [id](CommandInteraction.md#id)
- [member](CommandInteraction.md#member)
- [name](CommandInteraction.md#name)
- [options](CommandInteraction.md#options)
- [replied](CommandInteraction.md#replied)
- [token](CommandInteraction.md#token)
- [type](CommandInteraction.md#type)
- [user](CommandInteraction.md#user)

### Methods

- [defer](CommandInteraction.md#defer)
- [isButton](CommandInteraction.md#isbutton)
- [isCommand](CommandInteraction.md#iscommand)
- [isMessageContextMenu](CommandInteraction.md#ismessagecontextmenu)
- [isSelectMenu](CommandInteraction.md#isselectmenu)
- [isUserContextMenu](CommandInteraction.md#isusercontextmenu)
- [reply](CommandInteraction.md#reply)

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

[packages/libcord/src/structures/interactions/CommandInteraction.ts:35](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L35)

## Properties

### channel

• **channel**: ``null`` \| [`Channel`](Channel.md)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:26](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L26)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Interaction](Interaction.md).[client](Interaction.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### data

• **data**: `APIBaseInteraction`<`any`, `any`\>

#### Inherited from

[Interaction](Interaction.md).[data](Interaction.md#data)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:17](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L17)

___

### defered

• `Optional` **defered**: `boolean`

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:32](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L32)

___

### guild

• **guild**: ``null`` \| [`Guild`](Guild.md)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:27](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:25](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L25)

___

### member

• **member**: ``null`` \| [`Member`](Member.md)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:29](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L29)

___

### name

• **name**: `string`

#### Inherited from

[Interaction](Interaction.md).[name](Interaction.md#name)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:18](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L18)

___

### options

• `Optional` **options**: `any`

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:31](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L31)

___

### replied

• `Optional` **replied**: `boolean`

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:33](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L33)

___

### token

• **token**: `string`

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:30](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L30)

___

### type

• **type**: `number`

#### Inherited from

[Interaction](Interaction.md).[type](Interaction.md#type)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:19](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L19)

___

### user

• `Optional` **user**: [`User`](User.md)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:28](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L28)

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

[packages/libcord/src/structures/interactions/CommandInteraction.ts:67](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L67)

___

### isButton

▸ **isButton**(): this is ButtonInteraction

#### Returns

this is ButtonInteraction

#### Inherited from

[Interaction](Interaction.md).[isButton](Interaction.md#isbutton)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:38](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L38)

___

### isCommand

▸ **isCommand**(): this is CommandInteraction

#### Returns

this is CommandInteraction

#### Inherited from

[Interaction](Interaction.md).[isCommand](Interaction.md#iscommand)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:26](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L26)

___

### isMessageContextMenu

▸ **isMessageContextMenu**(): this is MessageContextMenuInteraction

#### Returns

this is MessageContextMenuInteraction

#### Inherited from

[Interaction](Interaction.md).[isMessageContextMenu](Interaction.md#ismessagecontextmenu)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:30](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L30)

___

### isSelectMenu

▸ **isSelectMenu**(): this is SelectMenuInteraction

#### Returns

this is SelectMenuInteraction

#### Inherited from

[Interaction](Interaction.md).[isSelectMenu](Interaction.md#isselectmenu)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:46](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L46)

___

### isUserContextMenu

▸ **isUserContextMenu**(): this is UserContextMenuInteraction

#### Returns

this is UserContextMenuInteraction

#### Inherited from

[Interaction](Interaction.md).[isUserContextMenu](Interaction.md#isusercontextmenu)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:34](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L34)

___

### reply

▸ **reply**(`interactionOptions`): `Promise`<[`CommandInteraction`](CommandInteraction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionOptions` | `string` \| [`InteractionOptions`](../interfaces/InteractionOptions.md) |

#### Returns

`Promise`<[`CommandInteraction`](CommandInteraction.md)\>

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:79](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L79)
