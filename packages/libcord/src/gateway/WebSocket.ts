import * as Ws from "ws";
import { EventEmitter } from "../utils/EventEmitter";
import { Client } from "../Client";
export class AWebSocket extends EventEmitter<{
  open: () => void;
  close: (code: number, reason: string) => void;
  message: (message: string) => void;
  ping: (body: Buffer) => void;
  pong: (body: Buffer) => void;
  error: (error: Error) => void;
}> {
  private _ws: Ws;
  private _client!: Client;
  constructor(client: Client) {
    super();
    this._ws = new Ws(client.gateway.gatewayURL as string);
    this._client = client;
    this._ws.on("open", () => this.emit("open"));
    this._ws.on("close", (code, reason) => this.emit("close", code, reason));
    this._ws.on("message", (data) => this.emit("message", data as string));
    this._ws.on("ping", (data) => this.emit("ping", data));
    this._ws.on("pong", (data) => this.emit("pong", data));
    this._ws.on("error", (error) => this.emit("error", error));
  }
  send(message: string) {
    this._ws.send(message);
  }
  close(code: number, reason?: string) {
    this._ws.close(code, reason);
  }
  reconnect() {
    this._ws = new Ws(this._client.gateway.gatewayURL as string);
  }
  get isOpen(): boolean {
    return this._ws.readyState === Ws.OPEN;
  }
  get isClosed(): boolean {
    return (
      this._ws.readyState === Ws.CLOSED || this._ws.readyState === Ws.CLOSING
    );
  }
}
