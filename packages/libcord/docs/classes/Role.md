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
- [hoisted](Role.md#hoisted)
- [icon](Role.md#icon)
- [id](Role.md#id)
- [integrated](Role.md#integrated)
- [mentionable](Role.md#mentionable)
- [name](Role.md#name)
- [unicodeEmoji](Role.md#unicodeemoji)

### Accessors

- [hex](Role.md#hex)

## Constructors

### constructor

• **new Role**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIRole` |

#### Overrides

Base.constructor

#### Defined in

[src/structures/Role.ts:14](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L14)

## Properties

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### color

• **color**: `number`

#### Defined in

[src/structures/Role.ts:11](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L11)

___

### hoisted

• **hoisted**: `boolean`

#### Defined in

[src/structures/Role.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L9)

___

### icon

• **icon**: `string`

#### Defined in

[src/structures/Role.ts:12](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L12)

___

### id

• **id**: `string`

#### Defined in

[src/structures/Role.ts:6](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L6)

___

### integrated

• **integrated**: `boolean`

#### Defined in

[src/structures/Role.ts:10](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L10)

___

### mentionable

• **mentionable**: `boolean`

#### Defined in

[src/structures/Role.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L8)

___

### name

• **name**: `string`

#### Defined in

[src/structures/Role.ts:7](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L7)

___

### unicodeEmoji

• **unicodeEmoji**: `string`

#### Defined in

[src/structures/Role.ts:13](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L13)

## Accessors

### hex

• `get` **hex**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Role.ts:23](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Role.ts#L23)
