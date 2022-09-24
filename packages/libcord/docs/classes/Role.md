[libcord](../README.md) / [Exports](../modules.md) / Role

# Class: Role

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Role`**

## Table of contents

### Constructors

- [constructor](Role.md#constructor)

### Properties

- [client](Role.md#client)
- [color](Role.md#color)
- [guild](Role.md#guild)
- [hoisted](Role.md#hoisted)
- [icon](Role.md#icon)
- [id](Role.md#id)
- [integrated](Role.md#integrated)
- [mentionable](Role.md#mentionable)
- [name](Role.md#name)

### Accessors

- [hex](Role.md#hex)

### Methods

- [edit](Role.md#edit)

## Constructors

### constructor

• **new Role**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIRole` |
| `guild` | [`Guild`](Guild.md) |

#### Overrides

Base.constructor

#### Defined in

[packages/libcord/src/structures/Role.ts:15](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L15)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[packages/libcord/src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Base.ts#L8)

___

### color

• **color**: `number`

#### Defined in

[packages/libcord/src/structures/Role.ts:12](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L12)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[packages/libcord/src/structures/Role.ts:14](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L14)

___

### hoisted

• **hoisted**: `boolean`

#### Defined in

[packages/libcord/src/structures/Role.ts:10](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L10)

___

### icon

• **icon**: `string`

#### Defined in

[packages/libcord/src/structures/Role.ts:13](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L13)

___

### id

• **id**: `string`

#### Defined in

[packages/libcord/src/structures/Role.ts:7](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L7)

___

### integrated

• **integrated**: `boolean`

#### Defined in

[packages/libcord/src/structures/Role.ts:11](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L11)

___

### mentionable

• **mentionable**: `boolean`

#### Defined in

[packages/libcord/src/structures/Role.ts:9](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L9)

___

### name

• **name**: `string`

#### Defined in

[packages/libcord/src/structures/Role.ts:8](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L8)

## Accessors

### hex

• `get` **hex**(): `string`

#### Returns

`string`

#### Defined in

[packages/libcord/src/structures/Role.ts:25](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L25)

## Methods

### edit

▸ **edit**(`options`): `Promise`<[`Role`](Role.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RoleEditOptions`](../interfaces/RoleEditOptions.md) |

#### Returns

`Promise`<[`Role`](Role.md)\>

#### Defined in

[packages/libcord/src/structures/Role.ts:28](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Role.ts#L28)
