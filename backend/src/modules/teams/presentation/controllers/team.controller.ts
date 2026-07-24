import { Request, Response, NextFunction } from "express";

import { CreateTeamUseCase } from "../../application/use-cases/create-team.use-case";
import { UpdateTeamUseCase } from "../../application/use-cases/update-team.use-case";
import { ListTeamsUseCase } from "../../application/use-cases/list-teams.use-case";
import { AddMemberUseCase } from "../../application/use-cases/add-member.use-case";
import { RemoveMemberUseCase } from "../../application/use-cases/remove-member.use-case";
import { CalculateTeamLoadUseCase } from "../../application/use-cases/calculate-team-load.use-case";
import { AssignTeamToDepartmentUseCase } from "../../application/use-cases/assign-team-to-department.use-case";

export class TeamController {
    constructor(
        private readonly createTeamUseCase: CreateTeamUseCase,
        private readonly updateTeamUseCase: UpdateTeamUseCase,
        private readonly listTeamsUseCase: ListTeamsUseCase,
        private readonly addMemberUseCase: AddMemberUseCase,
        private readonly removeMemberUseCase: RemoveMemberUseCase,
        private readonly assignTeamToDepartmentUseCase: AssignTeamToDepartmentUseCase,
        private readonly calculateTeamLoadUseCase: CalculateTeamLoadUseCase
    ) { }

    /**
     * POST /teams
     */
    async create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.createTeamUseCase.execute(req.body);

            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    /**
     * GET /teams
     */
    async list(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.listTeamsUseCase.execute();

            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    /**
     * PUT /teams/:id
     */
    async update(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.updateTeamUseCase.execute({
                id: req.params.id,
                ...req.body,
            });

            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    /**
     * GET /teams/:id/load
     */
    async load(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.calculateTeamLoadUseCase.execute(
                req.params.id
            );

          res.status(200).json(result);
      } catch (error) {
          next(error);
      }
  }

    /**
     * POST /teams/:id/members
     */
    async addMember(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.addMemberUseCase.execute({
                teamId: req.params.id,
                ...req.body,
            });

          res.status(201).json(result);
      } catch (error) {
          next(error);
      }
  }

    /**
     * DELETE /teams/:id/members/:userId
     */
    async removeMember(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            await this.removeMemberUseCase.execute({
                teamId: req.params.id,
                userId: req.params.userId,
            });

            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }

    /**
     * POST /teams/:id/department
     *
     * Método opcional caso queira expor
     * a atribuição de departamento por este controller.
     */
    async assignDepartment(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
        const result =
          await this.assignTeamToDepartmentUseCase.execute({
              teamId: req.params.id,
              departmentId: req.body.departmentId,
          });

          res.status(200).json(result);
      } catch (error) {
          next(error);
      }
  }
}