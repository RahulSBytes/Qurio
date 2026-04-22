import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Provide a valid email"),
  password: z
    .string()
    .min(6, { message: "The password has to be less than 6 character" })
    .max(100, { message: "The password shouldn't exceed 100 character" }),
});


export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must not exceed 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscore"
    ),

  name: z
    .string()
    .min(1, "Name is required")
    .max(30, "Name must not exceed 30 characters")
    .regex(/^[a-zA-Z ]+$/, "Name should contain letters and spaces only"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must not exceed 100 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});
