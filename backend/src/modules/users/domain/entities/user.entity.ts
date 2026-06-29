import { UserId } from "../value-objects/user-id.vo";
import { Email } from "../value-objects/email.vo";
import { UserRole } from "../value-objects/user-role.vo";
import { UserStatus } from "../value-objects/user-status.vo";

export class User {
  constructor(
    public readonly id: UserId,
    public email: Email,
    public role: UserRole,
    public status: UserStatus,
    public passwordHash: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  activate() {
    this.status = UserStatus.active();
    this.updatedAt = new Date();
  }

  deactivate() {
    this.status = UserStatus.inactive();
    this.updatedAt = new Date();
  }

  changeRole(role: UserRole) {
    this.role = role;
    this.updatedAt = new Date();
  }
}