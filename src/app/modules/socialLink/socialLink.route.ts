import { Router } from "express";
import { SocialLinkControllers } from "./socialLink.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { socialLinkZodSchema } from "./socialLink.validation";

const router = Router();

router.post(
  "/",
  validateRequest(socialLinkZodSchema),
  SocialLinkControllers.createSocialLink
);

router.get("/", SocialLinkControllers.getAllSocialLinks);
router.get("/:id", SocialLinkControllers.getSingleSocialLink);
router.delete("/:id", SocialLinkControllers.deleteSocialLink);
router.patch("/:id", SocialLinkControllers.updateSocialLink);

export const SocialLinkRoutes = router;
