export type Snowflake = string;

export function getDate(snowflake: Snowflake): number {
  return (
    Math.floor(parseInt(snowflake as unknown as string, 10) / 4194304) +
    1420070400000
  );
}
