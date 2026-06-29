import { TicketRepository } from "../../domain/repositories/ticket.repository";
import { TicketAssignmentService } from "../../domain/services/ticket-assignment.service";
import { AutoAssignTicketCommand } from "../commands/auto-assign-ticket.command";

export class AutoAssignTicketUseCase {
  constructor(
    private readonly repository: TicketRepository,
    private readonly assignmentService: TicketAssignmentService
  ) {}

  async execute(
    command: AutoAssignTicketCommand,
    availableAgents: string[]
  ) {

    const ticket = await this.repository.findById(
      command.ticketId
    );

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    const agent =
      this.assignmentService.autoAssign(
        availableAgents
      );

    if (!agent) {
      throw new Error(
        "No available agents"
      );
    }

    ticket.assign(agent);

    return this.repository.update(ticket);
  }
}