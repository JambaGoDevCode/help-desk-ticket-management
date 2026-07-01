import { Team } from "../../domain/entities/team.entity";

export class TeamMapper {

    static toDTO(team: Team) {

        return {
            id: team.id,
            name: team.name,
            departmentId: team.departmentId,
            capacity: team.capacity,
            members: team.members,
            queues: team.queues,
            createdAt: team.createdAt,
            updatedAt: team.updatedAt
        };
    }
}