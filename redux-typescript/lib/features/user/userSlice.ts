import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "@/app/components/TodoWithReducer";
import {todoSlice} from "@/lib/features/todo/todoSlice";
import {fetchCount} from "@/lib/features/counter/counterAPI";

interface User {
    id:number;
    name: string;
}
export interface UserState {
    users: User[];
    status : "loading" |"idle"|"failed";
}

const initialState: UserState = {
    users:[],
    status:"idle"
};
export const userSlice = createAppSlice({
    name: "user",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: (create) => ({

        deleteUser: create.reducer(
            (state, action: PayloadAction<Todo>) => {
                state.users = state.users.filter(user=>user.id!==action.payload._id);
            },
        ),
        loadAllUser: create.asyncThunk(
            async () => {
                console.log('Api called');
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const json = await response.json();
                console.log('Api called ',json);
                return json;
            },
            {
                pending: (state) => {
                    console.log('pending');
                    state.status = "loading";
                },
                fulfilled: (state, action) => {

                    console.log('fulfilled ',action);
                    state.status = "idle";
                    state.users = action.payload;
                },
                rejected: (state) => {
                    state.status = "failed";
                },
            },
        ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectUsers: (state) => state.users,

    },
});
export const { deleteUser,loadAllUser } =
    userSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
    selectUsers
} = userSlice.selectors;
