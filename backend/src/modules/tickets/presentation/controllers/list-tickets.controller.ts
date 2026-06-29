import {
  Request,
  Response
} from "express";

import { ListTicketsUseCase }
from "../../application/use-cases/list-tickets.use-case";

export class ListTicketsController {

  constructor(
    private readonly useCase:
      ListTicketsUseCase
  ) {}

  async handle(
    req: Request,
    res: Response
  ) {

    const result =
      await this.useCase.execute();

    return res.json(result);
  }
}