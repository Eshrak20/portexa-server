import { z } from "zod";

export const messageZodSchema = z.object({
  name: z
    .string({ message: "Name must be a string" })
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." }),

  email: z
    .string({ message: "Email must be a string" })
    .email({ message: "Email must be a valid email address." }),

  message: z
    .string({ message: "Message must be a string" })
    .min(5, { message: "Message must be at least 5 characters long." }),
});
