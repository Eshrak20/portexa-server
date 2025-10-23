import { Router } from "express";
import { CommentController } from "./comment.controller";

const router = Router();


router.post("/", CommentController.createComment);
router.put("/", CommentController.updateComment);
router.delete("/:id", CommentController.deleteComment);
router.get("/:blogId", CommentController.listComments);

export const CommentRoutes = router;
