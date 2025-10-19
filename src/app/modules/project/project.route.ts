import { Router } from "express";
import { ProjectControllers } from "./project.controller";
import { createProjectZodSchema } from "./project.validation";
import { validateRequest } from "../../middlewares/validateRequest";
// import { UserControllers } from "./user.controller";


const router = Router();
router.post(
  "/",
  validateRequest(createProjectZodSchema),
  ProjectControllers.createProject
);
router.get(
  "/",
  validateRequest(createProjectZodSchema),
  ProjectControllers.createProject
);


export const ProjectRoutes = router;
