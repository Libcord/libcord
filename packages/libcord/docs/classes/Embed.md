[libcord](../README.md) / [Exports](../modules.md) / Embed

# Class: Embed

## Table of contents

### Constructors

- [constructor](Embed.md#constructor)

### Properties

- [author](Embed.md#author)
- [color](Embed.md#color)
- [description](Embed.md#description)
- [fields](Embed.md#fields)
- [footer](Embed.md#footer)
- [image](Embed.md#image)
- [thumbnail](Embed.md#thumbnail)
- [timestamp](Embed.md#timestamp)
- [title](Embed.md#title)
- [url](Embed.md#url)

### Methods

- [addField](Embed.md#addfield)
- [getJSON](Embed.md#getjson)
- [setAuthor](Embed.md#setauthor)
- [setColor](Embed.md#setcolor)
- [setDescription](Embed.md#setdescription)
- [setFooter](Embed.md#setfooter)
- [setImage](Embed.md#setimage)
- [setThumbnail](Embed.md#setthumbnail)
- [setTimestamp](Embed.md#settimestamp)
- [setTitle](Embed.md#settitle)
- [setURL](Embed.md#seturl)

## Constructors

### constructor

• **new Embed**()

#### Defined in

[packages/libcord/src/structures/Embed.ts:58](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L58)

## Properties

### author

• `Optional` **author**: [`AuthorOptions`](../interfaces/AuthorOptions.md)

The author

#### Defined in

[packages/libcord/src/structures/Embed.ts:51](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L51)

___

### color

• `Optional` **color**: `string` \| `number`

The color

#### Defined in

[packages/libcord/src/structures/Embed.ts:31](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L31)

___

### description

• `Optional` **description**: `string`

The description

#### Defined in

[packages/libcord/src/structures/Embed.ts:16](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L16)

___

### fields

• `Optional` **fields**: `Object`[]

Embed fields

#### Defined in

[packages/libcord/src/structures/Embed.ts:56](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L56)

___

### footer

• `Optional` **footer**: [`FooterOptions`](../interfaces/FooterOptions.md)

The footer

#### Defined in

[packages/libcord/src/structures/Embed.ts:36](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L36)

___

### image

• `Optional` **image**: [`ImageOptions`](../interfaces/ImageOptions.md)

The image

#### Defined in

[packages/libcord/src/structures/Embed.ts:41](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L41)

___

### thumbnail

• `Optional` **thumbnail**: [`ThumbnailOptions`](../interfaces/ThumbnailOptions.md)

The thumbnail

#### Defined in

[packages/libcord/src/structures/Embed.ts:46](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L46)

___

### timestamp

• `Optional` **timestamp**: `Date`

The timestamp

#### Defined in

[packages/libcord/src/structures/Embed.ts:26](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L26)

___

### title

• `Optional` **title**: `string`

The title

#### Defined in

[packages/libcord/src/structures/Embed.ts:11](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L11)

___

### url

• `Optional` **url**: `string`

The URL

#### Defined in

[packages/libcord/src/structures/Embed.ts:21](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L21)

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

[packages/libcord/src/structures/Embed.ts:180](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L180)

___

### getJSON

▸ **getJSON**(): `object`

#### Returns

`object`

#### Defined in

[packages/libcord/src/structures/Embed.ts:237](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L237)

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

[packages/libcord/src/structures/Embed.ts:75](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L75)

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

[packages/libcord/src/structures/Embed.ts:156](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L156)

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

[packages/libcord/src/structures/Embed.ts:167](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L167)

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

[packages/libcord/src/structures/Embed.ts:201](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L201)

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

[packages/libcord/src/structures/Embed.ts:144](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L144)

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

[packages/libcord/src/structures/Embed.ts:116](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L116)

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

[packages/libcord/src/structures/Embed.ts:131](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L131)

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

[packages/libcord/src/structures/Embed.ts:94](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L94)

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

[packages/libcord/src/structures/Embed.ts:105](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Embed.ts#L105)
