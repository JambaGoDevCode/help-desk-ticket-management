import { DomainEvent } from "../../domain/domain-event";
import { EventBus } from "./event-bus";

export class InMemoryEventBus implements EventBus {

  private handlers = new Map<string, Array<(event: DomainEvent) => void | Promise<void>>>();

  async publish(event: DomainEvent): Promise<void> {
    const handlers = this.handlers.get(event.eventName()) ?? [];

    for (const handler of handlers) {
      await handler(event);
    }
  }

  subscribe(
    event: string,
    handler: (event: DomainEvent) => void | Promise<void>
  ): void {

    const handlers = this.handlers.get(event) ?? [];

    handlers.push(handler);

    this.handlers.set(event, handlers);
  }

}