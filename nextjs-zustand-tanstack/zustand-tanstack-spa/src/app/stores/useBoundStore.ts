
import {CounterSlice, createCounterSlice} from '@/app/stores/counter/counterSlice';
import {create} from 'zustand'
import {devtools, persist,createJSONStorage} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {TodoSlice,createTodoSlice} from "@/app/stores/todo/todoSlice";
import { AuthSlice, createAuthSlice } from './auth/authSlice';


export type RootState = CounterSlice & TodoSlice & AuthSlice;

export const useBoundStore = create<RootState>()(
    devtools(
        immer(
            persist((...a) => ({
                ...createCounterSlice(...a),
                ...createTodoSlice(...a),
                ...createAuthSlice(...a),
            }),
            {
                name: 'spa-store', // unique name for your storage key
                storage: createJSONStorage(() => localStorage),
            })

        )));

