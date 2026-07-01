import { TeamRepository } from "../../domain/repositories/team.repository";
import { TeamMember } from "../../domain/entities/team-member.entity";

export class AddMemberUseCase {

    constructor(private teamRepo: TeamRepository) { }

    async execute(teamId: string, userId: string, role: string) {

        const team = await this.teamRepo.findById(teamId);

        if (!team) throw new Error("Team not found");

        const member = new TeamMember(
            crypto.randomUUID(),
            userId,
            teamId,
            role as any,
            0,
            true
        );

        team.addMember(member);

        return await this.teamRepo.update(team);
    }
}