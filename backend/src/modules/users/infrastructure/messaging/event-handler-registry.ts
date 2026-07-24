import { EventBus } from "../../../../shared/infrastructure/events/event-bus"; 

import { UserCreatedHandler } from "../../application/handlers/user-created.handler";
import { UserUpdatedHandler } from "../../application/handlers/user-updated.handler";
import { PasswordChangedHandler } from "../../application/handlers/password-changed.handler";
import { UserLoggedInHandler } from "../../application/handlers/user-logged-in.handler";
import { UserRoleChangedHandler } from "../../application/handlers/user-role-changed.handler";

export function registerUserEventHandlers(
  eventBus: EventBus,
  handlers: {
    userCreatedHandler: UserCreatedHandler;
    userUpdatedHandler: UserUpdatedHandler;
    passwordChangedHandler: PasswordChangedHandler;
    userLoggedInHandler: UserLoggedInHandler;
    userRoleChangedHandler: UserRoleChangedHandler;
  }
): void {
  eventBus.subscribe(
    "user.created",
    handlers.userCreatedHandler.handle.bind(handlers.userCreatedHandler)
  );

  eventBus.subscribe(
    "user.updated",
    handlers.userUpdatedHandler.handle.bind(handlers.userUpdatedHandler)
  );

  eventBus.subscribe(
    "user.password.changed",
    handlers.passwordChangedHandler.handle.bind(
      handlers.passwordChangedHandler
    )
  );

  eventBus.subscribe(
    "user.logged-in",
    handlers.userLoggedInHandler.handle.bind(
      handlers.userLoggedInHandler
    )
  );

  eventBus.subscribe(
    "user.role.changed",
    handlers.userRoleChangedHandler.handle.bind(
      handlers.userRoleChangedHandler
    )
  );
}