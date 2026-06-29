import { Request, Response, NextFunction } from "express";

export class TenantMiddleware {
  static execute(req: Request, res: Response, next: NextFunction) {
    const tenantId =
      req.headers["x-tenant-id"] || (req as any).user?.tenantId;

    if (!tenantId) {
      return res.status(400).json({ message: "Tenant required" });
    }

    (req as any).tenantId = tenantId;

    next();
  }
}