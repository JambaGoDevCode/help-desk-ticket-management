import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/use-cases/login-user.use-case";

export class AuthController {
  constructor(private loginUser: LoginUserUseCase) {}

  async login(req: Request, res: Response) {
    const result = await this.loginUser.execute({
      email: req.body.email,
      password: req.body.password,
      ip: req.ip,
      userAgent: req.headers["user-agent"] || ""
    });

    return res.json(result);
  }
}