[libcord](../README.md) / [Exports](../modules.md) / Gateway

# Class: Gateway

## Table of contents

### Constructors

- [constructor](Gateway.md#constructor)

### Properties

- [actions](Gateway.md#actions)
- [client](Gateway.md#client)
- [emitter](Gateway.md#emitter)
- [gatewayURL](Gateway.md#gatewayurl)
- [heartbeatInterval](Gateway.md#heartbeatinterval)
- [lastHeartbeatAck](Gateway.md#lastheartbeatack)
- [lastHeartbeatReceive](Gateway.md#lastheartbeatreceive)
- [lastHeartbeatSend](Gateway.md#lastheartbeatsend)
- [lastSequence](Gateway.md#lastsequence)
- [latency](Gateway.md#latency)
- [status](Gateway.md#status)
- [ws](Gateway.md#ws)

### Methods

- [connect](Gateway.md#connect)
- [createGuild](Gateway.md#createguild)
- [handleEvent](Gateway.md#handleevent)
- [heartbeat](Gateway.md#heartbeat)
- [identify](Gateway.md#identify)
- [initWS](Gateway.md#initws)
- [loadActions](Gateway.md#loadactions)
- [onWsMessage](Gateway.md#onwsmessage)
- [resolvePresence](Gateway.md#resolvepresence)
- [sendWS](Gateway.md#sendws)
- [updatePresence](Gateway.md#updatepresence)

## Constructors

### constructor

• **new Gateway**(`client`, `emitter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `emitter` | `any` |

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:68](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L68)

## Properties

### actions

• **actions**: `Actions` = `{}`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:56](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L56)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:55](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L55)

___

### emitter

• **emitter**: `EventEmitter`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:63](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L63)

___

### gatewayURL

• `Optional` **gatewayURL**: `string`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:54](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L54)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `number`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:57](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L57)

___

### lastHeartbeatAck

• **lastHeartbeatAck**: `boolean` = `true`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:62](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L62)

___

### lastHeartbeatReceive

• **lastHeartbeatReceive**: `number` = `Infinity`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:61](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L61)

___

### lastHeartbeatSend

• **lastHeartbeatSend**: `number` = `Infinity`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:60](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L60)

___

### lastSequence

• **lastSequence**: `number` = `0`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:58](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L58)

___

### latency

• **latency**: `number` = `Infinity`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:59](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L59)

___

### status

• **status**: [`GatewayStatus`](../modules.md#gatewaystatus) = `"disconnected"`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:53](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L53)

___

### ws

• `Optional` **ws**: `AWebSocket`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:52](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L52)

## Methods

### connect

▸ **connect**(`token`, `url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:151](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L151)

___

### createGuild

▸ **createGuild**(`guild`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `APIUnavailableGuild` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:314](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L314)

___

### handleEvent

▸ **handleEvent**(`msg`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `GatewayDispatchPayload` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:206](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L206)

___

### heartbeat

▸ **heartbeat**(): `void`

#### Returns

`void`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:142](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L142)

___

### identify

▸ **identify**(): `void`

#### Returns

`void`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:121](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L121)

___

### initWS

▸ **initWS**(): `void`

#### Returns

`void`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:164](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L164)

___

### loadActions

▸ **loadActions**(): `void`

#### Returns

`void`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:75](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L75)

___

### onWsMessage

▸ **onWsMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:173](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L173)

___

### resolvePresence

▸ **resolvePresence**(`presence`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `presence` | [`Presence`](../interfaces/Presence.md) |

#### Returns

`any`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:283](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L283)

___

### sendWS

▸ **sendWS**(`code`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `GatewayOpcodes` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:272](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L272)

___

### updatePresence

▸ **updatePresence**(`presence`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `presence` | [`Presence`](../interfaces/Presence.md) |

#### Returns

`void`

#### Defined in

[packages/libcord/src/gateway/Gateway.ts:277](https://github.com/Libcord/libcord/blob/d0e0b8c/packages/libcord/src/gateway/Gateway.ts#L277)
