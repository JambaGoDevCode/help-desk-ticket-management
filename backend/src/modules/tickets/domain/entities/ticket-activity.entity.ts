export class TicketActivity {
  constructor(
    public readonly id: string,
    public readonly ticketId: string,
    public readonly action: string,
    public readonly performedBy: string,
    public readonly createdAt: Date
  ) {}
}