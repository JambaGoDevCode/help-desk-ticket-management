import { TicketCreatedEvent } from "../../domain/events/ticket-created.event";

export class TicketCreatedHandler {
  async handle(event: TicketCreatedEvent) {

    console.log(
      `Ticket ${event.ticketId} created`
    );

    // email
    // notification
    // websocket
  }
}