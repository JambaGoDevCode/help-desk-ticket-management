import { UserRoleChangedEvent } from "../../domain/events/user-role-changed.event";

export class UserRoleChangedHandler {
  async handle(event: UserRoleChangedEvent) {
    console.log("Role changed:", event.userId.value);
  }
}