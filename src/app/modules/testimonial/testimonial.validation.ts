import { z } from "zod";

export const testimonialZodSchema = z.object({
  name: z
    .string({ message: "Name must be a string" })
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." }),

  designation: z
    .string({ message: "Designation must be a string" })
    .min(2, { message: "Designation must be at least 2 characters long." })
    .max(100, { message: "Designation cannot exceed 100 characters." }),

  avatar: z
    .string({ message: "Avatar must be a string (URL or path)" })
    .url({ message: "Avatar must be a valid URL." }),

  rating: z
    .string({ message: "Rating must be a string" })
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 5, {
      message: "Rating must be a number between 0 and 5",
    }),

  feedback: z
    .string({ message: "Feedback must be a string" })
    .min(10, { message: "Feedback must be at least 10 characters long." }),
});
