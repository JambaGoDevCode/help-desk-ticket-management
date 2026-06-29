import { UserRepository } from "../../domain/repositories/user.repository";
import { Email } from "../../domain/value-objects/email.vo";
import { Password } from "../../domain/value-objects/password.vo";
import { LoginUserCommand } from "../commands/login-user.command";
import { UserLoggedInEvent } from "../../domain/events/user-logged-in.event";

export class LoginUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(cmd: LoginUserCommand) {
    const user = await this.userRepo.findByEmail(new Email(cmd.email));
    if (!user) throw new Error("Invalid credentials");

    const password = Password.fromHash(user.passwordHash);
    const valid = await password.compare(cmd.password);

    if (!valid) throw new Error("Invalid credentials");

    const event = new UserLoggedInEvent(
      user.id,
      cmd.ip,
      cmd.userAgent,
      new Date()
    );

    return {
      user,
      event
    };
  }
}