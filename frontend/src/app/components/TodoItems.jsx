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
let id = 4;
function getNextId()
{
    return id++;
}
export default function TodoItems()
{
    console.log('TodoItems render ');
    const [todos,setTodos] = useState(initialTodos);
    const [todoTitle, setTodoTitle] = useState('');

    console.log('todo title ',todoTitle);

    const onChangeTitle = (event) => {
        setTodoTitle(event.target.value);
    }


    const onUpdateTodo = (todo) => {
        console.log('Update todo ',todo);
        const updateTodo ={
            ...todo,
            title : todo.title+' update'
        }
        setTodos(todos.map(td=>td.id==todo.id?updateTodo:td ));
    }
    const onDelete = (todo) => {
        console.log('todo to delete ',todo);
        setTodos(todos.filter(td=>td.id!= todo.id));
    }
    const onCreate = ()=>{
        let id = getNextId();
        let newTodo = {
            id ,
            title : todoTitle,
        }
        setTodoTitle('');
        setTodos([...todos,newTodo]);
    }
    return(<div>
        <input type={"text"}
               value={todoTitle}
               onChange={onChangeTitle} />
        <button type={"button"} onClick={()=>onCreate()}>Add</button>
        {
            todos.map(todo=><div key={todo.id}>
                {
                    todo.title
                }
                &nbsp;
                <button type={"button"} onClick={()=>onUpdateTodo(todo)}>Update</button>
                &nbsp;
                <button type={"button"} onClick={()=>onDelete(todo)}>Delete</button>
            </div>)
        }
    </div>);

}