import { Team } from "../entities/team.entity";
import { TeamMember } from "../entities/team-member.entity";

export class AutoAssignmentService {

  assign(team: Team): TeamMember | null {

    const availableMembers = team.members
      .filter(m => m.active);

    if (availableMembers.length === 0) {
      return null;
    }

    // LEAST WORKLOAD STRATEGY (default inteligente)
    return availableMembers.reduce((prev, current) => {
      return current.workload < prev.workload
        ? current
        : prev;
    });
  }
}