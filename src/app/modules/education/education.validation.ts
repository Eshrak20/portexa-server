import { z } from "zod";

export const educationZodSchema = z.object({
  name: z
    .string({ message: "Name must be a string" })
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." })
    .optional(),

  link: z
    .string({ message: "Link must be a string (URL)" })
    .url({ message: "Link must be a valid URL." })
    .optional(),

  icon: z
    .string({ message: "Icon must be a string (URL or path)" })
    .min(3, { message: "Icon must be at least 3 characters long." })
    .optional(),

  institute: z
    .string({ message: "Institute must be a string" })
    .min(3, { message: "Institute must be at least 3 characters long." })
    .max(150, { message: "Institute cannot exceed 150 characters." })
    .optional(),

  start: z
    .string({ message: "Start date must be a valid date string" })
    .transform((val) => new Date(val))
    .refine((date) => !isNaN(date.getTime()), { message: "Invalid start date format." })
    .optional(),

  end: z
    .string({ message: "End date must be a valid date string" })
    .transform((val) => new Date(val))
    .refine((date) => !isNaN(date.getTime()), { message: "Invalid end date format." })
    .optional(),

  aboutId: z
    .number({ message: "aboutId must be a number" })
    .int({ message: "aboutId must be an integer" })
    .optional(),
});
