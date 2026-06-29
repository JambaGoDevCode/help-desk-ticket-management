import { UserId } from "../value-objects/user-id.vo";

export class UserDeactivatedEvent {
  constructor(
    public readonly userId: UserId,
    public readonly reason?: string
  ) {}
}