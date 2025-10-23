import { Router } from "express";
import { ViewController } from "./view.controller";

const router = Router();

router.post("/", ViewController.createView);
router.get("/count/:blogId", ViewController.countViews);

export const ViewRoutes = router;
