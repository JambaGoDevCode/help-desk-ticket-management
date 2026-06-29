import { UserCreatedEvent } from "../../../domain/events/user-created.event";
import { UserLoggedInEvent } from "../../../domain/events/user-logged-in.event";

export class UserSubscriber {
  async onUserCreated(event: UserCreatedEvent) {
    console.log("Sending welcome email to:", event.email);
  }

  async onUserLoggedIn(event: UserLoggedInEvent) {
    console.log("Login audit:", event.userId.value);
  }
}

