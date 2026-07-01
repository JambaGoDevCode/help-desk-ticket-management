import { Request, Response } from "express";

export class QueueController {

    constructor(private useCase: any) { }

    async create(req: Request, res: Response) {

        const result =
            await this.useCase.createQueue.execute(
                req.body.teamId,
                req.body.name,
                req.body.type
            );

        return res.json(result);
    }
}