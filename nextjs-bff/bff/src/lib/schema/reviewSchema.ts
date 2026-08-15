import {z} from "zod";
export const reviewSchema = z.object({
    _id: z
        .string()
        .optional(),
    movie: z
        .string(),
    review: z
        .string()
        .min(3, "Review must be at least 3 characters")
        .max(40, "Review cannot exceed 40 characters"),
    rating:z.coerce.number<number>({
        message: "Rating is required"
    }),

});
export type ReviewFormData = z.infer<typeof reviewSchema>;