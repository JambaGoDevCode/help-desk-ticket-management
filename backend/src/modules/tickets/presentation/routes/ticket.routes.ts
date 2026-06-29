import {
  Router
} from "express";

const router = Router();

router.get(
  "/",
  listTicketsController.handle
);

router.get(
  "/:id",
  getTicketByIdController.handle
);

router.post(
  "/",
  createTicketController.handle
);

router.patch(
  "/:id/assign",
  assignTicketController.handle
);

router.patch(
  "/:id/status",
  changeTicketStatusController.handle
);

router.patch(
  "/:id/close",
  closeTicketController.handle
);

router.patch(
  "/:id/reopen",
  reopenTicketController.handle
);

router.post(
  "/:id/messages",
  addTicketMessageController.handle
);

export default router;