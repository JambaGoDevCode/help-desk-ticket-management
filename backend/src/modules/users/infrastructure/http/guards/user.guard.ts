export class UserGuard {
  static canAccess(user: any, roles: string[]) {
    return roles.includes(user.role);
  }
}