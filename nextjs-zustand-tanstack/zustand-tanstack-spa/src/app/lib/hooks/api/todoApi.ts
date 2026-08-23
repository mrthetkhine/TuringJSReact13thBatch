import {Todo} from '@/app/lib/types';
import axiosInstance from '../../axiosInstance';
import {ApiResponse} from "@/app/lib/ApiResponse";

export async function apiLoadAllTodos({queryKey}: {queryKey:any}  ):Promise<Todo[]>
{
    console.log("apiLoadAllTodos ",queryKey);
    let response = await axiosInstance.get<ApiResponse<Todo[]>>(`/api/todos`);
    let json = await response.data;
    return json.data;
}
export async function apiSaveTodo(todo:Partial<Todo> ):Promise<Todo>
{

    let response = await axiosInstance.post<ApiResponse<Todo>>(`/api/todos`,todo);
    let json = await response.data;
    return json.data;
}
export async function apiDeleteTodoById(id:string):Promise<Todo>
{
    let response = await axiosInstance.delete<ApiResponse<Todo>>(`/api/todos/${id}`,);
    let json = await response.data;
    return json.data;
}