import { Request, Response } from "express";

export class TeamController {

    constructor(private useCase: any) { }

    async create(req: Request, res: Response) {

        const result =
            await this.useCase.createTeam.execute(req.body);

        return res.json(result);
    }

    async list(req: Request, res: Response) {

        const result =
            await this.useCase.listTeams.execute();

        return res.json(result);
    }
}