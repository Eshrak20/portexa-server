import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import { createBlogZodSchema } from "./blog.validation";
import { validateRequest } from "../../middlewares/validateRequest";
// import { UserControllers } from "./user.controller";


const router = Router();
router.post(
  "/",
  validateRequest(createBlogZodSchema),
  BlogControllers.createBlog

);
router.get(
  "/",
  BlogControllers.getAllBlog

);
router.get(
  "/:id",
  BlogControllers.getSingleBlog

);
router.delete(
  "/:id",
  BlogControllers.deleteBlog

);
router.patch(
  "/:id",
  BlogControllers.updateBlog

);


export const BlogRoutes = router;
