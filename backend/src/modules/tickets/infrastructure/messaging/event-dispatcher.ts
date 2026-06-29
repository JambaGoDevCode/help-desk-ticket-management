import { eventBus } from "./event-bus";

export class EventDispatcher {

  async dispatch(
    eventName: string,
    payload: any
  ) {

    await eventBus.publish(
      eventName,
      payload
    );
  }
}

export const eventDispatcher =
  new EventDispatcher();