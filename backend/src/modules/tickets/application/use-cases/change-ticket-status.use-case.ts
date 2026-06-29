import { TicketRepository } from "../../domain/repositories/ticket.repository";
import { ChangeTicketStatusCommand } from "../commands/change-ticket-status.command";

export class ChangeTicketStatusUseCase {
  constructor(
    private readonly repository: TicketRepository
  ) {}

  async execute(command: ChangeTicketStatusCommand) {
    const ticket = await this.repository.findById(
      command.ticketId
    );

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    ticket.changeStatus(command.status);

    return this.repository.update(ticket);
  }
}