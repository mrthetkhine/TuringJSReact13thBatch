import {z} from "zod";
/*
 "_id": "6a25504e51612f72429d43c8",
        "title": "The Odyssey",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "6a25504e51612f72429d43c9"
        },
        "year": 2025,
        "genre": [],
* */
export const movieSchema = z.object({
    _id: z
        .string()
        .optional(),
    title: z
        .string()
        .min(3, "Title must be at least 3 characters")
        .max(40, "Title cannot exceed 40 characters"),
    director: z.object({
        _id: z
            .string()
            .optional(),
        name: z
            .string()
            .min(3, "Name must be at least 3 characters")
            .max(40, "Name cannot exceed 40 characters"),
    }),
    year:z.coerce.number<number>({
        message: "Year is required"
    }),
    genre: z.array(
        z.object({
            value: z.string()
                .min(3, "Genre must be at least 3 characters")
        })
    )
        //.optional(),
        //.min(1, "Genre cannot be empty")

});
export type MovieFormData = z.infer<typeof movieSchema>;