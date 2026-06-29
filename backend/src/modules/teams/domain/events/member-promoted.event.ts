import { TeamRole } from "../value-objects/team-role.vo";

export class MemberPromotedEvent {
  constructor(
    public readonly teamId: string,
    public readonly userId: string,
    public readonly newRole: TeamRole
  ) {}
}