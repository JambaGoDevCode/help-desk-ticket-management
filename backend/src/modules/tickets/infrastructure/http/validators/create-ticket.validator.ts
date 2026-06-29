import { z } from "zod";

export const createTicketValidator =
  z.object({
    title: z.string().min(3),
    description: z.string().min(5),
    priority: z.string(),
    type: z.string(),
  });