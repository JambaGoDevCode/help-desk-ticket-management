import { Request, Response, NextFunction } from "express";

export function tenantMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const companyId =
    req.headers["x-company-id"];

  if (!companyId) {

    return res.status(400).json({
      message: "Company Id required",
    });
  }

  req.companyId = companyId as string;

  next();
}