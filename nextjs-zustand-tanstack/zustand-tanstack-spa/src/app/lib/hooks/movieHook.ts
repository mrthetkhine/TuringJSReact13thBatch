import {useMutation, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {apiDeleteMovieById, apiGetAllMovies, apiSaveMovie, apiUpdateMovie} from "@/app/lib/hooks/api/movieApi";
import { Movie } from "../types";


export function useLoadAllMovies()
{
    return useQuery({
        queryKey: ['movies'],
        queryFn: apiGetAllMovies,

    });
}
export function useGetMovieById(id:string)
{
    const data = useSuspenseQuery({
        queryKey: ['movies'],
        queryFn: apiGetAllMovies // Provide the function to fetch data if needed
    });
    return {
        movie:data?.data?.filter((movie:Movie)=>movie._id===id)[0]
    }
}
export function useSaveMovie()
{
    return useMutation({
        mutationFn:(movie:Partial<Movie>)=>apiSaveMovie(movie),
        onMutate: (variables, context) => {
            const oldState:Movie[] = context.client.getQueryData(['movies'])??[];

            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id`, onMutateResult);
            context.client.setQueryData(['movies'], onMutateResult?.oldState);
        },
        onSuccess: (data, variables, onMutateResult, context) => {

            console.log('todo success  ',data);
            //Manual update
            context.client.setQueryData(["movies"],(oldState:Movie[]) => [...oldState,data]);

        },

    })
}
export function useUpdateMovie()
{
    return useMutation({
        mutationFn:(movie:Movie)=>apiUpdateMovie(movie),

        onMutate: (movie, context) => {
            const oldState:Movie[] = context.client.getQueryData(['movies'])??[];
            context.client.setQueryData(["movies"],(oldState:Movie[]) => oldState.map(mv=>mv._id==movie._id?movie:mv));
            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id`, onMutateResult);
            context.client.setQueryData(['movies'], onMutateResult?.oldState);
        },
        onSuccess: (data, variables, onMutateResult, context) => {

            console.log('todo success  ',data);
            //Manual update
        },

    })
}
export function useDeleteMovie()
{
    return useMutation({
        mutationFn:(movie:Movie)=>apiDeleteMovieById(movie._id!!),

        onMutate: (movie, context) => {
            const oldState:Movie[] = context.client.getQueryData(['movies'])??[];
            context.client.setQueryData(["movies"],(oldState:Movie[]) => oldState.filter(mv=>mv._id!=movie._id));
            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id`, onMutateResult);
            context.client.setQueryData(['movies'], onMutateResult?.oldState);
        },
        onSuccess: (data, variables, onMutateResult, context) => {

            console.log('todo success  ',data);
            //Manual update
        },

    })
}