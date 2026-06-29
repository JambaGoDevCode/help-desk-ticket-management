import { UserId } from "../value-objects/user-id.vo";

export class UserLoggedOutEvent {
  constructor(
    public readonly userId: UserId,
    public readonly loggedOutAt: Date
  ) {}
}