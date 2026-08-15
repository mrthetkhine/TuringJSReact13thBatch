'use server';

import {apiDeleteReview, apiSaveReview, apiUpdateReview} from "@/lib/api/reviewApi";
import {Movie, Review} from "@/lib/types";
import {revalidatePath} from "next/cache";
import {ReviewFormData,reviewSchema} from "@/lib/schema/reviewSchema";
import {apiDeleteMovieById} from "@/lib/api/movieApi";

export async function saveOrUpdateReviewAction(reviewFormData:ReviewFormData):Promise<any>
{
    const validateReviewForm = reviewSchema.safeParse(reviewFormData);
    console.log('validateReviewForm', validateReviewForm);
    if(validateReviewForm.success)
    {
        let data:any = validateReviewForm.data;
        console.log('Validation Success ',data);


        if(!data._id)
        {
            //await delay(4000);
            let review = await apiSaveReview(data as Review);
            revalidatePath(`/movies/${review.movie}`);
            return review;
        }
        else {
            //update
            let review = await apiUpdateReview(data as Review);
            revalidatePath(`/movies/${review.movie}`);
            return review;
        }

    }
    else
    {
        console.log('Error ');
        return validateReviewForm.error;
    }
}
export async function deleteReviewByIdAction(review:Review):Promise<Review> {
    let deletedReview = await apiDeleteReview(review);
    revalidatePath(`/movies/${review.movie}`);
    return deletedReview;
}
