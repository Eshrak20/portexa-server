import { Router } from "express";
import { TestimonialControllers } from "./testimonial.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { testimonialZodSchema } from "./testimonial.validation";

const router = Router();

router.post("/", validateRequest(testimonialZodSchema), TestimonialControllers.createTestimonial);
router.get("/", TestimonialControllers.getAllTestimonials);
router.get("/:id", TestimonialControllers.getSingleTestimonial);
router.delete("/:id", TestimonialControllers.deleteTestimonial);
router.patch("/:id", validateRequest(testimonialZodSchema), TestimonialControllers.updateTestimonial);

export const TestimonialRoutes = router;
