import {useReducer} from "react";

/**
 state = {
     count :0
 }
*/
export function counterReducer(state, action){
    switch(action.type){
        case "INCREMENT":
            return {
                count:state.count + 1,
            };
        case "DECREMENT":
            return {
                count:state.count - 1,
            };
        default:
            return state;
    }
}
const initState = {
    count: 0,
}
export default function CounterWithReducer()
{
    const [state,dispatch] = useReducer(counterReducer, initState);

    const increment = ()=>{
        dispatch({
            type: 'INCREMENT',
        })
    }
    const decrement = ()=>{
        dispatch({
            type: 'DECREMENT',
        })
    }
    return(<div>
        <button type={"button"} onClick={increment}>
            +
        </button>
        {state.count}
        <button type={"button"} onClick={decrement}>
            -
        </button>
    </div>)
}