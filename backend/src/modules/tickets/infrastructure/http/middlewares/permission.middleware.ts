import { Request, Response, NextFunction } from "express";

export function permissionMiddleware(
  permission: string
) {

  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    next();
  };
}