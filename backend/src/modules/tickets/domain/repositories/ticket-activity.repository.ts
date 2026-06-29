import { TicketActivity } from "../entities/ticket-activity.entity";

export interface TicketActivityRepository {

  create(
    activity: TicketActivity
  ): Promise<TicketActivity>;

  findByTicket(
    ticketId: string
  ): Promise<TicketActivity[]>;
}