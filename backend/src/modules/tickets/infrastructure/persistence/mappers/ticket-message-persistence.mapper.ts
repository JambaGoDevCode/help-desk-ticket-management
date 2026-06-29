import { TicketMessage } from "../../../domain/entities/ticket-message.entity";

export class TicketMessagePersistenceMapper {

  static toDomain(document: any) {

    return new TicketMessage(
      document._id,
      document.ticketId,
      document.senderId,
      document.content,
      document.createdAt
    );
  }
}