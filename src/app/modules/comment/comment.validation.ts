import { z } from "zod";

export const CommentValidation = {
  create: z.object({
    blogId: z.number(),
    name: z.string().min(1),
    email: z.string().email(),
    content: z.string().min(1),
  }),

  update: z.object({
    id: z.number(),
    content: z.string().min(1),
  }),
};
