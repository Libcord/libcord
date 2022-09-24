[libcord](../README.md) / [Exports](../modules.md) / Webhook

# Class: Webhook

## Table of contents

### Constructors

- [constructor](Webhook.md#constructor)

### Properties

- [avatar\_url](Webhook.md#avatar_url)
- [id](Webhook.md#id)
- [token](Webhook.md#token)
- [username](Webhook.md#username)

### Methods

- [execute](Webhook.md#execute)
- [send](Webhook.md#send)
- [setAvatar](Webhook.md#setavatar)
- [setUsername](Webhook.md#setusername)

## Constructors

### constructor

• **new Webhook**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WebhookOptions`](../interfaces/WebhookOptions.md) |

#### Defined in

[packages/libcord/src/structures/Webhook.ts:28](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L28)

## Properties

### avatar\_url

• `Optional` **avatar\_url**: `string`

#### Defined in

[packages/libcord/src/structures/Webhook.ts:27](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[packages/libcord/src/structures/Webhook.ts:23](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L23)

___

### token

• **token**: `string`

#### Defined in

[packages/libcord/src/structures/Webhook.ts:24](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L24)

___

### username

• `Optional` **username**: `string`

#### Defined in

[packages/libcord/src/structures/Webhook.ts:26](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L26)

## Methods

### execute

▸ **execute**(`options`): `Promise`<`undefined` \| [`Webhook`](Webhook.md)\>

Sends a message to a webhook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`executeWebhookOptions`](../interfaces/executeWebhookOptions.md) | the payload for the webhook |

#### Returns

`Promise`<`undefined` \| [`Webhook`](Webhook.md)\>

#### Defined in

[packages/libcord/src/structures/Webhook.ts:57](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L57)

___

### send

▸ **send**(`options`): `Promise`<`undefined` \| [`Webhook`](Webhook.md)\>

Sends a message to a webhook

**`Deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`executeWebhookOptions`](../interfaces/executeWebhookOptions.md) | the payload for the webhook |

#### Returns

`Promise`<`undefined` \| [`Webhook`](Webhook.md)\>

#### Defined in

[packages/libcord/src/structures/Webhook.ts:49](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L49)

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

[packages/libcord/src/structures/Webhook.ts:39](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L39)

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

[packages/libcord/src/structures/Webhook.ts:35](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Webhook.ts#L35)
