[libcord](../README.md) / [Exports](../modules.md) / UserContextMenuInteraction

# Class: UserContextMenuInteraction

## Hierarchy

- [`CommandInteraction`](CommandInteraction.md)

  ↳ **`UserContextMenuInteraction`**

## Table of contents

### Constructors

- [constructor](UserContextMenuInteraction.md#constructor)

### Properties

- [channel](UserContextMenuInteraction.md#channel)
- [client](UserContextMenuInteraction.md#client)
- [data](UserContextMenuInteraction.md#data)
- [defered](UserContextMenuInteraction.md#defered)
- [guild](UserContextMenuInteraction.md#guild)
- [id](UserContextMenuInteraction.md#id)
- [member](UserContextMenuInteraction.md#member)
- [name](UserContextMenuInteraction.md#name)
- [options](UserContextMenuInteraction.md#options)
- [replied](UserContextMenuInteraction.md#replied)
- [token](UserContextMenuInteraction.md#token)
- [type](UserContextMenuInteraction.md#type)
- [user](UserContextMenuInteraction.md#user)

### Accessors

- [targetUser](UserContextMenuInteraction.md#targetuser)

### Methods

- [defer](UserContextMenuInteraction.md#defer)
- [isButton](UserContextMenuInteraction.md#isbutton)
- [isCommand](UserContextMenuInteraction.md#iscommand)
- [isMessageContextMenu](UserContextMenuInteraction.md#ismessagecontextmenu)
- [isSelectMenu](UserContextMenuInteraction.md#isselectmenu)
- [isUserContextMenu](UserContextMenuInteraction.md#isusercontextmenu)
- [reply](UserContextMenuInteraction.md#reply)

## Constructors

### constructor

• **new UserContextMenuInteraction**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIUserApplicationCommandInteraction` |

#### Overrides

[CommandInteraction](CommandInteraction.md).[constructor](CommandInteraction.md#constructor)

#### Defined in

[packages/libcord/src/structures/interactions/UserContextMenuInteraction.ts:16](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/UserContextMenuInteraction.ts#L16)

## Properties

### channel

• **channel**: ``null`` \| [`Channel`](Channel.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[channel](CommandInteraction.md#channel)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:26](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L26)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[client](CommandInteraction.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### data

• **data**: `APIBaseInteraction`<`any`, `any`\>

#### Inherited from

[CommandInteraction](CommandInteraction.md).[data](CommandInteraction.md#data)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:17](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L17)

___

### defered

• `Optional` **defered**: `boolean`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[defered](CommandInteraction.md#defered)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:32](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L32)

___

### guild

• **guild**: ``null`` \| [`Guild`](Guild.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[guild](CommandInteraction.md#guild)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:27](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L27)

___

### id

• **id**: `string`

#### Overrides

[CommandInteraction](CommandInteraction.md).[id](CommandInteraction.md#id)

#### Defined in

[packages/libcord/src/structures/interactions/UserContextMenuInteraction.ts:14](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/UserContextMenuInteraction.ts#L14)

___

### member

• **member**: ``null`` \| [`Member`](Member.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[member](CommandInteraction.md#member)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:29](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L29)

___

### name

• **name**: `string`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[name](CommandInteraction.md#name)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:18](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L18)

___

### options

• `Optional` **options**: `any`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[options](CommandInteraction.md#options)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:31](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L31)

___

### replied

• `Optional` **replied**: `boolean`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[replied](CommandInteraction.md#replied)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:33](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L33)

___

### token

• **token**: `string`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[token](CommandInteraction.md#token)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:30](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L30)

___

### type

• **type**: `number`

#### Inherited from

[CommandInteraction](CommandInteraction.md).[type](CommandInteraction.md#type)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:19](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L19)

___

### user

• `Optional` **user**: [`User`](User.md)

#### Inherited from

[CommandInteraction](CommandInteraction.md).[user](CommandInteraction.md#user)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:28](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L28)

## Accessors

### targetUser

• `get` **targetUser**(): [`User`](User.md)

#### Returns

[`User`](User.md)

#### Defined in

[packages/libcord/src/structures/interactions/UserContextMenuInteraction.ts:22](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/UserContextMenuInteraction.ts#L22)

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

[packages/libcord/src/structures/interactions/CommandInteraction.ts:67](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L67)

___

### isButton

▸ **isButton**(): this is ButtonInteraction

#### Returns

this is ButtonInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isButton](CommandInteraction.md#isbutton)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:38](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L38)

___

### isCommand

▸ **isCommand**(): this is CommandInteraction

#### Returns

this is CommandInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isCommand](CommandInteraction.md#iscommand)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:26](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L26)

___

### isMessageContextMenu

▸ **isMessageContextMenu**(): this is MessageContextMenuInteraction

#### Returns

this is MessageContextMenuInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isMessageContextMenu](CommandInteraction.md#ismessagecontextmenu)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:30](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L30)

___

### isSelectMenu

▸ **isSelectMenu**(): this is SelectMenuInteraction

#### Returns

this is SelectMenuInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isSelectMenu](CommandInteraction.md#isselectmenu)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:46](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L46)

___

### isUserContextMenu

▸ **isUserContextMenu**(): this is UserContextMenuInteraction

#### Returns

this is UserContextMenuInteraction

#### Inherited from

[CommandInteraction](CommandInteraction.md).[isUserContextMenu](CommandInteraction.md#isusercontextmenu)

#### Defined in

[packages/libcord/src/structures/interactions/Interaction.ts:34](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/Interaction.ts#L34)

___

### reply

▸ **reply**(`interactionOptions`): `Promise`<[`UserContextMenuInteraction`](UserContextMenuInteraction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionOptions` | `string` \| [`InteractionOptions`](../interfaces/InteractionOptions.md) |

#### Returns

`Promise`<[`UserContextMenuInteraction`](UserContextMenuInteraction.md)\>

#### Inherited from

[CommandInteraction](CommandInteraction.md).[reply](CommandInteraction.md#reply)

#### Defined in

[packages/libcord/src/structures/interactions/CommandInteraction.ts:79](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/interactions/CommandInteraction.ts#L79)
