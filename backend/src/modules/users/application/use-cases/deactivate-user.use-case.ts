import { UserRepository } from "../../domain/repositories/user.repository";
import { DeactivateUserCommand } from "../commands/deactivate-user.command";

export class DeactivateUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(cmd: DeactivateUserCommand) {
    const user = await this.userRepo.findById({ value: cmd.userId } as any);

    if (!user) throw new Error("User not found");

    user.deactivate();

    await this.userRepo.update(user);

    return user;
  }
}