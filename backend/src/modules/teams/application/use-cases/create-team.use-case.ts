import { CreateTeamCommand } from "../commands/create-team.command";
import { TeamRepository } from "../../domain/repositories/team.repository";
import { Team } from "../../domain/entities/team.entity";

export class CreateTeamUseCase {

    constructor(private teamRepo: TeamRepository) { }

    async execute(cmd: CreateTeamCommand) {

        const team = new Team(
            crypto.randomUUID(),
            cmd.name,
            cmd.departmentId,
            "ACTIVE",
            cmd.capacity,
            [],
            [],
            new Date(),
            new Date()
        );

        return await this.teamRepo.create(team);
    }
}