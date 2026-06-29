import { TicketPriority } from "../../domain/value-objects/ticket-priority.vo";
import { TicketType } from "../../domain/value-objects/ticket-type.vo";

export interface CreateTicketCommand {
  companyId: string;
  title: string;
  description: string;
  requesterId: string;
  priority: TicketPriority;
  type: TicketType;
}