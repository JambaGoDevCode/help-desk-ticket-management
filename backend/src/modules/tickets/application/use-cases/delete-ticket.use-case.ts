import { DeleteTicketCommand } from "../commands/delete-ticket.command";
import { TicketRepository } from "../../domain/repositories/ticket.repository";

export class DeleteTicketUseCase {
  constructor(
    private readonly repository: TicketRepository
  ) {}

  async execute(command: DeleteTicketCommand) {
    await this.repository.delete(command.ticketId);
  }
}