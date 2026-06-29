import { TicketRepository } from "../../domain/repositories/ticket.repository";

export class ListTicketsUseCase {
  constructor(
    private readonly repository: TicketRepository
  ) {}

  async execute() {
    return this.repository.findAll();
  }
}