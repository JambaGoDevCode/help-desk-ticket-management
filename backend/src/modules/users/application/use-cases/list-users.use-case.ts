import { UserRepository } from "../../domain/repositories/user.repository";

export class ListUsersUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute() {
    return this.userRepo.findAll();
  }
}