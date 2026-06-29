import { TicketRepository } from "../../domain/repositories/ticket.repository";

export class GetTicketByIdUseCase {
  constructor(
    private readonly repository: TicketRepository
  ) {}

  async execute(id: string) {
    return this.repository.findById(id);
  }
}