import { Request, Response } from "express";
import { GetUserProfileUseCase } from "../../application/use-cases/get-user-profile.use-case";

export class ProfileController {
  constructor(private getProfile: GetUserProfileUseCase) {}

  async get(req: Request, res: Response) {
    const userId = (req as any).user.id;

    const profile = await this.getProfile.execute(userId);

    return res.json(profile);
  }
}