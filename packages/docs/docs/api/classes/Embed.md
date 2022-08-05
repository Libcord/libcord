---
id: "Embed"
title: "Class: Embed"
sidebar_label: "Embed"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Embed**()

#### Defined in

packages/libcord/src/structures/Embed.ts:58

## Properties

### author

• `Optional` **author**: [`AuthorOptions`](../interfaces/AuthorOptions.md)

The author

#### Defined in

packages/libcord/src/structures/Embed.ts:51

___

### color

• `Optional` **color**: `string` \| `number`

The color

#### Defined in

packages/libcord/src/structures/Embed.ts:31

___

### description

• `Optional` **description**: `string`

The description

#### Defined in

packages/libcord/src/structures/Embed.ts:16

___

### fields

• `Optional` **fields**: `Object`[]

Embed fields

#### Defined in

packages/libcord/src/structures/Embed.ts:56

___

### footer

• `Optional` **footer**: [`FooterOptions`](../interfaces/FooterOptions.md)

The footer

#### Defined in

packages/libcord/src/structures/Embed.ts:36

___

### image

• `Optional` **image**: [`ImageOptions`](../interfaces/ImageOptions.md)

The image

#### Defined in

packages/libcord/src/structures/Embed.ts:41

___

### thumbnail

• `Optional` **thumbnail**: [`ThumbnailOptions`](../interfaces/ThumbnailOptions.md)

The thumbnail

#### Defined in

packages/libcord/src/structures/Embed.ts:46

___

### timestamp

• `Optional` **timestamp**: `Date`

The timestamp

#### Defined in

packages/libcord/src/structures/Embed.ts:26

___

### title

• `Optional` **title**: `string`

The title

#### Defined in

packages/libcord/src/structures/Embed.ts:11

___

### url

• `Optional` **url**: `string`

The URL

#### Defined in

packages/libcord/src/structures/Embed.ts:21

## Methods

### addField

▸ **addField**(`name`, `value`, `inline?`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name for the field to display |
| `value` | `string` | The value for the field |
| `inline?` | `boolean` | Wether to inline the field or not |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:180

___

### formatColor

▸ `Private` **formatColor**(`color`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `any` |

#### Returns

`number`

#### Defined in

packages/libcord/src/structures/Embed.ts:232

___

### getJSON

▸ **getJSON**(): `object`

#### Returns

`object`

#### Defined in

packages/libcord/src/structures/Embed.ts:237

___

### setAuthor

▸ **setAuthor**(`author`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `author` | [`AuthorOptions`](../interfaces/AuthorOptions.md) | The options for the other must be an object |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:75

___

### setColor

▸ **setColor**(`color`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | The hex color for the embed |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:156

___

### setDescription

▸ **setDescription**(`description`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The description for the embed |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:167

___

### setFooter

▸ **setFooter**(`footer`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `footer` | `any` | The footer for the embed |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:201

___

### setImage

▸ **setImage**(`image`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | `undefined` \| `string` | The url of the image to display on the embed |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:144

___

### setThumbnail

▸ **setThumbnail**(`url`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `undefined` \| `string` | The thumbnail url |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:116

___

### setTimestamp

▸ **setTimestamp**(`date?`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `Date` | The date for the timestamp (Not required) |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:131

___

### setTitle

▸ **setTitle**(`title`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | the title for the embed |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:94

___

### setURL

▸ **setURL**(`url`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The url for the embed |

#### Returns

[`Embed`](Embed.md)

The embed

#### Defined in

packages/libcord/src/structures/Embed.ts:105

___

### validateURL

▸ `Private` **validateURL**(`url`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`boolean`

#### Defined in

packages/libcord/src/structures/Embed.ts:220
