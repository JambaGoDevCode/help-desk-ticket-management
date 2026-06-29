import { UserLoggedInEvent } from "../../domain/events/user-logged-in.event";

export class UserLoggedInHandler {
  async handle(event: UserLoggedInEvent) {
    console.log("Login:", event.userId.value);
  }
}