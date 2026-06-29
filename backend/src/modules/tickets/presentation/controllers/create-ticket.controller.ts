import {
  Request,
  Response
} from "express";

import { CreateTicketUseCase }
from "../../application/use-cases/create-ticket.use-case";

export class CreateTicketController {

  constructor(
    private readonly useCase:
      CreateTicketUseCase
  ) {}

  async handle(
    req: Request,
    res: Response
  ) {

    const result =
      await this.useCase.execute(
        req.body
      );

    return res.status(201)
      .json(result);
  }
}