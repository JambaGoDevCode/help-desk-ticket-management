import { TeamRepository } from "../../domain/repositories/team.repository";
import { AutoAssignmentService } from "../../domain/services/auto-assignment.service";

export class AssignTicketToTeamUseCase {

    constructor(
        private teamRepo: TeamRepository,
        private autoAssign: AutoAssignmentService
    ) { }

    async execute(teamId: string) {

        const team = await this.teamRepo.findById(teamId);

        if (!team) throw new Error("Team not found");

        const member =
            this.autoAssign.assign(team);

        if (!member) {
            throw new Error("No available members");
        }

        member.increaseWorkload(1);

        await this.teamRepo.update(team);

        return member;
    }
}