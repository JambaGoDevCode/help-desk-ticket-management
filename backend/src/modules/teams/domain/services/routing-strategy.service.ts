import { Team } from "../entities/team.entity";
import { Queue } from "../entities/queue.entity";
import { TeamMember } from "../entities/team-member.entity";

export class RoutingStrategyService {

  routeByQueue(team: Team, queue: Queue): TeamMember | null {

    const activeMembers = team.members
      .filter(m => m.active);

    if (activeMembers.length === 0) return null;

    // PRIORITY QUEUE → least workload
    if (queue.type === "PRIORITY") {

      return activeMembers.reduce((prev, curr) =>
        curr.workload < prev.workload ? curr : prev
      );
    }

    // DEFAULT → round robin
    const index =
      Math.floor(Math.random() * activeMembers.length);

    return activeMembers[index];
  }
}