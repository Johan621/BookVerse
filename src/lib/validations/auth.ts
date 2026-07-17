import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(1, "Password is required."),
  rememberMe: z.boolean(),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  college: z.string().min(2, "College name is required."),
  department: z.string().min(2, "Department is required."),
  semester: z.string().min(1, "Semester is required."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string(),
  acceptTerms: z.literal(true, {
    message: "You must accept the terms and conditions.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

export type RegisterValues = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export const completeProfileSchema = z.object({
  bio: z.string().max(160, "Bio must be less than 160 characters.").optional(),
  interests: z.string().optional(),
  phone: z.string().optional(),
});

export type CompleteProfileValues = z.infer<typeof completeProfileSchema>;
