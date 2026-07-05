import {useState} from "react";

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
function TodoList()
{
    const [todos,setTodos] = useState(initialTodos);
    return (<div>
        {
            todos.map(td=><div key={td.id}>
                {td.title}
            </div>)
        }
    </div>)
}
export default function WhyRenderProp()
{
    return (<div>
        <TodoList/>
    </div>);
}