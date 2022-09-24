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

[packages/libcord/src/structures/Message.ts:180](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L180)

___

### content

• `Optional` **content**: `string` \| [`Embed`](../classes/Embed.md)

#### Defined in

[packages/libcord/src/structures/Message.ts:178](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L178)

___

### embeds

• `Optional` **embeds**: `any`[] \| [`Embed`](../classes/Embed.md)[]

#### Defined in

[packages/libcord/src/structures/Message.ts:179](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L179)

___

### files

• `Optional` **files**: [`FileOption`](FileOption.md)[]

#### Defined in

[packages/libcord/src/structures/Message.ts:181](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L181)

___

### mentions

• `Optional` **mentions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message?` | [`MessageMention`](MessageMention.md) |

#### Defined in

[packages/libcord/src/structures/Message.ts:182](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/structures/Message.ts#L182)
