import { SLABreachedEvent } from "../../domain/events/sla-breached.event";

export class SLABreachedHandler {
  async handle(event: SLABreachedEvent) {

    console.log(
      `SLA breached ${event.ticketId}`
    );

    // escalation
    // email
    // alert
  }
}