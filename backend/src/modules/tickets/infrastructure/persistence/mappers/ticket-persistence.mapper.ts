import { Ticket } from "../../../domain/entities/ticket.entity";

export class TicketPersistenceMapper {

  static toPersistence(
    ticket: Ticket
  ) {

    return {
      ...ticket.data,
    };
  }

  static toDomain(
    document: any
  ) {

    return new Ticket({
      id: document._id.toString(),
      companyId: document.companyId,
      ticketNumber: document.ticketNumber,
      title: document.title,
      description: document.description,
      status: document.status,
      priority: document.priority,
      type: document.type,
      requesterId: document.requesterId,
      assignedTo: document.assignedTo,
      sla: document.sla,
      createdAt: document.createdAt,
      updatedAt: document.updatedAt,
    });
  }
}