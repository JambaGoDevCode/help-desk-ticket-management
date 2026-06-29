export class QueueAssignedEvent {
  constructor(
    public readonly queueId: string,
    public readonly ticketId: string
  ) {}
}