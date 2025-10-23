import { z } from "zod";

export const LikeValidation = {
  toggle: z.object({
    blogId: z.number(),
    ip_address: z.string(),
  }),
};
