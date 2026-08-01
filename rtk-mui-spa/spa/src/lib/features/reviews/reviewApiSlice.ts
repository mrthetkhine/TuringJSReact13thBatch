import {todoApiSlice} from "@/lib/features/todo/todoApiSlice";
import {ApiResponse} from "@/util/ApiResponse";
import {Movie} from "@/lib/features/movies/movieApiSlice";

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
       /* saveMovie: build.mutation<ApiResponse<Movie>, Movie>({
            query: (movie:Movie) =>({
                url:  `/api/movies`,
                method: 'POST',
                body:movie,
            }),
            //invalidatesTags: ['Todos'],
            //optimistic update
            async onQueryStarted(movie, { dispatch, queryFulfilled }) {
                console.log('saved Movie ',movie);
                try {
                    const { data: savedMovie } = await queryFulfilled
                    const saveResult = dispatch(
                        movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                            draft.push(savedMovie.data);
                            return draft;
                        }),
                    )
                } catch(e) {
                    console.log('error ',e);
                }
            },
        }),
        //optimistic update
        updateMovie: build.mutation<ApiResponse<Movie>, Movie>({
            query: (movie:Movie) =>({
                url:  `/api/movies/${movie._id}`,
                method: 'PUT',
                body:movie,
            }),


            async onQueryStarted(movie, { dispatch, queryFulfilled }) {
                const updateResult = dispatch(
                    movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                        draft = draft.map(mv=>mv._id==movie._id?movie:mv);
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
        deleteMovie: build.mutation<ApiResponse<Movie>, Movie>({
            query: (movie:Movie) =>({
                url:  `/api/movies/${movie._id}`,
                method: 'DELETE',
            }),
            //invalidatesTags: ['Todos'],

            async onQueryStarted(movie, { dispatch, queryFulfilled }) {
                const deleteResult = dispatch(
                    movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                        draft = draft.filter(mv=>mv._id!==movie._id);
                        return draft;
                    }),
                )
                try {
                    await queryFulfilled
                } catch {
                    deleteResult.undo()
                }
            },
        }),*/
    }),

    overrideExisting: false,
})
export const {
    useGetAllReviewByMovieIdQuery,

} = reviewApiSlice;