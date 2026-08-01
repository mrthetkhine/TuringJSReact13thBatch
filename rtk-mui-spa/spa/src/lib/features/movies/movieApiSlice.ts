import {Todo, todoApiSlice} from "@/lib/features/todo/todoApiSlice";
import {ApiResponse} from "@/util/ApiResponse";

export interface Director
{
    _id?: string;
    name:string;
    phoneNo?:string;
}
export interface Movie
{
    _id?: string;
    title:string;
    director:Director;
    year:number;
    genre:string[];
}
export const movieApiSlice = todoApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllMovies: build.query<Movie[], undefined>({
            query: () => `/api/movies`,
            transformResponse: (response: ApiResponse<Movie[]>, meta, arg):Array<Movie> =>response.data,
            providesTags: (result, error, id) => [{ type: "Movies", id }],
        }),
        saveMovie: build.mutation<ApiResponse<Movie>, Movie>({
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
        }),
    }),

    overrideExisting: false,
})
export const {
    useGetAllMoviesQuery,
    useSaveMovieMutation,
    useUpdateMovieMutation,
    useDeleteMovieMutation,
} = movieApiSlice;