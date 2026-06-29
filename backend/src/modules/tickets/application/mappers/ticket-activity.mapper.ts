import { TicketActivity } from "../../domain/entities/ticket-activity.entity";

export class TicketActivityMapper {

  static toPersistence(
    activity: TicketActivity
  ) {
    return {
      id: activity.id,
      ticketId: activity.ticketId,
      action: activity.action,
      performedBy: activity.performedBy,
      createdAt: activity.createdAt,
    };
  }
}