import {todoApiSlice} from "@/lib/features/todo/todoApiSlice";
import {ApiResponse} from "@/util/ApiResponse";

export interface Review
{
    _id?: string;
    movie: string;
    rating: number;
    review: string;

}
export const reviewApiSlice = todoApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllReviewByMovieId: build.query<Review[], string>({
            query: (movieId:string) => `/api/reviews/movies/${movieId}`,
            transformResponse: (response: ApiResponse<Review[]>, meta, arg):Array<Review> =>response.data,
            providesTags: (result, error, id) => [{ type: "Reviews", id }],
        }),
        saveReview: build.mutation<ApiResponse<Review>, Review>({
            query: (review:Review) =>({
                url:  `/api/reviews`,
                method: 'POST',
                body:review,
            }),
            //invalidatesTags: ['Todos'],
            //optimistic update
            async onQueryStarted(review, { dispatch, queryFulfilled }) {
                console.log('saved review ',review);
                try {
                    const { data: savedReview } = await queryFulfilled
                    const saveResult = dispatch(
                        reviewApiSlice.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {
                            draft.push(savedReview.data);
                            return draft;
                        }),
                    )
                } catch(e) {
                    console.log('error ',e);
                }
            },
        }),
        //optimistic update
        updateReview: build.mutation<ApiResponse<Review>, Review>({
            query: (review:Review) =>({
                url:  `/api/reviews/${review._id}`,
                method: 'PUT',
                body:review,
            }),


            async onQueryStarted(review, { dispatch, queryFulfilled }) {
                const updateResult = dispatch(
                    reviewApiSlice.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {
                        draft = draft.map(r=>r._id==review._id?review:r);
                        return draft;
                    }),
                )
                try {
                    await queryFulfilled
                } catch {
                    updateResult.undo()
                }
            },
        }),
        //optimistic update
        deleteReview: build.mutation<ApiResponse<Review>, Review>({
            query: (review:Review) =>({
                url:  `/api/reviews/${review._id}`,
                method: 'DELETE',
            }),
            //invalidatesTags: ['Todos'],

            async onQueryStarted(review, { dispatch, queryFulfilled }) {
                const deleteResult = dispatch(
                    reviewApiSlice.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {
                        draft = draft.filter(r=>r._id!==review._id);
                        return draft;
                    }),
                )
                try {
                    await queryFulfilled
                } catch {
                    deleteResult.undo()
                }
            },
        }),
       /*

        */
    }),

    overrideExisting: false,
})
export const {
    useGetAllReviewByMovieIdQuery,
    useSaveReviewMutation,
    useUpdateReviewMutation,
    useDeleteReviewMutation,

} = reviewApiSlice;