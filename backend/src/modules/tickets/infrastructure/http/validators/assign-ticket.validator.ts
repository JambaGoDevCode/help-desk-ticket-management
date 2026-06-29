import { z } from "zod";

export const assignTicketValidator =
  z.object({
    assignedTo: z.string(),
  });