import { Request, Response } from "express";

export class CloseTicketController {

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
        closedBy: req.user.id,
      });

    return res.json(result);
  }
}