import { Team } from "../../domain/entities/team.entity";

export class AssignmentEngineService {

    assign(team: Team) {

        const available = team.members
            .filter(m => m.active);

        if (!available.length) return null;

        return available.reduce((prev, curr) =>
            curr.workload < prev.workload ? curr : prev
        );
    }
}