import { TeamRole } from "../value-objects/team-role.vo";

export class TeamMember {
  constructor(
    public readonly id: string,
    public userId: string,
    public teamId: string,
    public role: TeamRole,
    public workload: number,
    public active: boolean
  ) {}

  promote(role: TeamRole) {
    this.role = role;
  }

  increaseWorkload(value: number) {
    this.workload += value;
  }

  decreaseWorkload(value: number) {
    this.workload = Math.max(0, this.workload - value);
  }
}