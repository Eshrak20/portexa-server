// modules/user/user.validation.ts
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string(),
  password: z.string().min(6),
  role_id: z.union([z.literal(1), z.literal(2)]), // 1 = admin, 2 = moderator
});

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().optional(),
  password: z.string().min(6).optional(),
  role_id: z.union([z.literal(1), z.literal(2)]).optional(),
});
