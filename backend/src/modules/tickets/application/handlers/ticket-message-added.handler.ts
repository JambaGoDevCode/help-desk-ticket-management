import { TicketMessageAddedEvent } from "../../domain/events/ticket-message-added.event";

export class TicketMessageAddedHandler {
  async handle(
    event: TicketMessageAddedEvent
  ) {

    console.log(
      `Message ${event.messageId} added`
    );
  }
}