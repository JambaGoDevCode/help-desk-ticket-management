import { TicketAssignedEvent } from "../../domain/events/ticket-assigned.event";

export class TicketAssignedHandler {
  async handle(event: TicketAssignedEvent) {

    console.log(
      `Ticket assigned to ${event.userId}`
    );
  }
}