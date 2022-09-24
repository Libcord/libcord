[libcord](../README.md) / [Exports](../modules.md) / Collection

# Class: Collection<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`Collection`**

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Properties

- [[toStringTag]](Collection.md#[tostringtag])
- [limit](Collection.md#limit)
- [size](Collection.md#size)
- [[species]](Collection.md#[species])

### Methods

- [[iterator]](Collection.md#[iterator])
- [add](Collection.md#add)
- [array](Collection.md#array)
- [clear](Collection.md#clear)
- [delete](Collection.md#delete)
- [entries](Collection.md#entries)
- [filter](Collection.md#filter)
- [find](Collection.md#find)
- [forEach](Collection.md#foreach)
- [get](Collection.md#get)
- [has](Collection.md#has)
- [keys](Collection.md#keys)
- [set](Collection.md#set)
- [toJSON](Collection.md#tojson)
- [toObject](Collection.md#toobject)
- [values](Collection.md#values)

## Constructors

### constructor

• **new Collection**<`K`, `V`\>(`limit?`, `entries?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `0` |
| `entries?` | ``null`` \| [`K`, `V`][] | `undefined` |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[packages/libcord/src/utils/Collection.ts:9](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L9)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@24

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### limit

• **limit**: `number`

**`Param`**

limit of size of the collection, 0 = no limit

**`Param`**

#### Defined in

[packages/libcord/src/utils/Collection.ts:7](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L7)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@589

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator@86

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### add

▸ **add**(`obj`, `replace?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `replace` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

[packages/libcord/src/utils/Collection.ts:20](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L20)

___

### array

▸ **array**(): `any`

#### Returns

`any`

#### Defined in

[packages/libcord/src/utils/Collection.ts:82](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L82)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### filter

▸ **filter**(`cb`): [`Collection`](Collection.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`value`: `V`, `key`: `K`) => `boolean` |

#### Returns

[`Collection`](Collection.md)<`K`, `V`\>

#### Defined in

[packages/libcord/src/utils/Collection.ts:48](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L48)

___

### find

▸ **find**(`cb`): `undefined` \| `V`

find a value in the collection

**`Example`**

```ts
client.guilds.find(guild => guild.name === 'cool name');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`value`: `V`, `key`: `K`) => `boolean` | the callback for find the value |

#### Returns

`undefined` \| `V`

#### Defined in

[packages/libcord/src/utils/Collection.ts:42](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L42)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`any`

#### Overrides

Map.set

#### Defined in

[packages/libcord/src/utils/Collection.ts:14](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L14)

___

### toJSON

▸ **toJSON**(`space?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `space` | `number` | `1` |

#### Returns

`string`

#### Defined in

[packages/libcord/src/utils/Collection.ts:70](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L70)

___

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/libcord/src/utils/Collection.ts:56](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/utils/Collection.ts#L56)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
