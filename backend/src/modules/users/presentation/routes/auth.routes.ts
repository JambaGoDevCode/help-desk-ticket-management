import { Router } from "express";

export const authRoutes = Router();

authRoutes.post("/login", (req, res) => {
  res.send("Login endpoint");
});