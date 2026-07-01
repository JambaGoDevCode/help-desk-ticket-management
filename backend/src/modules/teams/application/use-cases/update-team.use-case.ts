import { TeamRepository } from "../../domain/repositories/team.repository";
import { UpdateTeamDTO } from "../dto/update-team.dto";

export class UpdateTeamUseCase {

    constructor(private teamRepo: TeamRepository) { }

    async execute(teamId: string, dto: UpdateTeamDTO) {

        const team = await this.teamRepo.findById(teamId);

        if (!team) throw new Error("Team not found");

        if (dto.name) team.name = dto.name;
        if (dto.capacity) team.capacity = dto.capacity;

        team.updatedAt = new Date();

        return await this.teamRepo.update(team);
    }
}