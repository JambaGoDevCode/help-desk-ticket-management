import { UserRepository } from "../../domain/repositories/user.repository";

export class GetUserProfileUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(userId: string) {
    const user = await this.userRepo.findById({ value: userId } as any);

    if (!user) throw new Error("User not found");

    return user;
  }
}