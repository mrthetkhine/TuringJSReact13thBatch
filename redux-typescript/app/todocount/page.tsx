'use client';
import {useGetTodosQuery} from "@/lib/features/todo/todoApiSlice";

export default function TodoCount()
{
    const { data:todos, isError, isLoading, isSuccess } = useGetTodosQuery(undefined);
    return (<div>
        {
            isSuccess && <h3>Todo count {todos?.length}</h3>
        }

    </div>);
}