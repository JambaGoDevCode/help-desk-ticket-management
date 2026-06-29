import { eventBus } from "./event-bus";

import { TicketCreatedHandler } from "../../application/handlers/ticket-created.handler";
import { TicketAssignedHandler } from "../../application/handlers/ticket-assigned.handler";
import { TicketClosedHandler } from "../../application/handlers/ticket-closed.handler";

export function registerEventHandlers() {

  eventBus.register(
    "ticket.created",
    (event) =>
      new TicketCreatedHandler()
        .handle(event)
  );

  eventBus.register(
    "ticket.assigned",
    (event) =>
      new TicketAssignedHandler()
        .handle(event)
  );

  eventBus.register(
    "ticket.closed",
    (event) =>
      new TicketClosedHandler()
        .handle(event)
  );
}