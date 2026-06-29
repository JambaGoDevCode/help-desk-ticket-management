import { TeamMember } from "../entities/team-member.entity";

export class AssignmentPriorityService {

  getPriority(member: TeamMember): number {

    // LEAD = prioridade maior
    switch (member.role) {

      case "MANAGER":
        return 3;

      case "LEAD":
        return 2;

      case "MEMBER":
        return 1;

      default:
        return 0;
    }
  }

  sortByPriority(members: TeamMember[]): TeamMember[] {

    return [...members].sort(
      (a, b) =>
        this.getPriority(b) - this.getPriority(a)
    );
  }
}