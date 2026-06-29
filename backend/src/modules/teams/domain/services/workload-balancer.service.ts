import { Team } from "../entities/team.entity";

export class WorkloadBalancerService {

  calculateAverageLoad(team: Team): number {

    if (team.members.length === 0) return 0;

    const total = team.members
      .reduce((sum, m) => sum + m.workload, 0);

    return total / team.members.length;
  }

  isOverloaded(team: Team): boolean {

    const avg = this.calculateAverageLoad(team);

    return avg > team.capacity;
  }
}