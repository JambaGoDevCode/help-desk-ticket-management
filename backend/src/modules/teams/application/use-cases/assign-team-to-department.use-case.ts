import { TeamRepository } from "../../domain/repositories/team.repository";

export class AssignTeamToDepartmentUseCase {

    constructor(private teamRepo: TeamRepository) { }

    async execute(teamId: string, departmentId: string) {

        const team = await this.teamRepo.findById(teamId);

        if (!team) throw new Error("Team not found");

        team.departmentId = departmentId;
        team.updatedAt = new Date();

        return await this.teamRepo.update(team);
    }
}