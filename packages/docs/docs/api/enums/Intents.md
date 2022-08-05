---
id: "Intents"
title: "Enumeration: Intents"
sidebar_label: "Intents"
sidebar_position: 0
custom_edit_url: null
---

list of intents

**`See`**

https://discord.com/developers/docs/topics/gateway#list-of-intents

## Enumeration Members

### DIRECT\_MESSAGES

• **DIRECT\_MESSAGES** = ``4096``

include events :
- MESSAGE_CREATE
- MESSAGE_UPDATE
- MESSAGE_DELETE
- CHANNEL_PINS_UPDATE

#### Defined in

packages/libcord/src/Constants.ts:138

___

### DIRECT\_MESSAGE\_REACTIONS

• **DIRECT\_MESSAGE\_REACTIONS** = ``8192``

include events :
- MESSAGE_REACTION_ADD
- MESSAGE_REACTION_REMOVE
- MESSAGE_REACTION_REMOVE_ALL
- MESSAGE_REACTION_REMOVE_EMOJI

#### Defined in

packages/libcord/src/Constants.ts:146

___

### DIRECT\_MESSAGE\_TYPING

• **DIRECT\_MESSAGE\_TYPING** = ``16384``

include event :
- TYPING_START

#### Defined in

packages/libcord/src/Constants.ts:151

___

### GUILDS

• **GUILDS** = ``1``

include events :
- GUILD_CREATE
- GUILD_UPDATE
- GUILD_DELETE
- GUILD_ROLE_CREATE
- GUILD_ROLE_UPDATE
- GUILD_ROLE_DELETE
- CHANNEL_CREATE
- CHANNEL_UPDATE
- CHANNEL_DELETE
- CHANNEL_PINS_UPDATE
- THREAD_CREATE
- THREAD_UPDATE
- THREAD_DELETE
- THREAD_LIST_SYNC
- THREAD_MEMBER_UPDATE
- THREAD_MEMBERS_UPDATE

#### Defined in

packages/libcord/src/Constants.ts:61

___

### GUILD\_BANS

• **GUILD\_BANS** = ``4``

include events :
- GUILD_BAN_ADD
- GUILD_BAN_REMOVE

#### Defined in

packages/libcord/src/Constants.ts:75

___

### GUILD\_EMOJIS

• **GUILD\_EMOJIS** = ``8``

include event :
GUILD_EMOJIS_UPDATE

#### Defined in

packages/libcord/src/Constants.ts:80

___

### GUILD\_INTEGRATIONS

• **GUILD\_INTEGRATIONS** = ``16``

include events :
 - GUILD_INTEGRATIONS_UPDATE
- INTEGRATION_CREATE
- INTEGRATION_UPDATE
- INTEGRATION_DELETE

#### Defined in

packages/libcord/src/Constants.ts:88

___

### GUILD\_INVITES

• **GUILD\_INVITES** = ``64``

include events
- INVITE_CREATE
- INVITE_DELETE

#### Defined in

packages/libcord/src/Constants.ts:99

___

### GUILD\_MEMBERS

• **GUILD\_MEMBERS** = ``2``

include events :
- GUILD_MEMBER_ADD
- GUILD_MEMBER_UPDATE
- GUILD_MEMBER_REMOVE
- THREAD_MEMBERS_UPDATE

#### Defined in

packages/libcord/src/Constants.ts:69

___

### GUILD\_MESSAGES

• **GUILD\_MESSAGES** = ``512``

include events
- MESSAGE_CREATE
- MESSAGE_UPDATE
- MESSAGE_DELETE
- MESSAGE_DELETE_BULK

#### Defined in

packages/libcord/src/Constants.ts:117

___

### GUILD\_MESSAGE\_REACTIONS

• **GUILD\_MESSAGE\_REACTIONS** = ``1024``

include events :
- MESSAGE_REACTION_ADD
- MESSAGE_REACTION_REMOVE
- MESSAGE_REACTION_REMOVE_ALL
- MESSAGE_REACTION_REMOVE_EMOJI

#### Defined in

packages/libcord/src/Constants.ts:125

___

### GUILD\_MESSAGE\_TYPING

• **GUILD\_MESSAGE\_TYPING** = ``2048``

include event :
- TYPING_START

#### Defined in

packages/libcord/src/Constants.ts:130

___

### GUILD\_PRESENCES

• **GUILD\_PRESENCES** = ``256``

include event :
- PRESENCE_UPDATE

#### Defined in

packages/libcord/src/Constants.ts:109

___

### GUILD\_VOICE\_STATES

• **GUILD\_VOICE\_STATES** = ``128``

include event :
- VOICE_STATE_UPDATE

#### Defined in

packages/libcord/src/Constants.ts:104

___

### GUILD\_WEBHOOKS

• **GUILD\_WEBHOOKS** = ``32``

include event :
- WEBHOOKS_UPDATE

#### Defined in

packages/libcord/src/Constants.ts:93
