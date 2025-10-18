import { Router } from "express";
import { BlogControllers } from "./blog.controller";
// import { UserControllers } from "./user.controller";


const router = Router();
router.post(
  "/",
//   validateRequest(createUserZodSchema),
  BlogControllers.createBlog

);


export const BlogRoutes = router;
