import { TicketStatus } from "../value-objects/ticket-status.vo";

export class TicketStatusChangedEvent {
  constructor(
    public readonly ticketId: string,
    public readonly oldStatus: TicketStatus,
    public readonly newStatus: TicketStatus
  ) {}
}