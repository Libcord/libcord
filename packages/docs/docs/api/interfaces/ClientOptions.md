---
id: "ClientOptions"
title: "Interface: ClientOptions"
sidebar_label: "ClientOptions"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### disableIntents

• `Optional` **disableIntents**: (``"GUILDS"`` \| ``"GUILD_MEMBERS"`` \| ``"GUILD_BANS"`` \| ``"GUILD_EMOJIS"`` \| ``"GUILD_INTEGRATIONS"`` \| ``"GUILD_WEBHOOKS"`` \| ``"GUILD_INVITES"`` \| ``"GUILD_VOICE_STATES"`` \| ``"GUILD_PRESENCES"`` \| ``"GUILD_MESSAGES"`` \| ``"GUILD_MESSAGE_REACTIONS"`` \| ``"GUILD_MESSAGE_TYPING"`` \| ``"DIRECT_MESSAGES"`` \| ``"DIRECT_MESSAGE_REACTIONS"`` \| ``"DIRECT_MESSAGE_TYPING"``)[]

list of intents to disable [list-of-intents](https://discord.com/developers/docs/topics/gateway#list-of-intents)

#### Defined in

packages/libcord/src/Client.ts:56

___

### disablesEvents

• `Optional` **disablesEvents**: (``"ApplicationCommandPermissionsUpdate"`` \| ``"ChannelCreate"`` \| ``"ChannelDelete"`` \| ``"ChannelPinsUpdate"`` \| ``"ChannelUpdate"`` \| ``"GuildBanAdd"`` \| ``"GuildBanRemove"`` \| ``"GuildCreate"`` \| ``"GuildDelete"`` \| ``"GuildEmojisUpdate"`` \| ``"GuildIntegrationsUpdate"`` \| ``"GuildMemberAdd"`` \| ``"GuildMemberRemove"`` \| ``"GuildMembersChunk"`` \| ``"GuildMemberUpdate"`` \| ``"GuildRoleCreate"`` \| ``"GuildRoleDelete"`` \| ``"GuildRoleUpdate"`` \| ``"GuildStickersUpdate"`` \| ``"GuildUpdate"`` \| ``"IntegrationCreate"`` \| ``"IntegrationDelete"`` \| ``"IntegrationUpdate"`` \| ``"InteractionCreate"`` \| ``"InviteCreate"`` \| ``"InviteDelete"`` \| ``"MessageCreate"`` \| ``"MessageDelete"`` \| ``"MessageDeleteBulk"`` \| ``"MessageReactionAdd"`` \| ``"MessageReactionRemove"`` \| ``"MessageReactionRemoveAll"`` \| ``"MessageReactionRemoveEmoji"`` \| ``"MessageUpdate"`` \| ``"PresenceUpdate"`` \| ``"StageInstanceCreate"`` \| ``"StageInstanceDelete"`` \| ``"StageInstanceUpdate"`` \| ``"Ready"`` \| ``"Resumed"`` \| ``"ThreadCreate"`` \| ``"ThreadDelete"`` \| ``"ThreadListSync"`` \| ``"ThreadMembersUpdate"`` \| ``"ThreadMemberUpdate"`` \| ``"ThreadUpdate"`` \| ``"TypingStart"`` \| ``"UserUpdate"`` \| ``"VoiceServerUpdate"`` \| ``"VoiceStateUpdate"`` \| ``"WebhooksUpdate"`` \| ``"GuildScheduledEventCreate"`` \| ``"GuildScheduledEventUpdate"`` \| ``"GuildScheduledEventDelete"`` \| ``"GuildScheduledEventUserAdd"`` \| ``"GuildScheduledEventUserRemove"``)[]

list of events that the client don't must emit

#### Defined in

packages/libcord/src/Client.ts:52

___

### fetchAllMembers

• `Optional` **fetchAllMembers**: `boolean`

fetch all members and users

**`Default`**

false

#### Defined in

packages/libcord/src/Client.ts:62

___

### isABot

• `Optional` **isABot**: `boolean`

if the user is a bot

**`Default`**

true

#### Defined in

packages/libcord/src/Client.ts:68

___

### presence

• `Optional` **presence**: [`Presence`](Presence.md)

a object of presence

#### Defined in

packages/libcord/src/Client.ts:48

___

### slashCommandByDefault

• `Optional` **slashCommandByDefault**: `boolean`

if the bot fetch self all slash commands

**`Default`**

true

#### Defined in

packages/libcord/src/Client.ts:73

___

### token

• `Optional` **token**: `string`

The token for the bot is required

#### Defined in

packages/libcord/src/Client.ts:78
