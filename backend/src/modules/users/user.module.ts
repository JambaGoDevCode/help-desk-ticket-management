import { Router } from "express";

import { initializeUserEvents } from "./user.events";
import { userUseCases } from "./user.container";

import { UserController } from "./presentation/controllers/user.controller";
import { AuthController } from "./presentation/controllers/auth.controller";
import { ProfileController } from "./presentation/controllers/profile.controller";

/*
|--------------------------------------------------------------------------
| Events
|--------------------------------------------------------------------------
*/

initializeUserEvents();

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
*/

const router = Router();

/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/

const userController = new UserController(
    userUseCases.createUser,
    userUseCases.updateUser,
    userUseCases.deactivateUser,
    userUseCases.listUsers
);

const authController = new AuthController(
    userUseCases.loginUser,
    userUseCases.changePassword
);

const profileController = new ProfileController(
    userUseCases.getUserProfile
);

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/",
    userController.list.bind(userController)
);

router.post(
    "/",
    userController.create.bind(userController)
);

router.put(
    "/:id",
    userController.update.bind(userController)
);

router.patch(
    "/:id/deactivate",
    userController.deactivate.bind(userController)
);

/*
|--------------------------------------------------------------------------
| Profile Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/me",
    profileController.get.bind(profileController)
);

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

router.post(
    "/login",
    authController.login.bind(authController)
);

router.patch(
    "/change-password",
    authController.changePassword.bind(authController)
);

/*
|--------------------------------------------------------------------------
| Module
|--------------------------------------------------------------------------
*/

export const UserModule = {
    router,
};