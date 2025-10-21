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
  ProjectControllers.getAllProject
);
router.get(
  "/:id",
  ProjectControllers.getSingleProject
);
router.delete(
  "/:id",
  ProjectControllers.deleteProject
);
router.patch(
  "/:id",
  ProjectControllers.updateProject
);


export const ProjectRoutes = router;
