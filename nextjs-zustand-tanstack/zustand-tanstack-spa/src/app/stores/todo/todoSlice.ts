import {StateCreator} from "zustand/index";
import {RootState} from "@/app/stores/useBoundStore";
import {CounterSlice, CounterState} from "@/app/stores/counter/counterSlice";

export interface Todo
{
    id?:string;
    title:string;
}
export interface TodoState
{
    todos:Todo[]
}
export interface TodoAction
{
    fetchTodos:()=>Promise<any>;
    deleteTodo:(todo:Todo)=>void;
    updateTodo:(todo:Todo)=>void;
}
export type TodoSlice = TodoState & TodoAction;
export const initialState: TodoState = {
    todos:[
        {
            id:'1',
            title:'Task 1'
        },
        {
            id:'2',
            title:'Task 2'
        },
    ]
}
export const createTodoSlice:StateCreator<
    RootState,
    [['zustand/devtools', never]],
    [],
    TodoSlice
> = (set)=>({
        ...initialState,
        fetchTodos: async ()=>{
            console.log('Fetch todos');
            let response = await  fetch('https://jsonplaceholder.typicode.com/todos');
            let json = await response.json();
            console.log('todos ',json);
            set( (state: TodoState) =>{
                state.todos= (json as Todo[])
                return state;
            },false,'todos/fetchTodos');
        },
        deleteTodo:(todo:Todo)=>{
            set( (state: TodoState) =>{
                state.todos= state.todos.filter(td=>td.id!=todo.id);
                return state;
            },false,'todos/deleteTodo');
        },
        updateTodo:(todo:Todo)=>{
            set( (state: TodoState) =>{
                state.todos= state.todos.map(td=>td.id==todo.id?todo:td);
                return state;
            },false,'todos/updateTodo');
        },

    }
);