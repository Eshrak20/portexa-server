// modules/user/user.routes.ts
import { Router } from "express";
import {
  createUserController,
  getAllUsersController,
  getUserController,
  updateUserController,
  deleteUserController,
} from "./user.controller";
import { isAdminMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

// Admin-only routes
router.post("/", isAdminMiddleware, createUserController);
router.put("/:id", isAdminMiddleware, updateUserController);
router.delete("/:id", isAdminMiddleware, deleteUserController);

// Admin & Moderator can view
router.get("/", getAllUsersController);
router.get("/:id", getUserController);

export default router;
