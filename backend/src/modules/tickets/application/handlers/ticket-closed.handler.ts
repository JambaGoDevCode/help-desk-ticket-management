import { TicketClosedEvent } from "../../domain/events/ticket-closed.event";

export class TicketClosedHandler {
  async handle(
    event: TicketClosedEvent
  ) {

    console.log(
      `Ticket ${event.ticketId} closed`
    );

    // notifications
    // audit
    // metrics
  }
}