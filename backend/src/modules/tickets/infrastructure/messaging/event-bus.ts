type EventHandler<T = any> =
  (event: T) => Promise<void>;

export class EventBus {

  private handlers:
    Map<string, EventHandler[]> =
      new Map();

  register(
    eventName: string,
    handler: EventHandler
  ) {

    const handlers =
      this.handlers.get(eventName) || [];

    handlers.push(handler);

    this.handlers.set(
      eventName,
      handlers
    );
  }

  async publish(
    eventName: string,
    event: any
  ) {

    const handlers =
      this.handlers.get(eventName) || [];

    await Promise.all(
      handlers.map(handler =>
        handler(event)
      )
    );
  }
}

export const eventBus =
  new EventBus();