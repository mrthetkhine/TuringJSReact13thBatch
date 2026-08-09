import {ApiResponse} from "@/lib/ApiResponse";
import {Todo} from '@/lib/types';
import axiosClient from "@/lib/axiosClient";

export async function getAllTodos():Promise<Todo[]> {
    let response = await axiosClient.get<ApiResponse<Todo[]>>('/api/todos');
    //console.log('getAllTodos response ', response);
    return response.data.data;
}