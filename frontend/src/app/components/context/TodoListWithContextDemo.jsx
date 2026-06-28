import {useReducer} from "react";
import todoReducer from "@/app/components/reducer/todoReducer";
import {TodoContext} from "@/app/components/context/TodoContext";
import TodoListWithContext from "@/app/components/context/TodoListWithContext";
import TodoCount from "@/app/components/context/TodoCount";

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

export default function TodoListWithContextDemo()
{
    const [todos, dispatch] = useReducer(todoReducer,initialTodos);
    return (<div>
        <TodoContext.Provider value={{todos, dispatch}}>
            <TodoCount/>
            <TodoListWithContext/>
        </TodoContext.Provider>
    </div>);
}