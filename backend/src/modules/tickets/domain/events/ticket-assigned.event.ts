export class TicketAssignedEvent {
  constructor(
    public readonly ticketId: string,
    public readonly userId: string
  ) {}
}