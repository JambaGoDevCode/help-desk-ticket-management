import { UserRepository } from "../../domain/repositories/user.repository";
import { UpdateUserCommand } from "../commands/update-user.command";
import { UserNotFoundError } from "../../domain/errors/user-not-found.error";

export class UpdateUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(cmd: UpdateUserCommand) {
    const user = await this.userRepo.findById({ value: cmd.userId } as any);

    if (!user) throw new UserNotFoundError();

    user.updatedAt = new Date();

    await this.userRepo.update(user);

    return user;
  }
}