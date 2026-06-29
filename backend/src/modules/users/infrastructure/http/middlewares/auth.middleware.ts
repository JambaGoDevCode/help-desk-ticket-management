import { Request, Response, NextFunction } from "express";

export class AuthMiddleware {
  static execute(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // mock decode (substituir por JWT real)
      const user = { id: "user-id", role: "ADMIN", tenantId: "tenant-id" };

      (req as any).user = user;

      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  }
}