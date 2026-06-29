import app from "./modules/app";
import mongoose from "mongoose";
import http from "http";
import { initSocket } from "./modules/tickets/infrastructure/realtime/websocket.gateway";
import dotenv from "dotenv";

dotenv.config();

const server = http.createServer(app);

// SOCKET
initSocket(server);

// DB
mongoose.connect(process.env.MONGO_URL as string)
  .then(() => console.log("🟢 MongoDB connected"))
  .catch((err) => console.error(err));

server.listen(4000, () => {
  console.log("🚀 Server running on http://localhost:4000");
});