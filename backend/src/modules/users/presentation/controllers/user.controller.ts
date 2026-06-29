import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/create-user.use-case";
import { ListUsersUseCase } from "../../application/use-cases/list-users.use-case";

export class UserController {
  constructor(
    private createUser: CreateUserUseCase,
    private listUsers: ListUsersUseCase
  ) {}

  async create(req: Request, res: Response) {
    const user = await this.createUser.execute(req.body);
    return res.status(201).json(user);
  }

  async list(req: Request, res: Response) {
    const users = await this.listUsers.execute();
    return res.json(users);
  }
}