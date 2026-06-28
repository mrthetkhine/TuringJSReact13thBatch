import {useContext, useReducer} from "react";
import todoReducer from "@/app/components/reducer/todoReducer";

import {TodoContext} from "@/app/components/context/TodoContext";
import {TodoEntry, TodoItem} from "@/app/components/TodoList";

let id = 4;
function getNextId()
{
    return id++;
}
export default function TodoListWithContext()
{
    const {todos,dispatch} = useContext(TodoContext);

    const onAddTodo = (title)=>{
        console.log('onAdd Todo ',title);
        let id = getNextId();
        const newTodo = {
            id,
            title,
        };
        dispatch({
            type:"ADD_TODO",
            payload:newTodo
        })
    }
    const onDeleteTodo = (todo) => {
        console.log('Delete todo  ',todo);
        dispatch({
            type:"DELETE_TODO",
            payload:todo
        })

    }
    const onUpdateTodo = (todo) => {
        console.log('update todo  ',todo);
        dispatch({
            type:"UPDATE_TODO",
            payload:todo
        })

    }
    return(
    <div>
        <TodoEntry onAddTodo={onAddTodo}/>
        {
            todos.map(todo=><TodoItem
                key={todo.id}
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onUpdateTodo={onUpdateTodo}
            />)
        }
    </div>);
}