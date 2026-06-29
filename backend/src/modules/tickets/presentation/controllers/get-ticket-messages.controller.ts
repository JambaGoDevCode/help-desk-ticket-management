import { Request, Response } from "express";

export class GetTicketMessagesController {

  constructor(
    private readonly useCase: any
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