import { Router } from "express";
import { AuthMiddleware } from "../http/middlewares/auth.middleware";
import { RoleMiddleware } from "../http/middlewares/role.middleware";

export const userRoutes = Router();

userRoutes.get(
  "/",
  AuthMiddleware.execute,
  RoleMiddleware.execute(["ADMIN"]),
  (req, res) => res.send("List users")
);

userRoutes.post(
  "/",
  AuthMiddleware.execute,
  RoleMiddleware.execute(["ADMIN"]),
  (req, res) => res.send("Create user")
);