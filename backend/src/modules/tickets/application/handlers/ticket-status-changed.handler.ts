import { TicketStatusChangedEvent } from "../../domain/events/ticket-status-changed.event";

export class TicketStatusChangedHandler {
  async handle(
    event: TicketStatusChangedEvent
  ) {

    console.log(
      `${event.ticketId}: ${event.oldStatus} -> ${event.newStatus}`
    );
  }
}