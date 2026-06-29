import { UserId } from "../value-objects/user-id.vo";

export class UserSession {
  constructor(
    public readonly id: string,
    public readonly userId: UserId,
    public ip: string,
    public userAgent: string,
    public createdAt: Date,
    public expiresAt: Date,
    public revoked: boolean = false
  ) {}

  isActive(): boolean {
    return !this.revoked && new Date() < this.expiresAt;
  }

  revoke() {
    this.revoked = true;
  }
}