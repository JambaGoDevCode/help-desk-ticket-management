import { Request, Response } from "express";

export class AddTicketMessageController {

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
        senderId: req.user.id,
        content: req.body.content,
      });

    return res.status(201).json(result);
  }
}