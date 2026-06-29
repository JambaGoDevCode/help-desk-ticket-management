import { CloseTicketCommand } from "../commands/close-ticket.command";
import { TicketRepository } from "../../domain/repositories/ticket.repository";

export class CloseTicketUseCase {
  constructor(
    private readonly repository: TicketRepository
  ) {}

  async execute(command: CloseTicketCommand) {

    const ticket = await this.repository.findById(
      command.ticketId
    );

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    ticket.close();

    return this.repository.update(ticket);
  }
}