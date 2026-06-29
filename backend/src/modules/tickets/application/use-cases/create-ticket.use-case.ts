import { Ticket } from "../../domain/entities/ticket.entity";
import { TicketRepository } from "../../domain/repositories/ticket.repository";
import { CreateTicketCommand } from "../commands/create-ticket.command";
import { SLAPolicyService } from "../../domain/services/sla-policy.service";
import { TicketNumberGeneratorService } from "../../domain/services/ticket-number-generator.service";
import { TicketStatus } from "../../domain/value-objects/ticket-status.vo";

export class CreateTicketUseCase {
  constructor(
    private readonly repository: TicketRepository,
    private readonly slaPolicy: SLAPolicyService,
    private readonly ticketNumberGenerator: TicketNumberGeneratorService
  ) {}

  async execute(command: CreateTicketCommand) {
    const sla = this.slaPolicy.calculate(command.priority);

    const ticket = new Ticket({
      id: crypto.randomUUID(),
      companyId: command.companyId,
      ticketNumber: this.ticketNumberGenerator.generate(),
      title: command.title,
      description: command.description,
      status: TicketStatus.NEW,
      priority: command.priority,
      type: command.type,
      requesterId: command.requesterId,
      sla,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.repository.create(ticket);
  }
}