import {useCallback, useReducer, useState} from "react";
import {TodoEntry, TodoItem} from "@/app/components/TodoList";
import todoReducer from "@/app/components/reducer/todoReducer";

const initialTodos = [
    {
        id : 1,
        title: 'Task 1'
    },
    {
        id : 2,
        title: 'Task 2'
    },
    {
        id : 3,
        title: 'Task 3'
    },
];
let id = 4;
function getNextId()
{
    return id++;
}
export default function TodoWithReducer() {
    const [todos, dispatch] = useReducer(todoReducer,initialTodos);
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
    return (<div>
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