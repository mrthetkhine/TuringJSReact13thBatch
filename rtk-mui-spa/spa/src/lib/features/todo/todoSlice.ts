
import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Todo} from './todoApiSlice';

export interface TodoState {
    todos:Todo[]
}

const initTodos:Todo[] = [
    {
        _id:1,
        title:'Task 1',
        completed:true
    },
    {
        _id:2,
        title:'Task 2',
        completed:true
    },
    {
        _id:3,
        title:'Task 3',
        completed:true
    },

]
const initialState: TodoState = {
    todos:initTodos
};
export const todoSlice = createAppSlice({
    name: "todo",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: (create) => ({
        addTodo: create.reducer(
            (state, action: PayloadAction<Todo>) => {
                state.todos.push(action.payload);
            },
        ),
        updateTodo: create.reducer(
            (state, action: PayloadAction<Todo>) => {
                state.todos = state.todos.map(td=>td._id===action.payload._id?action.payload:td);
            },
        ),
        deleteTodo: create.reducer(
            (state, action: PayloadAction<Todo>) => {
                state.todos = state.todos.filter(td=>td._id!==action.payload._id);
            },
        ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectTodo: (state) => state.todos,
        selectTodoCount : (state) => state.todos.length,
    },
});
export const { addTodo,deleteTodo,updateTodo } =
    todoSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
    selectTodo,
    selectTodoCount
} = todoSlice.selectors;
