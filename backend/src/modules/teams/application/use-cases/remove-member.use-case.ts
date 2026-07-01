import { TeamRepository } from "../../domain/repositories/team.repository";

export class RemoveMemberUseCase {

    constructor(private teamRepo: TeamRepository) { }

    async execute(teamId: string, userId: string) {

        const team = await this.teamRepo.findById(teamId);

        if (!team) throw new Error("Team not found");

        team.removeMember(userId);

        return await this.teamRepo.update(team);
    }
}