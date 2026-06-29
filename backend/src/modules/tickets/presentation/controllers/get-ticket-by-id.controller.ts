import {
  Request,
  Response
} from "express";

import { GetTicketByIdUseCase }
from "../../application/use-cases/get-ticket-by-id.use-case";

export class GetTicketByIdController {

  constructor(
    private readonly useCase:
      GetTicketByIdUseCase
  ) {}

  async handle(
    req: Request,
    res: Response
  ) {

    const result =
      await this.useCase.execute(
        req.params.id
      );

    return res.json(result);
  }
}