import { Request, Response } from "express";

export class ReopenTicketController {

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
        reopenedBy: req.user.id,
      });

    return res.json(result);
  }
}