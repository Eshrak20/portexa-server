import { z } from "zod";

export const ViewValidation = {
  create: z.object({
    blogId: z.number(),
    ip_address: z.string(),
    duration_seconds: z.string(),
  }),
};
