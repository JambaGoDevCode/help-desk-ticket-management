import { TeamRepository } from "../../domain/repositories/team.repository";

export class CalculateTeamLoadUseCase {

    constructor(private teamRepo: TeamRepository) { }

    async execute(teamId: string) {

        const team = await this.teamRepo.findById(teamId);

        if (!team) throw new Error("Team not found");

        const total = team.members.reduce(
            (sum, m) => sum + m.workload,
            0
        );

        return {
            teamId,
            totalWorkload: total,
            average: total / team.members.length || 0,
            capacity: team.capacity,
            overloaded: team.members.length > team.capacity
        };
    }
}