[libcord](../README.md) / [Exports](../modules.md) / Thread

# Class: Thread

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Thread`**

  ↳↳ [`NewsThread`](NewsThread.md)

  ↳↳ [`PrivateThread`](PrivateThread.md)

  ↳↳ [`PublicThread`](PublicThread.md)

## Table of contents

### Constructors

- [constructor](Thread.md#constructor)

### Properties

- [archived](Thread.md#archived)
- [client](Thread.md#client)
- [id](Thread.md#id)
- [locked](Thread.md#locked)

## Constructors

### constructor

• **new Thread**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIThreadChannel` |

#### Overrides

Base.constructor

#### Defined in

[src/structures/channels/Thread.ts:11](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Thread.ts#L11)

## Properties

### archived

• `Readonly` **archived**: `undefined` \| `boolean`

#### Defined in

[src/structures/channels/Thread.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Thread.ts#L8)

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

[src/structures/Base.ts:8](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/Base.ts#L8)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/structures/channels/Thread.ts:7](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Thread.ts#L7)

___

### locked

• `Readonly` **locked**: `undefined` \| `boolean`

#### Defined in

[src/structures/channels/Thread.ts:9](https://github.com/Libcord/libcord/blob/f2b4cca/src/structures/channels/Thread.ts#L9)
