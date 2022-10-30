import type { Permission } from "../types/permissions";

export type Snowflake = `${string}`;
export function getDate(snowflake: Snowflake): number {
  return Math.floor(parseInt(snowflake, 10) / 4194304) + 1420070400000;
}
/**
 * Sleeps on the current promise for a specific amount of time.
 * @param duration The duration to sleep on.
 */
export function sleep(duration: number) {
  return new Promise<unknown>((resolve) => setTimeout(resolve, duration));
}
export function hasPermission(
  permissions: number,
  permission: Permission
): boolean {
  return (permissions & Permissions[permission]) !== 0;
}

export function addPermission(
  permissions: number,
  permission: Permission
): number {
  return permissions | Permissions[permission];
}

export function removePermission(
  permissions: number,
  permission: Permission
): number {
  return hasPermission(permissions, permission)
    ? permissions ^ Permissions[permission]
    : permissions;
}

export function getAllPermissions(permissions: number): Permission[] {
  const p: Permission[] = [];
  for (const perm of Object.keys(Permissions)) {
    if (hasPermission(permissions, perm as Permission))
      p.push(perm as Permission);
  }
  return p;
}
