import { Request, Response } from "express";
import { createTicket } from "../../application/use-cases/create-ticket";
import { listTickets } from "../../application/use-cases/list-tickets";
import { updateTicket } from "../../application/use-cases/update-ticket";

export const TicketController = {
  create: async (req: Request, res: Response) => {
    const ticket = await createTicket(req.body);
    res.json(ticket);
  },

  list: async (_: Request, res: Response) => {
    const tickets = await listTickets();
    res.json(tickets);
  },

  update: async (req: Request, res: Response) => {
    const ticket = await updateTicket(req.params.id, req.body);
    res.json(ticket);
  },
};