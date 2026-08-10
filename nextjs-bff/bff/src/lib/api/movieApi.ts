import {ApiResponse} from "@/lib/ApiResponse";
import {Movie} from '@/lib/types';
import axiosClient from "@/lib/axiosClient";

export async function apiGetAllMovies():Promise<Movie[]> {
    let response = await axiosClient.get<ApiResponse<Movie[]>>('/api/movies');
    //console.log('getAllTodos response ', response);
    return response.data.data;
}
export async function apiGetMovieById(id:string):Promise<Movie> {
    let response = await axiosClient.get<ApiResponse<Movie>>(`/api/movies/${id}`);
    //console.log('getAllTodos response ', response);
    return response.data.data;
}
export async function apiSaveMovie(movie:Partial<Movie>):Promise<Movie> {
    let response = await axiosClient.post<ApiResponse<Movie>>(`/api/movies`,movie);
    return response.data.data;
}
export async function apiUpdateMovie(movie:Movie):Promise<Movie> {
    let response = await axiosClient.put<ApiResponse<Movie>>(`/api/movies/${movie._id}`,movie);
    return response.data.data;
}
export async function apiDeleteMovieById(id:string):Promise<Movie> {
    let response = await axiosClient.delete<ApiResponse<Movie>>(`/api/movies/${id}`);
    return response.data.data;
}