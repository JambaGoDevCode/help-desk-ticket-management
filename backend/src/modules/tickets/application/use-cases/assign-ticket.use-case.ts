import { AssignTicketCommand } from "../commands/assign-ticket.command";
import { TicketRepository } from "../../domain/repositories/ticket.repository";

export class AssignTicketUseCase {
  constructor(
    private readonly repository: TicketRepository
  ) {}

  async execute(command: AssignTicketCommand) {
    const ticket =
      await this.repository.findById(command.ticketId);

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    ticket.assign(command.assignedTo);

    return this.repository.update(ticket);
  }
}