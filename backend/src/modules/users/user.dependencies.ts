import { MongoUserRepository } from "./infrastructure/persistence/repositories/user.repository.impl";
import { MongoUserSessionRepository } from "./infrastructure/persistence/repositories/user-session.repository.impl";
import { MongoUserReadRepository } from "./infrastructure/persistence/repositories/user.read.repository.impl";

import { PasswordPolicyService } from "./domain/services/password-policy.service";
import { UserPolicyService } from "./domain/services/user-policy.service";
import { UserAuthPolicyService } from "./domain/services/user-auth-policy.service";
import { UserSessionService } from "./domain/services/user-session.service";

import { UserPublisher } from "./infrastructure/messaging/publishers/user.publisher";
import { UserGateway } from "./infrastructure/realtime/user.gateway";

export const userDependencies = {

    repositories: {

        userRepository: new MongoUserRepository(),

        sessionRepository: new MongoUserSessionRepository(),

        readRepository: new MongoUserReadRepository(),

    },

    services: {

        passwordPolicy: new PasswordPolicyService(),

        userPolicy: new UserPolicyService(),

        authPolicy: new UserAuthPolicyService(),

        sessionService: new UserSessionService(),

    },

    messaging: {

        publisher: new UserPublisher(),

    },

    realtime: {

        gateway: new UserGateway(),

    },

};