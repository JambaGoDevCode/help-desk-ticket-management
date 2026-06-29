import { TicketReopenedEvent } from "../../domain/events/ticket-reopened.event";

export class TicketReopenedHandler {
  async handle(
    event: TicketReopenedEvent
  ) {

    console.log(
      `Ticket ${event.ticketId} reopened`
    );
  }
}