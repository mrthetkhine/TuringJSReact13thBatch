import {useAppDispatch, useAppSelector} from "@/lib/hooks";

import {addTodo, deleteTodo, selectTodo, updateTodo} from "@/lib/features/todo/todoSlice";
import {Todo, TodoEntry, TodoItem} from "@/app/components/TodoWithReducer";

let id = 4;
function getNextId()
{
    return id++;
}
export default function TodoList()
{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodo);
    const addTodoHandler=(title:string)=>{
        console.log('Add Todo ',title);

        const newTodo = {
            id: getNextId(),
            title: title,
            completed: true,
        };
        dispatch(addTodo(newTodo));

    };

    const onDeleteHandler=(todo:Todo)=>{
        console.log('Delete todo ',todo);
        dispatch(deleteTodo(todo));

    }
    const onUpdateTodoHandler =(todo:Todo)=>{
        console.log('Update todo ',todo);
        dispatch(updateTodo(todo));
    };
    return(<div>
        <TodoEntry onAddTodo={addTodoHandler}/>
        {
            todos.map(td=><TodoItem key={td.id}
                                          todo={td}
                                          onDeleteTodo={onDeleteHandler}
                                          onUpdateTodo={onUpdateTodoHandler}
                        />)
        }
    </div>);
}