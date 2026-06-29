import { Router } from "express";

import { initializeTicketEvents } from "./ticket.events";

import { ticketUseCases }
from "./ticket.container";

import { CreateTicketController }
from "./presentation/controllers/create-ticket.controller";

import { AssignTicketController }
from "./presentation/controllers/assign-ticket.controller";

import { ChangeTicketStatusController }
from "./presentation/controllers/change-ticket-status.controller";

import { CloseTicketController }
from "./presentation/controllers/close-ticket.controller";

import { ReopenTicketController }
from "./presentation/controllers/reopen-ticket.controller";

import { AddTicketMessageController }
from "./presentation/controllers/add-ticket-message.controller";

import { ListTicketsController }
from "./presentation/controllers/list-tickets.controller";

import { GetTicketByIdController }
from "./presentation/controllers/get-ticket-by-id.controller";

import { GetTicketMessagesController }
from "./presentation/controllers/get-ticket-messages.controller";

import { GetTicketActivitiesController }
from "./presentation/controllers/get-ticket-activities.controller";

initializeTicketEvents();

const router = Router();

/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/

const createTicketController =
  new CreateTicketController(
    ticketUseCases.createTicket
  );

const assignTicketController =
  new AssignTicketController(
    ticketUseCases.assignTicket
  );

const changeStatusController =
  new ChangeTicketStatusController(
    ticketUseCases.changeTicketStatus
  );

const closeTicketController =
  new CloseTicketController(
    ticketUseCases.closeTicket
  );

const reopenTicketController =
  new ReopenTicketController(
    ticketUseCases.reopenTicket
  );

const addMessageController =
  new AddTicketMessageController(
    ticketUseCases.addTicketMessage
  );

const listTicketsController =
  new ListTicketsController(
    ticketUseCases.listTickets
  );

const getTicketController =
  new GetTicketByIdController(
    ticketUseCases.getTicketById
  );

const getMessagesController =
  new GetTicketMessagesController(
    ticketUseCases.getTicketMessages
  );

const getActivitiesController =
  new GetTicketActivitiesController(
    ticketUseCases.getTicketActivities
  );

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  listTicketsController.handle.bind(
    listTicketsController
  )
);

router.get(
  "/:id",
  getTicketController.handle.bind(
    getTicketController
  )
);

router.post(
  "/",
  createTicketController.handle.bind(
    createTicketController
  )
);

router.patch(
  "/:id/assign",
  assignTicketController.handle.bind(
    assignTicketController
  )
);

router.patch(
  "/:id/status",
  changeStatusController.handle.bind(
    changeStatusController
  )
);

router.patch(
  "/:id/close",
  closeTicketController.handle.bind(
    closeTicketController
  )
);

router.patch(
  "/:id/reopen",
  reopenTicketController.handle.bind(
    reopenTicketController
  )
);

router.post(
  "/:id/messages",
  addMessageController.handle.bind(
    addMessageController
  )
);

router.get(
  "/:id/messages",
  getMessagesController.handle.bind(
    getMessagesController
  )
);

router.get(
  "/:id/activities",
  getActivitiesController.handle.bind(
    getActivitiesController
  )
);

export const TicketModule = {
  router,
};