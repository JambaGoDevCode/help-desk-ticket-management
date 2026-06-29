import { UserCreatedEvent } from "../../domain/events/user-created.event";

export class UserCreatedHandler {
  async handle(event: UserCreatedEvent) {
    console.log("User created:", event.userId.value);
  }
}