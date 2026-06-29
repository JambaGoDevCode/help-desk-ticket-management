import { TicketStatus } from "../value-objects/ticket-status.vo";
import { TicketPriority } from "../value-objects/ticket-priority.vo";
import { TicketType } from "../value-objects/ticket-type.vo";
import { SLA } from "../value-objects/sla.vo";

export interface TicketProps {
  id: string;
  companyId: string;

  ticketNumber: string;

  title: string;
  description: string;

  status: TicketStatus;
  priority: TicketPriority;
  type: TicketType;

  requesterId: string;
  assignedTo?: string;

  sla: SLA;

  createdAt: Date;
  updatedAt: Date;
}

export class Ticket {
  constructor(
    private props: TicketProps
  ) {}

  assign(userId: string) {
    this.props.assignedTo = userId;
    this.props.status =
      TicketStatus.IN_PROGRESS;
  }

  close() {
    this.props.status =
      TicketStatus.CLOSED;
  }

  reopen() {
    this.props.status =
      TicketStatus.OPEN;
  }

  get data() {
    return this.props;
  }
}