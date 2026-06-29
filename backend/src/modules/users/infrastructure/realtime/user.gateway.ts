import { Server } from "socket.io";

export class UserGateway {
  constructor(private io: Server) {}

  emitUserCreated(user: any) {
    this.io.emit("user.created", user);
  }

  emitUserUpdated(user: any) {
    this.io.emit("user.updated", user);
  }

  emitUserLoggedIn(userId: string) {
    this.io.emit("user.logged_in", { userId });
  }
}