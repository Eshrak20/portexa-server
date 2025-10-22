import { Router } from "express";
import { ExperienceControllers } from "./experience.controller";
import { experienceZodSchema } from "./experience.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = Router();

// Create Experience
router.post("/", validateRequest(experienceZodSchema), ExperienceControllers.createExperience);

// Get all Experiences
router.get("/", ExperienceControllers.getAllExperience);

// Get single Experience
router.get("/:id", ExperienceControllers.getSingleExperience);

// Delete Experience
router.delete("/:id", ExperienceControllers.deleteExperience);

// Update Experience
router.patch("/:id", validateRequest(experienceZodSchema), ExperienceControllers.updateExperience);

export const ExperienceRoutes = router;
