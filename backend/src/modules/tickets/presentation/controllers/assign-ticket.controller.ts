import { Request, Response } from "express";

export class AssignTicketController {

  constructor(
    private readonly useCase: any
  ) {}

  async handle(
    req: Request,
    res: Response
  ) {

    const result =
      await this.useCase.execute({
        ticketId: req.params.id,
        assignedTo: req.body.assignedTo,
        assignedBy: req.user.id,
      });

    return res.json(result);
  }
}