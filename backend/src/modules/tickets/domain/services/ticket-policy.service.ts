import { TicketStatus } from "../value-objects/ticket-status.vo";

export class TicketPolicyService {

  canAssign(
    status: TicketStatus
  ): boolean {

    return [
      TicketStatus.NEW,
      TicketStatus.OPEN
    ].includes(status);
  }

  canClose(
    status: TicketStatus
  ): boolean {

    return [
      TicketStatus.RESOLVED,
      TicketStatus.IN_PROGRESS
    ].includes(status);
  }
}