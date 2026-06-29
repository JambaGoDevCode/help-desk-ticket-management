import { PasswordChangedEvent } from "../../domain/events/password-changed.event";

export class PasswordChangedHandler {
  async handle(event: PasswordChangedEvent) {
    console.log("Password changed:", event.userId.value);
  }
}