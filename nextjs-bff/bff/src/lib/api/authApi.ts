import {AuthUser,AuthResponse} from "@/lib/types";
import axiosClient from "@/lib/axiosClient";
import {ApiResponse} from "@/lib/ApiResponse";

export async function apiLogin(authUser:AuthUser):Promise<AuthResponse> {
    let response = await axiosClient.post<AuthResponse>(`/api/users/login`,authUser);
    return response.data;
}