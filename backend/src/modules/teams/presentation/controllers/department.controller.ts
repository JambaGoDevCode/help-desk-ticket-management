import { Request, Response, NextFunction } from "express";

import { CreateDepartmentUseCase } from "../../application/use-cases/create-department.use-case";
import { AssignTeamToDepartmentUseCase } from "../../application/use-cases/assign-team-to-department.use-case";

export class DepartmentController {
    constructor(
        private readonly createDepartmentUseCase: CreateDepartmentUseCase,
        private readonly assignTeamToDepartmentUseCase: AssignTeamToDepartmentUseCase
    ) { }

    /**
     * POST /departments
     */
    async create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.createDepartmentUseCase.execute({
                name: req.body.name,
                description: req.body.description,
                managerId: req.body.managerId,
            });

          res.status(201).json(result);
      } catch (error) {
          next(error);
      }
  }

    /**
     * POST /departments/assign
     */
    async assign(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
        const result =
          await this.assignTeamToDepartmentUseCase.execute({
              teamId: req.body.teamId,
              departmentId: req.body.departmentId,
          });

          res.status(200).json(result);
      } catch (error) {
          next(error);
      }
  }
}