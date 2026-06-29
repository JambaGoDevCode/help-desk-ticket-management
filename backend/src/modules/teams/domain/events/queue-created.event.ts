export class QueueCreatedEvent {
  constructor(
    public readonly queueId: string,
    public readonly teamId: string
  ) {}
}