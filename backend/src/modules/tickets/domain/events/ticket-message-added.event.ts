export class TicketMessageAddedEvent {
  constructor(
    public readonly ticketId: string,
    public readonly messageId: string
  ) {}
}