---
id: "SelectMenu"
title: "Class: SelectMenu"
sidebar_label: "SelectMenu"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new SelectMenu**()

## Properties

### custom\_id

• **custom\_id**: `string` = `"SelectMenu"`

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:23

___

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:26

___

### options

• **options**: `APISelectMenuOption`[] = `[]`

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:24

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:25

___

### type

• **type**: `ComponentType` = `ComponentType.SelectMenu`

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:22

## Methods

### addOption

▸ **addOption**(`option`): [`SelectMenu`](SelectMenu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`SelectMenuOption`](../interfaces/SelectMenuOption.md) |

#### Returns

[`SelectMenu`](SelectMenu.md)

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:40

___

### setCustomID

▸ **setCustomID**(`id`): [`SelectMenu`](SelectMenu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`SelectMenu`](SelectMenu.md)

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:36

___

### setDisabled

▸ **setDisabled**(`disabled?`): [`SelectMenu`](SelectMenu.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `disabled` | `boolean` | `true` |

#### Returns

[`SelectMenu`](SelectMenu.md)

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:28

___

### setPlaceholder

▸ **setPlaceholder**(`holder`): [`SelectMenu`](SelectMenu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | `string` |

#### Returns

[`SelectMenu`](SelectMenu.md)

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:32

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

packages/libcord/src/structures/components/SelectMenu.ts:54
