// middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from "express";

export const isAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user; // assume req.user is set from JWT middleware
  if (user?.role_id !== 1) {
    return res.status(403).json({ message: "Admin only" });
  }
  next();
};
