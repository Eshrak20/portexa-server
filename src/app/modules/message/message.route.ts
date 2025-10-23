import { Router } from "express";
import { MessageControllers } from "./message.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { messageZodSchema } from "./message.validation";

const router = Router();

router.post("/", validateRequest(messageZodSchema), MessageControllers.createMessage);
router.get("/", MessageControllers.getAllMessages);
router.get("/:id", MessageControllers.getSingleMessage);
router.delete("/:id", MessageControllers.deleteMessage);

export const MessageRoutes = router;
