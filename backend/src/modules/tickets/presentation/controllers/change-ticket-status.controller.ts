import { Request, Response } from "express";

export class ChangeTicketStatusController {

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
        status: req.body.status,
        changedBy: req.user.id,
      });

    return res.json(result);
  }
}