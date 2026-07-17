import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").max(100, "Title is too long"),
  author: z.string().min(2, "Author must be at least 2 characters").max(100, "Author is too long"),
  isbn: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters").max(1000, "Description is too long"),
  condition: z.enum(["NEW", "LIKE_NEW", "GOOD", "FAIR", "POOR"], {
    message: "Please select a book condition",
  }),
  category: z.string().min(1, "Please select a category"),
  price: z.string().optional(), // Keeping it string for form input, will parse to float on backend
});

export type BookValues = z.infer<typeof bookSchema>;
