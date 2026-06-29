import { MongoTicketRepository } from "./infrastructure/persistence/repositories/mongo-ticket.repository"; 
import { MongoTicketMessageRepository } from "./infrastructure/persistence/repositories/mongo-ticket-message.repository";
import { MongoTicketActivityRepository } from "./infrastructure/persistence/repositories/mongo-ticket-activity.repository";

import { SLAPolicyService } from "./domain/services/sla-policy.service";
import { TicketPolicyService } from "./domain/services/ticket-policy.service";
import { TicketAssignmentService } from "./domain/services/ticket-assignment.service";
import { TicketNumberGeneratorService } from "./domain/services/ticket-number-generator.service";

export const ticketDependencies = {

  repositories: {

    ticketRepository:
      new MongoTicketRepository(),

    messageRepository:
      new MongoTicketMessageRepository(),

    activityRepository:
      new MongoTicketActivityRepository(),
  },

  services: {

    slaPolicy:
      new SLAPolicyService(),

    ticketPolicy:
      new TicketPolicyService(),

    assignmentService:
      new TicketAssignmentService(),

    ticketNumberGenerator:
      new TicketNumberGeneratorService(),
  },
};