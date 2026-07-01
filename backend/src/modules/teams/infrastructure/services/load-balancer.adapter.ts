import { Team } from "../../domain/entities/team.entity";

export class LoadBalancerAdapter {

    calculateLoad(team: Team) {

        const total = team.members
            .reduce((sum, m) => sum + m.workload, 0);

        return {
            total,
            average: total / (team.members.length || 1),
            capacity: team.capacity,
            overloaded: team.members.length > team.capacity
        };
    }
}