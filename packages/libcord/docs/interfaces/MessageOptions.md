[libcord](../README.md) / [Exports](../modules.md) / MessageOptions

# Interface: MessageOptions

## Table of contents

### Properties

- [components](MessageOptions.md#components)
- [content](MessageOptions.md#content)
- [embeds](MessageOptions.md#embeds)
- [files](MessageOptions.md#files)
- [mentions](MessageOptions.md#mentions)

## Properties

### components

• `Optional` **components**: [`ComponentsType`](../modules.md#componentstype)[]

#### Defined in

[packages/libcord/src/structures/Message.ts:174](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/structures/Message.ts#L174)

___

### content

• `Optional` **content**: `string` \| [`Embed`](../classes/Embed.md)

#### Defined in

[packages/libcord/src/structures/Message.ts:172](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/structures/Message.ts#L172)

___

### embeds

• `Optional` **embeds**: `any`[] \| [`Embed`](../classes/Embed.md)[]

#### Defined in

[packages/libcord/src/structures/Message.ts:173](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/structures/Message.ts#L173)

___

### files

• `Optional` **files**: [`FileOption`](FileOption.md)[]

#### Defined in

[packages/libcord/src/structures/Message.ts:175](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/structures/Message.ts#L175)

___

### mentions

• `Optional` **mentions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message?` | [`MessageMention`](MessageMention.md) |

#### Defined in

[packages/libcord/src/structures/Message.ts:176](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/structures/Message.ts#L176)
