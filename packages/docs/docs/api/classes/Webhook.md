---
id: "Webhook"
title: "Class: Webhook"
sidebar_label: "Webhook"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Webhook**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WebhookOptions`](../interfaces/WebhookOptions.md) |

#### Defined in

[packages/libcord/src/structures/Webhook.ts:27](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Webhook.ts#L27)

## Properties

### avatar\_url

• `Optional` **avatar\_url**: `string`

#### Defined in

[packages/libcord/src/structures/Webhook.ts:26](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Webhook.ts#L26)

___

### id

• **id**: `string`

#### Defined in

[packages/libcord/src/structures/Webhook.ts:22](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Webhook.ts#L22)

___

### token

• **token**: `string`

#### Defined in

[packages/libcord/src/structures/Webhook.ts:23](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Webhook.ts#L23)

___

### username

• `Optional` **username**: `string`

#### Defined in

[packages/libcord/src/structures/Webhook.ts:25](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Webhook.ts#L25)

## Methods

### send

▸ **send**(`options`): `Promise`<`undefined` \| [`Webhook`](Webhook.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| [`executeWebhookOptions`](../interfaces/executeWebhookOptions.md) |

#### Returns

`Promise`<`undefined` \| [`Webhook`](Webhook.md)\>

#### Defined in

[packages/libcord/src/structures/Webhook.ts:42](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Webhook.ts#L42)

___

### setAvatar

▸ **setAvatar**(`url`): [`Webhook`](Webhook.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Webhook`](Webhook.md)

#### Defined in

[packages/libcord/src/structures/Webhook.ts:38](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Webhook.ts#L38)

___

### setUsername

▸ **setUsername**(`username`): [`Webhook`](Webhook.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

[`Webhook`](Webhook.md)

#### Defined in

[packages/libcord/src/structures/Webhook.ts:34](https://github.com/Libcord/libcord/blob/60a6e24/packages/libcord/src/structures/Webhook.ts#L34)
