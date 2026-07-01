import { Router } from "express";

import { initializeTeamEvents } from "./team.events";
import { teamUseCases } from "./team.container";

/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/

import { TeamController } from "./presentation/controllers/team.controller";
import { QueueController } from "./presentation/controllers/queue.controller";
import { DepartmentController } from "./presentation/controllers/department.controller";

/*
|--------------------------------------------------------------------------
| INIT EVENTS
|--------------------------------------------------------------------------
*/

initializeTeamEvents();

const router = Router();

/*
|--------------------------------------------------------------------------
| CONTROLLERS INSTANCES
|--------------------------------------------------------------------------
*/

const teamController = new TeamController({
    createTeam: teamUseCases.createTeam,
    updateTeam: teamUseCases.updateTeam,
    addMember: teamUseCases.addMember,
    removeMember: teamUseCases.removeMember,
    assignTeamToDepartment: teamUseCases.assignTeamToDepartment,
    calculateTeamLoad: teamUseCases.calculateTeamLoad
});

const queueController = new QueueController({
    createQueue: teamUseCases.createQueue,
    assignTicketToTeam: teamUseCases.assignTicketToTeam
});

const departmentController = new DepartmentController({
    assignTeam: teamUseCases.assignTeamToDepartment
});

/*
|--------------------------------------------------------------------------
| ROUTES
|--------------------------------------------------------------------------
*/

// 🧠 TEAMS
router.post("/", teamController.create.bind(teamController));
router.put("/:id", teamController.update.bind(teamController));
router.get("/", teamController.list.bind(teamController));
router.get("/:id/load", teamController.load.bind(teamController));

router.post("/:id/members", teamController.addMember.bind(teamController));
router.delete("/:id/members/:userId", teamController.removeMember.bind(teamController));

// 🧠 QUEUES
router.post("/queues", queueController.create.bind(queueController));
router.post("/queues/:id/assign-ticket", queueController.assignTicket.bind(queueController));

// 🧠 DEPARTMENTS
router.post("/departments/assign", departmentController.assign.bind(departmentController));

/*
|--------------------------------------------------------------------------
| EXPORT MODULE
|--------------------------------------------------------------------------
*/

export const TeamModule = {
    router,
};