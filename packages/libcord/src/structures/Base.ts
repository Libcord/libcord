import type { Client } from "../Client";

/**
 * @category Structures
 */
export abstract class Base {
  public readonly client: Client;

  protected constructor(client: Client) {
    this.client = client;
  }
  static getCreatedAt(id: string): Date {
    return new Date(Base.getDiscordEpoch(id) + 1420070400000);
  }

  static getDiscordEpoch(id: string): number {
    return Number(BigInt(id) / 4194304n);
  }
}
