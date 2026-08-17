'use client';
import {useBoundStore} from '@/app/stores/useBoundStore';
import {useEffect} from "react";
import {Todo} from '@/app/stores/todo/todoSlice';
export default function Page()
{
    const {todos,fetchTodos,deleteTodo,updateTodo} = useBoundStore();
    useEffect(() => {
        fetchTodos();
    }, []);
    const updateHandler = (todo:Todo)=>{
        updateTodo({
            ...todo,
            title: todo.title + ' update'
        })
    }
    return(<div>
        {
            todos.map(td=><div key={td.id}>
                    {td.title}
                &nbsp;
                <button type={"button"} onClick={()=>updateHandler(td)}>Update</button>
                &nbsp;
                <button type={"button"} onClick={()=>deleteTodo(td)}>Delete</button>
            </div>)
        }
    </div>);
}