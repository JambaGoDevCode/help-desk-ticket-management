import { TicketActivity } from "../../../domain/entities/ticket-activity.entity";

export class TicketActivityPersistenceMapper {

  static toDomain(document: any) {

    return new TicketActivity(
      document._id,
      document.ticketId,
      document.action,
      document.performedBy,
      document.createdAt
    );
  }
}