import { ticketDependencies } from "./ticket.dependencies";

import { CreateTicketUseCase } from "./application/use-cases/create-ticket.use-case";
import { AssignTicketUseCase } from "./application/use-cases/assign-ticket.use-case";
import { ChangeTicketStatusUseCase } from "./application/use-cases/change-ticket-status.use-case";
import { CloseTicketUseCase } from "./application/use-cases/close-ticket.use-case";
import { ReopenTicketUseCase } from "./application/use-cases/reopen-ticket.use-case";
import { AddTicketMessageUseCase } from "./application/use-cases/add-ticket-message.use-case";
import { ListTicketsUseCase } from "./application/use-cases/list-tickets.use-case";
import { GetTicketByIdUseCase } from "./application/use-cases/get-ticket-by-id.use-case";
import { GetTicketMessagesUseCase } from "./application/use-cases/get-ticket-messages.use-case";
import { GetTicketActivitiesUseCase } from "./application/use-cases/get-ticket-activities.use-case";

const {
  repositories,
  services,
} = ticketDependencies;

export const ticketUseCases = {

  createTicket:

    new CreateTicketUseCase(
      repositories.ticketRepository,
      services.slaPolicy,
      services.ticketNumberGenerator
    ),

  assignTicket:

    new AssignTicketUseCase(
      repositories.ticketRepository
    ),

  changeTicketStatus:

    new ChangeTicketStatusUseCase(
      repositories.ticketRepository
    ),

  closeTicket:

    new CloseTicketUseCase(
      repositories.ticketRepository
    ),

  reopenTicket:

    new ReopenTicketUseCase(
      repositories.ticketRepository
    ),

  addTicketMessage:

    new AddTicketMessageUseCase(
      repositories.messageRepository
    ),

  listTickets:

    new ListTicketsUseCase(
      repositories.ticketRepository
    ),

  getTicketById:

    new GetTicketByIdUseCase(
      repositories.ticketRepository
    ),

  getTicketMessages:

    new GetTicketMessagesUseCase(
      repositories.messageRepository
    ),

  getTicketActivities:

    new GetTicketActivitiesUseCase(
      repositories.activityRepository
    ),
};