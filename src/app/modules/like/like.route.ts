import { Router } from "express";
import { LikeController } from "./like.controller";

const router = Router();


router.post("/toggle", LikeController.toggleLike);
router.get("/count/:blogId", LikeController.countLikes);

export const LikeRoutes = router;
