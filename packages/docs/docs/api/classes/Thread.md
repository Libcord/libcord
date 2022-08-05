---
id: "Thread"
title: "Class: Thread"
sidebar_label: "Thread"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Thread`**

  ↳↳ [`NewsThread`](NewsThread.md)

  ↳↳ [`PrivateThread`](PrivateThread.md)

  ↳↳ [`PublicThread`](PublicThread.md)

## Constructors

### constructor

• **new Thread**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIThreadChannel` |

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

packages/libcord/src/structures/channels/Thread.ts:11

## Properties

### archived

• `Readonly` **archived**: `undefined` \| `boolean`

#### Defined in

packages/libcord/src/structures/channels/Thread.ts:8

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Inherited from

[Base](Base.md).[client](Base.md#client)

#### Defined in

packages/libcord/src/structures/Base.ts:8

___

### id

• `Readonly` **id**: `string`

#### Defined in

packages/libcord/src/structures/channels/Thread.ts:7

___

### locked

• `Readonly` **locked**: `undefined` \| `boolean`

#### Defined in

packages/libcord/src/structures/channels/Thread.ts:9
