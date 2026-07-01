import { Router } from "express";
import { TeamController } from "../controllers/team.controller";

export const teamRoutes = Router();

const controller = new TeamController({} as any);

teamRoutes.post("/", controller.create.bind(controller));
teamRoutes.get("/", controller.list.bind(controller));