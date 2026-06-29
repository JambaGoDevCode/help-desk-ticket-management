export class TicketAssignment {
  constructor(
    public readonly ticketId: string,
    public readonly assignedTo: string,
    public readonly assignedBy: string,
    public readonly assignedAt: Date
  ) {}
}