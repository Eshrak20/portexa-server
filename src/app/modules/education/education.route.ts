import { Router } from "express";
import { EducationControllers } from "./education.controller";
import { educationZodSchema } from "./education.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/",
  validateRequest(educationZodSchema),
  EducationControllers.createEducation
);

router.get("/", EducationControllers.getAllEducation);

router.get("/:id", EducationControllers.getSingleEducation);

router.delete("/:id", EducationControllers.deleteEducation);

router.patch(
  "/:id",
  validateRequest(educationZodSchema),
  EducationControllers.updateEducation
);

export const EducationRoutes = router;
