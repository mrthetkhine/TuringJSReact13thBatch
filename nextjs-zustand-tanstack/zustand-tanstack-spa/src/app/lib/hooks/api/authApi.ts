import {AuthUser,AuthResponse} from "@/app/lib/types";
import axiosClient from "@/app/lib/axiosInstance";
import {ApiResponse} from "@/app/lib/ApiResponse";

export async function apiLogin(authUser:AuthUser):Promise<AuthResponse> {
    let response = await axiosClient.post<AuthResponse>(`/api/users/login`,authUser);
    return response.data;
}