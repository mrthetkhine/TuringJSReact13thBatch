import { StateCreator } from "zustand";
import {RootState} from '@/app/stores/useBoundStore';
export interface CounterState
{
    count:number;
}
export interface CounterAction
{
    inc:()=>void;
    dec:()=>void;
}
export type CounterSlice = CounterState & CounterAction;
export const initialState: CounterState = {
    count: 1,
}
export const createCounterSlice:StateCreator<
    RootState,
    [['zustand/devtools', never]],
    [],
    CounterSlice
> = (set)=>({
        ...initialState,
        dec:()=>set( (state: CounterState) => {
            --state.count;
            return state;
        },false,'counter/dec'),
        inc:() => set((state:CounterState) => {
            ++state.count
            return state;
        },false,'counter/inc')
    }
);