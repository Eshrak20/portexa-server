import { Router } from "express";
import { SkillControllers } from "./skill.controller";
import { skillZodSchema } from "./skill.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = Router();

// Create Skill
router.post("/", validateRequest(skillZodSchema), SkillControllers.createSkill);

// Get all Skills
router.get("/", SkillControllers.getAllSkill);

// Get single Skill
router.get("/:id", SkillControllers.getSingleSkill);

// Delete Skill
router.delete("/:id", SkillControllers.deleteSkill);

// Update Skill
router.patch("/:id", validateRequest(skillZodSchema), SkillControllers.updateSkill);

export const SkillRoutes = router;
