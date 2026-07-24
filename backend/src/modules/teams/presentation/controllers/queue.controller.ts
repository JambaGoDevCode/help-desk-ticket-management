import { Request, Response, NextFunction } from "express";

import { CreateQueueUseCase } from "../../application/use-cases/create-queue.use-case";
import { AssignTicketToTeamUseCase } from "../../application/use-cases/assign-ticket-to-team.use-case";

export class QueueController {
    constructor(
        private readonly createQueueUseCase: CreateQueueUseCase,
        private readonly assignTicketToTeamUseCase: AssignTicketToTeamUseCase
    ) { }

    /**
     * POST /queues
     */
    async create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.createQueueUseCase.execute({
                teamId: req.body.teamId,
                name: req.body.name,
                type: req.body.type,
                assignmentStrategy: req.body.assignmentStrategy,
                workloadLimit: req.body.workloadLimit,
            });

          res.status(201).json(result);
      } catch (error) {
          next(error);
      }
  }

    /**
     * POST /queues/:id/assign-ticket
     */
    async assignTicket(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.assignTicketToTeamUseCase.execute({
                queueId: req.params.id,
                ticketId: req.body.ticketId,
                priority: req.body.priority,
                assignedBy: (req as any).user?.id,
            });

          res.status(200).json(result);
      } catch (error) {
          next(error);
      }
  }
}