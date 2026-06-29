import { ReopenTicketCommand } from "../commands/reopen-ticket.command";
import { TicketRepository } from "../../domain/repositories/ticket.repository";

export class ReopenTicketUseCase {
  constructor(
    private readonly repository: TicketRepository
  ) {}

  async execute(command: ReopenTicketCommand) {

    const ticket = await this.repository.findById(
      command.ticketId
    );

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    ticket.reopen();

    return this.repository.update(ticket);
  }
}