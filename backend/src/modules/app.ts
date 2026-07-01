import express from "express";
import cors from "cors";
// import ticketRoutes from "./tickets/presentation/routes/ticket.routes";

import { TicketModule } from "./tickets/ticket.module"; 
import { UserModule } from "./users/user.module";
import { TeamModule } from "./teams/team.module";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.use(
  "/api/users",
  UserModule.
);

app.use(
  "/api/tickets",
  TicketModule.router
);

app.use(
  "/api/team",
  TeamModule.router
);

export default app;