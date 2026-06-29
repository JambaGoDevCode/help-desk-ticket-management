import { Server } from "socket.io";

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