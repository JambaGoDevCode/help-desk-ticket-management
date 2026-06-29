import { registerUserEventHandlers } from "./infrastructure/messaging/event-handler-registry";

export function initializeUserEvents(): void {

    registerUserEventHandlers();

    console.log("[UserModule] Events initialized");

}