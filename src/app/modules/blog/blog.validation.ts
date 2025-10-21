import { z } from "zod";

export const createBlogZodSchema = z.object({
  title: z
    .string({ message: "Title must be string" })
    .min(2, { message: "Title must be at least 2 characters long." })
    .max(200, { message: "Title cannot exceed 200 characters." }),

  slug: z
    .string({ message: "Slug must be string" })
    .min(2, { message: "Slug must be at least 2 characters long." })
    .max(100, { message: "Slug cannot exceed 100 characters." }),

  content: z
    .string({ message: "Content must be string" })
    .min(10, { message: "Content must be at least 10 characters long." }),

  thumbnail: z
    .string({ message: "Thumbnail must be string" })
    .url({ message: "Thumbnail must be a valid URL" }),

  category: z
    .array(z.string({ message: "Category must be string" }))
    .min(1, { message: "At least one category is required" }),

  tags: z
    .array(z.string({ message: "Tags must be string" }))
    .optional(),

  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),

  read_time: z.string().optional(),

  views: z.number().int().nonnegative().optional(),

  likes: z.number().int().nonnegative().optional(),
});
