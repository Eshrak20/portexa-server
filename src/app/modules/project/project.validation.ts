import { z } from "zod";

export const createProjectZodSchema = z.object({
  title: z
    .string({ message: "Title must be a string" })
    .min(3, { message: "Title must be at least 3 characters long." })
    .max(100, { message: "Title cannot exceed 100 characters." }),

  slug: z
    .string({ message: "Slug must be a string" })
    .min(3, { message: "Slug must be at least 3 characters long." })
    .max(100, { message: "Slug cannot exceed 100 characters." }),

  short_description: z
    .string({ message: "Short description must be a string" })
    .min(10, { message: "Short description must be at least 10 characters long." })
    .max(255, { message: "Short description cannot exceed 255 characters." }),

  description: z
    .string({ message: "Description must be a string" })
    .min(10, { message: "Description must be at least 10 characters long." }),

  features: z
    .array(z.string({ message: "Feature must be a string" }))
    .min(1, { message: "At least one feature is required." }),

  technologies: z
    .array(z.string({ message: "Technology must be a string" }))
    .min(1, { message: "At least one technology is required." }),

  thumbnail: z
    .string({ message: "Thumbnail must be a string (URL or path)" })
    .url({ message: "Thumbnail must be a valid URL." })
    .optional(),

  screenshots: z
    .array(z.string({ message: "Screenshot must be a string (URL)" }))
    .optional(),

  video_link: z
    .string({ message: "Video link must be a string" })
    .url({ message: "Video link must be a valid URL." })
    .optional(),

  github_link: z
    .string({ message: "GitHub link must be a string" })
    .url({ message: "GitHub link must be a valid URL." })
    .optional(),

  category: z
    .string({ message: "Category must be a string" })
    .min(2, { message: "Category must be at least 2 characters long." }),

  live_link: z
    .url({ message: "Live link must be a valid URL." })
    .optional(),

  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),



  is_featured: z
    .boolean({ message: "is_featured must be a boolean" })
    .default(false),

  views: z
    .number({ message: "Views must be a number" })
    .int()
    .min(0)
    .optional(),
});

export const updateProjectZodSchema = z.object({
  title: z
    .string({ message: "Title must be a string" })
    .min(3, { message: "Title must be at least 3 characters long." })
    .max(100, { message: "Title cannot exceed 100 characters." })
    .optional(),

  slug: z
    .string({ message: "Slug must be a string" })
    .min(3, { message: "Slug must be at least 3 characters long." })
    .max(100, { message: "Slug cannot exceed 100 characters." })
    .optional(),

  short_description: z
    .string({ message: "Short description must be a string" })
    .min(10, { message: "Short description must be at least 10 characters long." })
    .max(255, { message: "Short description cannot exceed 255 characters." })
    .optional(),

  description: z
    .string({ message: "Description must be a string" })
    .min(10, { message: "Description must be at least 10 characters long." })
    .optional(),

  features: z
    .array(z.string({ message: "Feature must be a string" }))
    .min(1, { message: "At least one feature is required." })
    .optional(),

  technologies: z
    .array(z.string({ message: "Technology must be a string" }))
    .min(1, { message: "At least one technology is required." })
    .optional(),

  thumbnail: z
    .string({ message: "Thumbnail must be a string" })
    .url({ message: "Thumbnail must be a valid URL." })
    .optional(),

  screenshots: z
    .array(z.string({ message: "Screenshot must be a string" }))
    .optional(),

  video_link: z
    .url({ message: "Video link must be a valid URL." })
    .optional(),

  github_link: z
    .string({ message: "GitHub link must be a string" })
    .url({ message: "GitHub link must be a valid URL." })
    .optional(),

  category: z
    .string({ message: "Category must be a string" })
    .min(2, { message: "Category must be at least 2 characters long." })
    .optional(),

  live_link: z
    .string({ message: "Live link must be a string" })
    .url({ message: "Live link must be a valid URL." })
    .optional(),

  status: z
    .enum(["draft", "published", "archived"])
    .optional(),

  is_featured: z
    .boolean({ message: "is_featured must be a boolean" })
    .optional(),

  views: z
    .number({ message: "Views must be a number" })
    .int()
    .min(0)
    .optional(),
});
