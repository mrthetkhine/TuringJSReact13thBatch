import {ApiResponse} from "@/lib/ApiResponse";
import {Movie} from '@/lib/types';
import axiosClient from "@/lib/axiosClient";

export async function getAllMovies():Promise<Movie[]> {
    let response = await axiosClient.get<ApiResponse<Movie[]>>('/api/movies');
    //console.log('getAllTodos response ', response);
    return response.data.data;
}