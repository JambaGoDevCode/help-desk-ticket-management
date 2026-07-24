import { Router } from "express";

import { initializeTeamEvents } from "./team.events";
import { teamUseCases } from "./team.container";

import { TeamController } from "./presentation/controllers/team.controller";
import { QueueController } from "./presentation/controllers/queue.controller";
import { DepartmentController } from "./presentation/controllers/department.controller";

/*
|--------------------------------------------------------------------------
| Events
|--------------------------------------------------------------------------
*/

initializeTeamEvents();

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
*/

const router = Router();

/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/

const teamController = new TeamController(
    teamUseCases.createTeam,
    teamUseCases.updateTeam,
    teamUseCases.listTeams,
    teamUseCases.addMember,
    teamUseCases.removeMember,
    teamUseCases.assignTeamToDepartment,
    teamUseCases.calculateTeamLoad
);

const queueController = new QueueController(
    teamUseCases.createQueue,
    teamUseCases.assignTicketToTeam
);

const departmentController = new DepartmentController(
    teamUseCases.createDepartment,
    teamUseCases.assignTeamToDepartment
);

/*
|--------------------------------------------------------------------------
| Team Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/",
    teamController.list.bind(teamController)
);

router.post(
    "/",
    teamController.create.bind(teamController)
);

router.put(
    "/:id",
    teamController.update.bind(teamController)
);

router.get(
    "/:id/load",
    teamController.load.bind(teamController)
);

router.post(
    "/:id/members",
    teamController.addMember.bind(teamController)
);

router.delete(
    "/:id/members/:userId",
    teamController.removeMember.bind(teamController)
);

/*
|--------------------------------------------------------------------------
| Queue Routes
|--------------------------------------------------------------------------
*/

router.post(
    "/queues",
    queueController.create.bind(queueController)
);

router.post(
    "/queues/:id/assign-ticket",
    queueController.assignTicket.bind(queueController)
);

/*
|--------------------------------------------------------------------------
| Department Routes
|--------------------------------------------------------------------------
*/

router.post(
    "/departments",
    departmentController.create.bind(departmentController)
);

router.post(
    "/departments/assign",
    departmentController.assign.bind(departmentController)
);

/*
|--------------------------------------------------------------------------
| Export
|--------------------------------------------------------------------------
*/

export const TeamModule = {
    router,
};