import { UserUpdatedEvent } from "../../domain/events/user-updated.event";

export class UserUpdatedHandler {
  async handle(event: UserUpdatedEvent) {
    console.log("User updated:", event.userId.value);
  }
}