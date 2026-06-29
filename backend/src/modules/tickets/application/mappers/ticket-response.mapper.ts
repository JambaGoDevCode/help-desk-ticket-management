import { Ticket } from "../../domain/entities/ticket.entity";

export class TicketResponseMapper {

  static toResponse(ticket: Ticket) {

    return {
      id: ticket.data.id,
      number: ticket.data.ticketNumber,
      title: ticket.data.title,
      status: ticket.data.status,
      priority: ticket.data.priority,
      assignedTo: ticket.data.assignedTo,
      createdAt: ticket.data.createdAt,
    };
  }
}