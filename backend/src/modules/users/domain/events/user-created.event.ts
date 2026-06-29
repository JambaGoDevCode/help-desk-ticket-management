import { UserId } from "../value-objects/user-id.vo";

export class UserCreatedEvent {
  constructor(
    public readonly userId: UserId,
    public readonly email: string,
    public readonly createdAt: Date
  ) {}
}