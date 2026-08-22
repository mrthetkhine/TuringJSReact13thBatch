import {useMutation, useQuery } from '@tanstack/react-query';
import {apiDeleteTodoById, apiLoadAllTodos, apiSaveTodo} from '@/app/lib/hooks/api/todoApi';
import {Todo} from "@/app/lib/types";
import {queryClient} from "@/app/lib/hooks/queryClient";

export function useLoadAllTodos()
{
    return useQuery({
        queryKey: ['todos'],
        queryFn: apiLoadAllTodos,
        //refetchInterval: 2_000,
        /*placeholderData:[
            {
                _id:'1',
                title:"Todo 1"
            }
        ],*/
        /*initialData:[
            {
                _id:'1',
                title:"Todo 1"
            }
        ]*/
    });
}
export function useSaveTodo()
{
    return useMutation({
        mutationFn:(todo:Partial<Todo>)=>apiSaveTodo(todo),
        onMutate: (variables, context) => {
            // A mutation is about to happen!
            // Optionally return a result containing data to use when for example rolling back
            console.log('onMutate', variables, context);
            return variables;
        },
        onError: (error, variables, onMutateResult, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id`, onMutateResult);
        },
        onSuccess: (data, variables, onMutateResult, context) => {

            console.log('todo success  ',data);

            //Auto fetch
            context.client.invalidateQueries({ queryKey: ['todos'] });

            //Manual update
            //context.client.setQueryData(["todos"],(oldState:Todo[]) => [...oldState,data]);

        },
        onSettled: (data, error, variables, onMutateResult, context) => {
            // Error or success... doesn't matter!
        },
    })
}
//optimistic update
export function useMutationDeleteTodo()
{
    return useMutation({
        mutationFn: apiDeleteTodoById,
        onMutate:async (id,context)=>{
            const oldState:Todo[] = queryClient.getQueryData(['todos'])??[];
            queryClient.setQueryData(['todos'], (oldState:Todo[]) => oldState.filter(td=>td._id!=id))

            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            queryClient.setQueryData(['todos'], onMutateResult?.oldState)
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);
        },
    })
}