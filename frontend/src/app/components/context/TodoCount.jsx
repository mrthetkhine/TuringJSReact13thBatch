import {useContext} from "react";
import {TodoContext} from "@/app/components/context/TodoContext";

export default function TodoCount()
{
    const {todos,dispatch} = useContext(TodoContext);
    return (<div>
        <h4> Todo count {todos.length}</h4>
    </div>);
}