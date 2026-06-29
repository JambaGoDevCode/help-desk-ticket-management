import { UserCreatedEvent } from "../../../domain/events/user-created.event";
import { UserLoggedInEvent } from "../../../domain/events/user-logged-in.event";

export class UserPublisher {
  async publishUserCreated(event: UserCreatedEvent) {
    console.log("[EVENT] UserCreated:", event.userId.value);
  }

  async publishUserLoggedIn(event: UserLoggedInEvent) {
    console.log("[EVENT] UserLoggedIn:", event.userId.value);
  }
}