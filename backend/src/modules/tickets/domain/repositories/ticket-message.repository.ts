import { TicketMessage } from "../entities/ticket-message.entity";

export interface TicketMessageRepository {

  create(
    message: TicketMessage
  ): Promise<TicketMessage>;

  findByTicket(
    ticketId: string
  ): Promise<TicketMessage[]>;
}