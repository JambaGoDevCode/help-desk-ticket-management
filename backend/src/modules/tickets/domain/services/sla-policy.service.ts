import { TicketPriority } from "../value-objects/ticket-priority.vo";
import { SLA } from "../value-objects/sla.vo";

export class SLAPolicyService {
  calculate(
    priority: TicketPriority
  ): SLA {

    switch (priority) {

      case TicketPriority.CRITICAL:
        return new SLA(15, 60);

      case TicketPriority.HIGH:
        return new SLA(30, 240);

      case TicketPriority.MEDIUM:
        return new SLA(60, 480);

      default:
        return new SLA(120, 1440);
    }
  }
}