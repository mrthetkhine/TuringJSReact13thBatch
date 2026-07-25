
import {Todo, useDeleteTodoMutation, useGetTodosQuery, useSaveTodoMutation,useUpdateTodoMutation} from "@/lib/features/todo/todoApiSlice";
import { TodoItem,TodoEntry } from "./TodoWithReducer";


export default function TodoRtkQuery()
{
    const { data:todos, isError, isLoading, isSuccess,refetch } = useGetTodosQuery(undefined,{
        //pollingInterval: 3000,
    });
    const [deleteTodo, result] = useDeleteTodoMutation();
    const [saveTodo,saveTodoResult] = useSaveTodoMutation();
    const [updateTodo,updateTodoResult] = useUpdateTodoMutation();
    const addTodoHandler=(title:string)=>{
        console.log('Add Todo ',title);
        const newTodo:Todo = {
            title,
            completed:true
        }
        saveTodo(newTodo);

    };

    const onDeleteHandler=(todo:Todo)=>{
        console.log('Delete todo ',todo);
        deleteTodo(todo);

    }
    const onUpdateTodoHandler =(todo:Todo)=>{
        console.log('Update todo ',todo);
        updateTodo(todo)
            .then((data)=>{
                console.log('todo updated',data);
            });
    };
    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    const refetchHandler=()=>{
        refetch();
    }
    //console.log('is success ',isSuccess, ' data ',todos);
    if (isSuccess) {
       return(
           <div>
               <div>
                   <button type="button" onClick={refetchHandler}>Refetch</button>
               </div>


               <TodoEntry onAddTodo={addTodoHandler}/>
               {
                   todos.map(td=><TodoItem key={td._id}
                                                todo={td}
                                                onDeleteTodo={onDeleteHandler}
                                                onUpdateTodo={onUpdateTodoHandler}
                   />)
               }
           </div>)
    }
}