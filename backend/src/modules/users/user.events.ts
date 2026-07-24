import { eventBus } from "../../shared/infrastructure/events/event-bus.instance";
import { userHandlers } from "./user.container";

import { registerUserEventHandlers } from "./infrastructure/messaging/event-handler-registry";

export function initializeUserEvents(): void {

    registerUserEventHandlers(
        eventBus,
        userHandlers
    );

    console.log("[UserModule] Events initialized");

}