import { z } from "zod";

export const socialLinkZodSchema = z.object({
  name: z
    .string({ message: "Name must be a string" })
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name cannot exceed 50 characters." }),

  link: z
    .string({ message: "Link must be a string" })
    .url({ message: "Link must be a valid URL." }),

  icon: z
    .string({ message: "Icon must be a string (URL or path)" })
    .min(3, { message: "Icon must be at least 3 characters long." })
});
