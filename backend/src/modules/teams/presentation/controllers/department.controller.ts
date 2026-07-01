import { Request, Response } from "express";

export class DepartmentController {

    constructor(private useCase: any) { }

    async create(req: Request, res: Response) {

        const result =
            await this.useCase.createDepartment.execute(req.body);

        return res.json(result);
    }
}