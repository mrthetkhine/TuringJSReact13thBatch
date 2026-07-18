import {useGetQuotesQuery} from "@/lib/features/quotes/quotesApiSlice";
import {useDeleteTodoMutation, useGetTodosQuery} from "@/lib/features/todo/todoApiSlice";
import {addTodo, deleteTodo, updateTodo} from "@/lib/features/todo/todoSlice";
import {Todo, TodoEntry, TodoItem} from "@/app/components/TodoWithReducer";

export default function TodoRtkQuery()
{
    const { data:todos, isError, isLoading, isSuccess } = useGetTodosQuery(undefined);
    const [deleteTodo, result] = useDeleteTodoMutation();
    const addTodoHandler=(title:string)=>{
        console.log('Add Todo ',title);

    };

    const onDeleteHandler=(todo:Todo)=>{
        console.log('Delete todo ',todo);
        deleteTodo(todo);

    }
    const onUpdateTodoHandler =(todo:Todo)=>{
        console.log('Update todo ',todo);

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
    console.log('is success ',isSuccess, ' data ',todos?.data);
    if (isSuccess) {
       return(
           <div>
               <TodoEntry onAddTodo={addTodoHandler}/>
               {
                   todos.data.map(td=><TodoItem key={td._id}
                                                todo={td}
                                                onDeleteTodo={onDeleteHandler}
                                                onUpdateTodo={onUpdateTodoHandler}
                   />)
               }
           </div>)
    }
}