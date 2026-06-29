import { UserId } from "../value-objects/user-id.vo";

export class UserUpdatedEvent {
  constructor(
    public readonly userId: UserId,
    public readonly updatedAt: Date
  ) {}
}