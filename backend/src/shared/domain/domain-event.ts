export interface DomainEvent {

  readonly occurredAt: Date;

  readonly aggregateId: string;


  eventName(): string;
}