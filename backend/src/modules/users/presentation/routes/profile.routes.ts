import { Router } from "express";
import { AuthMiddleware } from "../../infrastructure/http/middlewares/auth.middleware"; 

export const profileRoutes = Router();

profileRoutes.get("/", AuthMiddleware.execute, (req, res) => {
  res.send("Profile");
});