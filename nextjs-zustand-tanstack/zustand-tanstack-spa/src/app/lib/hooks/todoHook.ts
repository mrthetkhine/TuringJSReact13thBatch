import { useQuery } from '@tanstack/react-query';
import {apiLoadAllTodos} from '@/app/lib/hooks/api/todoApi';

export function useLoadAllTodos()
{
    return useQuery({
        queryKey: ['todos'],
        queryFn: apiLoadAllTodos,
        //enabled: false,
    });
}