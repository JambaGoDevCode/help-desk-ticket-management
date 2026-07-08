import { BaseEntity } from "./base-entity";
import { DomainEvent } from "./domain-event";


export abstract class AggregateRoot<T>
  extends BaseEntity<T> {


  private domainEvents: DomainEvent[] = [];



  protected addDomainEvent(
    event: DomainEvent
  ): void {


    this.domainEvents.push(event);

  }



  getDomainEvents(): DomainEvent[] {

    return [
      ...this.domainEvents
    ];

  }



  clearEvents(): void {

    this.domainEvents = [];

  }



}