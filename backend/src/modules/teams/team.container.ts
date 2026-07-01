import { teamDependencies } from "./team.dependencies";

/*
|--------------------------------------------------------------------------
| Use Cases
|--------------------------------------------------------------------------
*/

import { CreateTeamUseCase } from "./application/use-cases/create-team.use-case";
import { UpdateTeamUseCase } from "./application/use-cases/update-team.use-case";
import { AddMemberUseCase } from "./application/use-cases/add-member.use-case";
import { RemoveMemberUseCase } from "./application/use-cases/remove-member.use-case";
import { AssignTeamToDepartmentUseCase } from "./application/use-cases/assign-team-to-department.use-case";
import { CreateQueueUseCase } from "./application/use-cases/create-queue.use-case";
import { AssignTicketToTeamUseCase } from "./application/use-cases/assign-ticket-to-team.use-case";
import { CalculateTeamLoadUseCase } from "./application/use-cases/calculate-team-load.use-case";

const { repositories, services } = teamDependencies;

export const teamUseCases = {

    createTeam: new CreateTeamUseCase(
        repositories.teamRepository
    ),

    updateTeam: new UpdateTeamUseCase(
        repositories.teamRepository
    ),

    addMember: new AddMemberUseCase(
        repositories.teamRepository
    ),

    removeMember: new RemoveMemberUseCase(
        repositories.teamRepository
    ),

    assignTeamToDepartment: new AssignTeamToDepartmentUseCase(
        repositories.teamRepository
    ),

    createQueue: new CreateQueueUseCase(
        repositories.queueRepository
    ),

    assignTicketToTeam: new AssignTicketToTeamUseCase(
        repositories.teamRepository,
        services.autoAssignment
    ),

    calculateTeamLoad: new CalculateTeamLoadUseCase(
        repositories.teamRepository
    )
};