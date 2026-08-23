
import {AuthResponse, AuthUser} from "@/app/lib/types";
import {Todo, TodoSlice, TodoState} from "@/app/stores/todo/todoSlice";
import {StateCreator} from "zustand/index";
import {RootState} from "@/app/stores/useBoundStore";

export interface AuthState
{
    token:string;
}
export interface AuthAction
{
    login:(user:AuthUser)=>Promise<AuthResponse>;
    logout:()=>void;
}
export type AuthSlice = AuthState & AuthAction;
export const initialState: AuthState = {
    token:''
}

export const createAuthSlice:StateCreator<
    RootState,
    [['zustand/devtools', never]],
    [],
    AuthSlice
> = (set)=>({
        ...initialState,
        login: async (user :AuthUser)=>{
            console.log('login ');
            let response = await  fetch(process.env["NEXT_PUBLIC_BASE_URL"]+'api/users/login',{
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(user)
            });
            let json = await response.json();
            console.log('Auth response ',json);
            if(json.token)
            {
                set( (state: AuthState) =>{
                    state.token= json.token;
                    return state;
                },false,'auth/login');
                return json;
            }
            else {
                set( (state: AuthState) =>{
                    state.token= '';
                    return state;
                },false,'auth/login');
                throw new Error(json);
            }

        },
        logout:()=>{
            set( (state: AuthState) =>{
                state.token= '';
                return state;
            },false,'auth/logout');
        },


    }
);