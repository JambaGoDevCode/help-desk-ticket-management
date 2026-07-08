import { Server } from "socket.io";
import http from "http";

export class WebsocketGateway {

  private io?: Server;

  initialize(io: Server) {

    this.io = io;

    io.on(
      "connection",
      (socket) => {

        console.log(
          `Connected: ${socket.id}`
        );

        socket.on(
          "disconnect",
          () => {
            console.log(
              `Disconnected: ${socket.id}`
            );
          }
        );
      }
    );
  }

  getServer() {
    return this.io;
  }
}

export const websocketGateway =
  new WebsocketGateway();

export function initSocket(server: http.Server) {
  const io = new Server(server);
  websocketGateway.initialize(io);
  return io;
}