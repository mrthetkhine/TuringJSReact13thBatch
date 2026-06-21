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
function TodoEntry({onAddTodo})
{
    const [todoText, setTodoText] = useState("");
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            //console.log("Enter key pressed! ",todoText);
            onAddTodo(todoText);
            setTodoText('');
        }
    };

    return(<div>
        <label>Enter new todo</label>
        <input type={"text"} value={todoText}
               onChange={(e) => setTodoText(e.target.value)}
               onKeyDown={handleKeyDown} />
    </div>);
}

function TodoItem({todo,onDeleteTodo,onUpdateTodo}) {
    console.log('Todo ',todo);
    const [editing, setEditing] = useState(false);
    const [todoText, setTodoText] = useState(todo.title);
    const onDoubleClick = (event) => {
        console.log('Edit mode on');
        setEditing(true);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onUpdateTodo({
                id:todo.id,
                title : todoText
            });
            setEditing(false);
        }
    };
    return <div>
        {
            !editing && <span onDoubleClick={onDoubleClick}>
            {todo.title}
            </span>
        }
        {
            editing && <input type={"text"}
                              value={todoText}
                              onChange={(e) => setTodoText(e.target.value)}
                              onKeyDown={handleKeyDown}/>
        }

        &nbsp;
        <button type={"button"} onClick={()=>onDeleteTodo(todo)}>
            Delete
        </button>
    </div>;
}

export default function TodoList()
{
    const [todos, setTodos] = useState(initialTodos);

    const onAddTodo = (todoTitle) => {
        console.log('Add todo ',todoTitle);
        let id = getNextId();
        const newTodo = {
            id,
            title: todoTitle
        }
        setTodos([...todos,newTodo]);
    }
    const onDeleteTodo = (todo) => {
        console.log('Delete todo  ',todo);
        setTodos(todos.filter(td=>td.id!=todo.id));
    }
    const onUpdateTodo = (todo) => {
        console.log('update todo  ',todo);
        setTodos(todos.map(td=>td.id==todo.id?todo:td));
    }
    return(<div>
        <TodoEntry onAddTodo = {onAddTodo}/>
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