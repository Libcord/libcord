[libcord](../README.md) / [Exports](../modules.md) / ClientOptions

# Interface: ClientOptions

## Table of contents

### Properties

- [disablesEvents](ClientOptions.md#disablesevents)
- [fetchAllMembers](ClientOptions.md#fetchallmembers)
- [intents](ClientOptions.md#intents)
- [isABot](ClientOptions.md#isabot)
- [presence](ClientOptions.md#presence)
- [slashCommandByDefault](ClientOptions.md#slashcommandbydefault)
- [token](ClientOptions.md#token)

## Properties

### disablesEvents

• `Optional` **disablesEvents**: (``"ApplicationCommandPermissionsUpdate"`` \| ``"ChannelCreate"`` \| ``"ChannelDelete"`` \| ``"ChannelPinsUpdate"`` \| ``"ChannelUpdate"`` \| ``"GuildBanAdd"`` \| ``"GuildBanRemove"`` \| ``"GuildCreate"`` \| ``"GuildDelete"`` \| ``"GuildEmojisUpdate"`` \| ``"GuildIntegrationsUpdate"`` \| ``"GuildMemberAdd"`` \| ``"GuildMemberRemove"`` \| ``"GuildMembersChunk"`` \| ``"GuildMemberUpdate"`` \| ``"GuildRoleCreate"`` \| ``"GuildRoleDelete"`` \| ``"GuildRoleUpdate"`` \| ``"GuildStickersUpdate"`` \| ``"GuildUpdate"`` \| ``"IntegrationCreate"`` \| ``"IntegrationDelete"`` \| ``"IntegrationUpdate"`` \| ``"InteractionCreate"`` \| ``"InviteCreate"`` \| ``"InviteDelete"`` \| ``"MessageCreate"`` \| ``"MessageDelete"`` \| ``"MessageDeleteBulk"`` \| ``"MessageReactionAdd"`` \| ``"MessageReactionRemove"`` \| ``"MessageReactionRemoveAll"`` \| ``"MessageReactionRemoveEmoji"`` \| ``"MessageUpdate"`` \| ``"PresenceUpdate"`` \| ``"StageInstanceCreate"`` \| ``"StageInstanceDelete"`` \| ``"StageInstanceUpdate"`` \| ``"Ready"`` \| ``"Resumed"`` \| ``"ThreadCreate"`` \| ``"ThreadDelete"`` \| ``"ThreadListSync"`` \| ``"ThreadMembersUpdate"`` \| ``"ThreadMemberUpdate"`` \| ``"ThreadUpdate"`` \| ``"TypingStart"`` \| ``"UserUpdate"`` \| ``"VoiceServerUpdate"`` \| ``"VoiceStateUpdate"`` \| ``"WebhooksUpdate"`` \| ``"GuildScheduledEventCreate"`` \| ``"GuildScheduledEventUpdate"`` \| ``"GuildScheduledEventDelete"`` \| ``"GuildScheduledEventUserAdd"`` \| ``"GuildScheduledEventUserRemove"``)[]

list of events that the client don't must emit

#### Defined in

[packages/libcord/src/Client.ts:56](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/Client.ts#L56)

___

### fetchAllMembers

• `Optional` **fetchAllMembers**: `boolean`

fetch all members and users

**`Default`**

false

#### Defined in

[packages/libcord/src/Client.ts:66](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/Client.ts#L66)

___

### intents

• **intents**: (``"GUILDS"`` \| ``"GUILD_MEMBERS"`` \| ``"GUILD_BANS"`` \| ``"GUILD_EMOJIS"`` \| ``"GUILD_INTEGRATIONS"`` \| ``"GUILD_WEBHOOKS"`` \| ``"GUILD_INVITES"`` \| ``"GUILD_VOICE_STATES"`` \| ``"GUILD_PRESENCES"`` \| ``"GUILD_MESSAGES"`` \| ``"GUILD_MESSAGE_REACTIONS"`` \| ``"GUILD_MESSAGE_TYPING"`` \| ``"DIRECT_MESSAGES"`` \| ``"DIRECT_MESSAGE_REACTIONS"`` \| ``"DIRECT_MESSAGE_TYPING"``)[] \| [`Intents`](../enums/Intents.md)[]

list of intents to disable [list-of-intents](https://discord.com/developers/docs/topics/gateway#list-of-intents)

#### Defined in

[packages/libcord/src/Client.ts:60](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/Client.ts#L60)

___

### isABot

• `Optional` **isABot**: `boolean`

if the user is a bot

**`Default`**

true

#### Defined in

[packages/libcord/src/Client.ts:72](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/Client.ts#L72)

___

### presence

• `Optional` **presence**: [`Presence`](Presence.md)

a object of presence

#### Defined in

[packages/libcord/src/Client.ts:52](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/Client.ts#L52)

___

### slashCommandByDefault

• `Optional` **slashCommandByDefault**: `boolean`

if the bot fetch self all slash commands

**`Default`**

true

#### Defined in

[packages/libcord/src/Client.ts:77](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/Client.ts#L77)

___

### token

• `Optional` **token**: `string`

The token for the bot is required

#### Defined in

[packages/libcord/src/Client.ts:82](https://github.com/Libcord/libcord/blob/f9964b8/packages/libcord/src/Client.ts#L82)
