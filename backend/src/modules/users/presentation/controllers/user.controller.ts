import { Request, Response, NextFunction } from "express";

import { CreateUserUseCase } from "../../application/use-cases/create-user.use-case";
import { UpdateUserUseCase } from "../../application/use-cases/update-user.use-case";
import { DeactivateUserUseCase } from "../../application/use-cases/deactivate-user.use-case";
import { ChangePasswordUseCase } from "../../application/use-cases/change-password.use-case";
import { LoginUserUseCase } from "../../application/use-cases/login-user.use-case";
import { GetUserProfileUseCase } from "../../application/use-cases/get-user-profile.use-case";
import { ListUsersUseCase } from "../../application/use-cases/list-users.use-case";

export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deactivateUserUseCase: DeactivateUserUseCase,
    private readonly changePasswordUseCase: ChangePasswordUseCase,
    private readonly loginUserUseCase: LoginUserUseCase,
    private readonly getUserProfileUseCase: GetUserProfileUseCase,
    private readonly listUsersUseCase: ListUsersUseCase
  ) { }

  /**
   * POST /users
   */
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await this.createUserUseCase.execute(req.body);

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /users
   */
  async list(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await this.listUsersUseCase.execute();

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /users/:id
   */
  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await this.updateUserUseCase.execute({
        id: req.params.id,
        ...req.body,
      });

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PATCH /users/:id/deactivate
   */
  async deactivate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await this.deactivateUserUseCase.execute({
        id: req.params.id,
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /auth/login
   */
  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await this.loginUserUseCase.execute({
        email: req.body.email,
        password: req.body.password,
        ip: req.ip,
        userAgent: req.headers["user-agent"] ?? "",
      });

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PATCH /auth/change-password
   */
  async changePassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await this.changePasswordUseCase.execute({
        userId: (req as any).user.id,
        currentPassword: req.body.currentPassword,
        newPassword: req.body.newPassword,
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /users/me
   */
  async getProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await this.getUserProfileUseCase.execute(
        (req as any).user.id
      );

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}