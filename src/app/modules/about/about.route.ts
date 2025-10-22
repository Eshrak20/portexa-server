import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createAboutZodSchema } from "./about.validation";
import { AboutControllers } from "./about.controller";
// import { UserControllers } from "./user.controller";


const router = Router();
router.post(
  "/",
  validateRequest(createAboutZodSchema),
  AboutControllers.createAbout
);
router.get(
  "/",
  AboutControllers.getAbout
);

router.delete(
  "/:id",
  AboutControllers.deleteAbout
);
router.patch(
  "/:id",
  AboutControllers.updateAbout
);


export const AboutRoutes = router;
