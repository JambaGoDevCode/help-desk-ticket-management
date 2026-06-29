import { z } from "zod";

export const changeTicketStatusValidator =
  z.object({
    status: z.string(),
  });