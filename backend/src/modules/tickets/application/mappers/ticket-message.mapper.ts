import { TicketMessage } from "../../domain/entities/ticket-message.entity";

export class TicketMessageMapper {

  static toPersistence(
    message: TicketMessage
  ) {
    return {
      id: message.id,
      ticketId: message.ticketId,
      senderId: message.senderId,
      content: message.content,
      createdAt: message.createdAt,
    };
  }
}