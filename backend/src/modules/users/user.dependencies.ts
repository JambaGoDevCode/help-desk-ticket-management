import { UserRepositoryImpl } from "./infrastructure/persistence/repositories/user.mongo.repository";
import { UserSessionMongoRepository } from "./infrastructure/persistence/repositories/user-session.mongo.repository";
import { UserReadRepositoryMongo } from "./infrastructure/persistence/repositories/user.read.repository.mongo"; 

import { PasswordPolicyService } from "./domain/services/password-policy.service";
import { UserPolicyService } from "./domain/services/user-policy.service";
import { UserAuthPolicyService } from "./domain/services/authentication-policy.service";
import { UserSessionService } from "./domain/services/user-session.service";

import { UserPublisher } from "./infrastructure/messaging/publishers/user.publisher";
import { UserGateway } from "./infrastructure/realtime/user.gateway";

export const userDependencies = {

    repositories: {

        userRepository: new UserRepositoryImpl(),

        sessionRepository: new UserSessionMongoRepository(),

        readRepository: new UserReadRepositoryMongo(),

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

        gateway: new UserGateway(new UserSessionService()),

    },

};