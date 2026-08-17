import {Todo} from '@/app/lib/types';
import axiosInstance from '../../axiosInstance';
import {ApiResponse} from "@/app/lib/ApiResponse";

export async function apiLoadAllTodos():Promise<Todo[]>
{
    console.log("apiLoadAllTodos");
    let response = await axiosInstance.get<ApiResponse<Todo[]>>(`/todos`);
    let json = await response.data;
    return json.data;
}