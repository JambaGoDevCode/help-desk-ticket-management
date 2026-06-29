import { UserId } from "../value-objects/user-id.vo";
import { UserRole } from "../value-objects/user-role.vo";

export class UserRoleChangedEvent {
  constructor(
    public readonly userId: UserId,
    public readonly oldRole: UserRole,
    public readonly newRole: UserRole
  ) {}
}