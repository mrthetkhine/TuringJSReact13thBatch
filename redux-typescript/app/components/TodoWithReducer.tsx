'use client';
import {useState, KeyboardEvent, MouseEvent, useReducer} from "react";

export interface Todo
{
    id: number;
    title: string;
    completed: boolean;
}

let id = 4;
function getNextId()
{
    return id++;
}
const initTodos:Todo[] = [
    {
        id:1,
        title:'Task 1',
        completed:true
    },
    {
        id:2,
        title:'Task 2',
        completed:true
    },
    {
        id:3,
        title:'Task 3',
        completed:true
    },

]
interface TodoItemProps {
    todo:Todo,
    onDeleteTodo:(todo:Todo) => void,
    onUpdateTodo:(todo:Todo) => void,
}
export function TodoItem({todo,onDeleteTodo,onUpdateTodo}:TodoItemProps) {
    //console.log('Todo ',todo);
    const [editing, setEditing] = useState(false);
    const [todoText, setTodoText] = useState(todo.title);
    const onDoubleClick = (event:MouseEvent<HTMLElement>) => {
        console.log('Edit mode on');
        setEditing(true);
    };
    const handleKeyDown = (event:KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            onUpdateTodo({
                id:todo.id,
                title : todoText,
                completed:true,
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
interface TodoEntryProps
{
    onAddTodo:(title:string)=>void;
}
export function TodoEntry({onAddTodo}:TodoEntryProps)
{
    const [todoText, setTodoText] = useState("");
    const handleKeyDown = (event:KeyboardEvent<HTMLElement>) => {
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

type TodoAction = {
    type:"ADD_TODO"|"UPDATE_TODO"|"DELETE_TODO";
    payload:Todo;
}
interface TodoState {
    todos:Todo[]
}
const initState = {
    todos:initTodos
}
function todoReducer(state:TodoState, action:TodoAction):TodoState
{
    switch(action.type){
        case "ADD_TODO":
            return {
                todos:[...state.todos, action.payload]
            };
        case "UPDATE_TODO":
            return {
                todos:state.todos.map(td=>td.id===action.payload.id?action.payload:td)
            }

        case "DELETE_TODO":
            return {
                todos: state.todos.filter(td => td.id !== action.payload.id)
            }
    }
}
export default function TodoWithReducer()
{
    //const todos = initTodos;
    const [state,dispatch] = useReducer(todoReducer, initState);
    const addTodoHandler=(title:string)=>{
      console.log('Add Todo ',title);
      dispatch({
          type:"ADD_TODO",
          payload: {
              id: getNextId(),
              title,
              completed:true,
          }
      });
    };

    const onDeleteHandler=(todo:Todo)=>{
        console.log('Delete todo ',todo);
        dispatch({
            type:"DELETE_TODO",
            payload: todo,
        })
    }
    const onUpdateTodoHandler =(todo:Todo)=>{
        console.log('Update todo ',todo);
        dispatch({
            type:"UPDATE_TODO",
            payload: todo,
        })
    };
    return (<div>
        <TodoEntry onAddTodo={addTodoHandler}/>
        {
            state.todos.map(td=><TodoItem key={td.id}
                                    todo={td}
                                    onDeleteTodo={onDeleteHandler}
                                    onUpdateTodo={onUpdateTodoHandler}
            />)
        }
    </div>);
}