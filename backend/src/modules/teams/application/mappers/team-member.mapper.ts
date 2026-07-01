import { TeamMember } from "../../domain/entities/team-member.entity";

export class TeamMemberMapper {

    static toDTO(member: TeamMember) {

        return {
            id: member.id,
            userId: member.userId,
            role: member.role,
            workload: member.workload,
            active: member.active
        };
    }
}