import {Review} from "@/lib/types";
import axiosClient from "@/lib/axiosClient";
import {ApiResponse} from "@/lib/ApiResponse";

export async function apiGetAllReviewsByMovie(movieId:string):Promise<Review[]> {
    let response = await axiosClient.get<ApiResponse<Review[]>>(`/api/reviews/movies/${movieId}`);
    return response.data.data;
}