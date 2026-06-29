import { UserGateway } from "./user.gateway";

export class UserEventsGateway {
  constructor(private gateway: UserGateway) {}

  onUserCreated(user: any) {
    this.gateway.emitUserCreated(user);
  }

  onUserUpdated(user: any) {
    this.gateway.emitUserUpdated(user);
  }

  onUserDeleted(userId: string) {
    this.gateway.emitUserDeleted(userId);
  }
}