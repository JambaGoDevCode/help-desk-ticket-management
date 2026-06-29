export class UserRole {
  private constructor(public readonly value: string) {}

  static admin() {
    return new UserRole("ADMIN");
  }

  static agent() {
    return new UserRole("AGENT");
  }

  static customer() {
    return new UserRole("CUSTOMER");
  }

  static create(value: string) {
    const allowed = ["ADMIN", "AGENT", "CUSTOMER"];
    if (!allowed.includes(value)) {
      throw new Error("Invalid user role");
    }
    return new UserRole(value);
  }
}