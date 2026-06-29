import { UserId } from "../value-objects/user-id.vo";

export class UserLoggedInEvent {
  constructor(
    public readonly userId: UserId,
    public readonly ip: string,
    public readonly userAgent: string,
    public readonly loggedAt: Date
  ) {}
}