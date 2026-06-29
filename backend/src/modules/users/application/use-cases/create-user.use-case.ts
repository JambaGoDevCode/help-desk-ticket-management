import { UserRepository } from "../../domain/repositories/user.repository";
import { Email } from "../../domain/value-objects/email.vo";
import { User } from "../../domain/entities/user.entity";
import { UserId } from "../../domain/value-objects/user-id.vo";
import { Password } from "../../domain/value-objects/password.vo";
import { CreateUserCommand } from "../commands/create-user.command";

export class CreateUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(cmd: CreateUserCommand) {
    const exists = await this.userRepo.existsByEmail(new Email(cmd.email));
    if (exists) throw new Error("Email already used");

    const password = await Password.create(cmd.password);

    const user = new User(
      UserId.create(),
      new Email(cmd.email),
      // role default
      { value: "CUSTOMER" } as any,
      { value: "ACTIVE" } as any,
      password.hash,
      new Date(),
      new Date()
    );

    await this.userRepo.save(user);

    return user;
  }
}