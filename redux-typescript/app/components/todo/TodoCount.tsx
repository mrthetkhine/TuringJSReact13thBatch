import {useAppSelector} from "@/lib/hooks";
import { selectTodoCount} from "@/lib/features/todo/todoSlice";

export default function TodoCount()
{
    const todoCount = useAppSelector(selectTodoCount);
    return(<div>
        <h4>No of todo {todoCount} </h4>
    </div>);
}