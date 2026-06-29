import { Ticket } from "../../domain/entities/ticket.entity";

export class TicketMapper {

  static toPersistence(ticket: Ticket) {

    return {
      ...ticket.data,
    };
  }

  static toDomain(data: any) {

    return new Ticket(data);
  }
}