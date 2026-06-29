import { registerEventHandlers } from "./infrastructure/messaging/event-handler-registry";

export function initializeTicketEvents() {

  registerEventHandlers();

  console.log(
    "[TicketModule] Events initialized"
  );
}