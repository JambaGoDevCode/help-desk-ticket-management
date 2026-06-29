import { UserRepository } from "../../domain/repositories/user.repository";
import { ChangePasswordCommand } from "../commands/change-password.command";
import { Password } from "../../domain/value-objects/password.vo";

export class ChangePasswordUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(cmd: ChangePasswordCommand) {
    const user = await this.userRepo.findById({ value: cmd.userId } as any);

    if (!user) throw new Error("User not found");

    const newPassword = await Password.create(cmd.newPassword);

    user.passwordHash = newPassword.hash;
    user.updatedAt = new Date();

    await this.userRepo.update(user);

    return true;
  }
}