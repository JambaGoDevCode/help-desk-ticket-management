import { Team } from "../entities/team.entity";

export class TeamCapacityService {

  isCapacityExceeded(team: Team): boolean {

    return team.members.length > team.capacity;
  }

  remainingCapacity(team: Team): number {

    return Math.max(
      0,
      team.capacity - team.members.length
    );
  }
}