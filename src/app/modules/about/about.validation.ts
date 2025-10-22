import { z } from "zod";

export const createAboutZodSchema = z.object({
  title: z
    .string({ message: "Title must be a string" })
    .min(2, { message: "Title must be at least 2 characters long." })
    .max(200, { message: "Title cannot exceed 200 characters." }),

  description: z
    .string({ message: "Description must be a string" })
    .min(10, { message: "Description must be at least 10 characters long." }),

  image: z
    .url({ message: "Image must be a valid URL." }),

  cv_link: z
    .url({ message: "CV link must be a valid URL." }),

  // Optional relations — these are arrays of related entities
  skills: z.array(z.number().int().positive()).optional(),
  educations: z.array(z.number().int().positive()).optional(),
  experiences: z.array(z.number().int().positive()).optional(),
});
