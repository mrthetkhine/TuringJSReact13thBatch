import {useMutation, useQuery} from "@tanstack/react-query";
import {apiGetAllReviewsByMovie,apiSaveReview,apiUpdateReview,apiDeleteReview} from "@/app/lib/hooks/api/reviewApi";
import {Movie, Review} from "@/app/lib/types";


export function useGetAllReviewByMovieId(movieId:string)
{
    return useQuery({
        queryKey: ['reviews',movieId],
        queryFn: ()=> apiGetAllReviewsByMovie(movieId),
    });
}
export function useSaveReview()
{
    return useMutation({
        mutationFn:(review:Partial<Review>)=>apiSaveReview(review),
        onMutate: (review, context) => {
            const oldState:Review[] = context.client.getQueryData(['reviews',review.movie])??[];

            return {oldState};//context
        },
        onError: (error, review, onMutateResult, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id`, onMutateResult);
            context.client.setQueryData(['reviews',review.movie], onMutateResult?.oldState);
        },
        onSuccess: (data, variables, onMutateResult, context) => {

            console.log('review success  ',data);
            //Manual update
            context.client.setQueryData(["reviews",data.movie],(oldState:Review[]) => [...oldState,data]);

        },

    })
}
export function useUpdateReview()
{
    return useMutation({
        mutationFn:(review:Review)=>apiUpdateReview(review),

        onMutate: (review, context) => {
            const oldState:Review[] = context.client.getQueryData(['reviews',review.movie])??[];
            context.client.setQueryData(['reviews',review.movie],(oldState:Review[]) => oldState.map(rv=>rv._id==review._id?review:rv));
            return {oldState};//context
        },
        onError: (error, review, onMutateResult, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id`, onMutateResult);
            context.client.setQueryData(['reviews',review.movie], onMutateResult?.oldState);
        },
        onSuccess: (data, variables, onMutateResult, context) => {

            console.log('todo success  ',data);
            //Manual update
        },

    })
}
export function useDeleteReview()
{
    return useMutation({
        mutationFn:(review:Review)=>apiDeleteReview(review),

        onMutate: (review, context) => {
            const oldState:Review[] = context.client.getQueryData(['reviews',review.movie])??[];
            context.client.setQueryData(['reviews',review.movie],(oldState:Review[]) => oldState.filter(rv=>rv._id!=review._id));
            return {oldState};//context
        },
        onError: (error, review, onMutateResult, context) => {

            console.log(`rolling back optimistic update with id`, onMutateResult);
            context.client.setQueryData(['reviews',review.movie], onMutateResult?.oldState);
        },
        onSuccess: (data, variables, onMutateResult, context) => {

            console.log('todo success  ',data);
            //Manual update
        },

    })
}