import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {AuthFormData} from "@/lib/schema/authSchema";
import {BASE_API} from "@/util/config";

export interface AuthState {
    token?:string;
}

const initialState: AuthState = {
    token:'',
};
export const authSlice = createAppSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: (create) => ({

        logout: create.reducer(
            (state) => {
                state.token = undefined;
            },
        ),
        login: create.asyncThunk(
            async (user:AuthFormData,{ rejectWithValue }) => {
                console.log('Api login');
                const response = await fetch(BASE_API+`/api/users/login`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                const json = await response.json();
                if(!json?.token)
                {
                    return rejectWithValue(json);
                }
                console.log('Api logined ',json);
                return json;
            },
            {
                pending: (state) => {
                    console.log('pending');

                },
                fulfilled: (state, action) => {
                    console.log('fulfilled ',action);
                    state.token = action.payload?.token;

                },
                rejected: (state) => {
                    state.token = undefined;
                },
            },
        ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectAuth: (state) => state.token,

    },
});
export const { login,logout } = authSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
    selectAuth
} = authSlice.selectors;
