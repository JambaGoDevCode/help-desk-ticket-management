import { userDependencies } from "./user.dependencies";

/*
|--------------------------------------------------------------------------
| Use Cases
|--------------------------------------------------------------------------
*/

import { CreateUserUseCase } from "./application/use-cases/create-user.use-case";
import { UpdateUserUseCase } from "./application/use-cases/update-user.use-case";
import { DeactivateUserUseCase } from "./application/use-cases/deactivate-user.use-case";
import { ChangePasswordUseCase } from "./application/use-cases/change-password.use-case";
import { LoginUserUseCase } from "./application/use-cases/login-user.use-case";
import { GetUserProfileUseCase } from "./application/use-cases/get-user-profile.use-case";
import { ListUsersUseCase } from "./application/use-cases/list-users.use-case";

/*
|--------------------------------------------------------------------------
| Event Handlers
|--------------------------------------------------------------------------
*/

import { UserCreatedHandler } from "./application/handlers/user-created.handler";
import { UserUpdatedHandler } from "./application/handlers/user-updated.handler";
import { PasswordChangedHandler } from "./application/handlers/password-changed.handler";
import { UserLoggedInHandler } from "./application/handlers/user-logged-in.handler";
import { UserRoleChangedHandler } from "./application/handlers/user-role-changed.handler";

const { repositories, services, messaging } = userDependencies;

/*
|--------------------------------------------------------------------------
| Use Cases
|--------------------------------------------------------------------------
*/

export const userUseCases = {

    createUser: new CreateUserUseCase(
        repositories.userRepository,
        services.passwordPolicy,
        messaging.publisher
    ),

    updateUser: new UpdateUserUseCase(
        repositories.userRepository,
        messaging.publisher
    ),

    deactivateUser: new DeactivateUserUseCase(
        repositories.userRepository,
        messaging.publisher
    ),

    changePassword: new ChangePasswordUseCase(
        repositories.userRepository,
        services.passwordPolicy,
        messaging.publisher
    ),

    loginUser: new LoginUserUseCase(
        repositories.userRepository,
        repositories.sessionRepository,
        services.authPolicy,
        services.sessionService,
        messaging.publisher
    ),

    getUserProfile: new GetUserProfileUseCase(
        repositories.userRepository
    ),

    listUsers: new ListUsersUseCase(
        repositories.readRepository
    ),

};

/*
|--------------------------------------------------------------------------
| Event Handlers
|--------------------------------------------------------------------------
*/

export const userHandlers = {

    userCreatedHandler: new UserCreatedHandler(),

    userUpdatedHandler: new UserUpdatedHandler(),

    passwordChangedHandler: new PasswordChangedHandler(),

    userLoggedInHandler: new UserLoggedInHandler(),

    userRoleChangedHandler: new UserRoleChangedHandler(),

};