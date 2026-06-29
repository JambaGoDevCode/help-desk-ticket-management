import { UserId } from "../value-objects/user-id.vo";

export class PasswordChangedEvent {
  constructor(
    public readonly userId: UserId,
    public readonly changedAt: Date
  ) {}
}