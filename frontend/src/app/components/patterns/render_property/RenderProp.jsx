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
//render=(todo)=>any JSX
function TodoList({render})
{
    const [todos,setTodos] = useState(initialTodos);
    return (<div>
        {
            todos.map(td=>render(td))
        }
    </div>)
}
export default function RenderProp()
{
    const onClickHandler = (todo) => {
        console.log('TodoClicked ',todo);
    }
    const renderTodo= (todo)=>{
        return <h3 key={todo.id} onClick={onClickHandler}>
            {todo.title}
        </h3>
    }
    return (<div>
        <TodoList render={renderTodo}/>
    </div>);
}