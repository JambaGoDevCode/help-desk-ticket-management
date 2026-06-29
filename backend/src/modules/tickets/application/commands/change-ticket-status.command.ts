import { TicketStatus } from "../../domain/value-objects/ticket-status.vo";

export interface ChangeTicketStatusCommand {
  ticketId: string;
  status: TicketStatus;
  changedBy: string;
}