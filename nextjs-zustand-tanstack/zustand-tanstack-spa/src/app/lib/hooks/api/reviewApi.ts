import {Review} from "@/app/lib/types";
import axiosClient from '../../axiosInstance';
import {ApiResponse} from "@/app/lib/ApiResponse";

export async function apiGetAllReviewsByMovie(movieId:string):Promise<Review[]> {
    let response = await axiosClient.get<ApiResponse<Review[]>>(`/api/reviews/movies/${movieId}`);
    return response.data.data;
}
export async function apiSaveReview(review:Partial<Review>):Promise<Review> {
    let response = await axiosClient.post<ApiResponse<Review>>(`/api/reviews`,review);
    return response.data.data;
}
export async function apiUpdateReview(review:Review):Promise<Review> {
    let response = await axiosClient.put<ApiResponse<Review>>(`/api/reviews/${review._id}`,review);
    return response.data.data;
}
export async function apiDeleteReview(review:Review):Promise<Review> {
    let response = await axiosClient.delete<ApiResponse<Review>>(`/api/reviews/${review._id}`);
    return response.data.data;
}