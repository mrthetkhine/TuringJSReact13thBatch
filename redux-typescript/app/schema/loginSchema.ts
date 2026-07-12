import {z} from "zod";

export const loginSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username cannot exceed 20 characters"),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters"),
});
export type LoginFormData = z.infer<typeof loginSchema>;