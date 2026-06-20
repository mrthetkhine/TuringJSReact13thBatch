import {useState} from "react";

export default function ImmutableDemo()
{
    console.log('render ImmutableDemo');
    const [state, setState] = useState({
        value :0,
        another : 10,
    });

    const increment = () => {
        setState({
            ...state,
            value : state.value + 1
        })

    }
    const decrement = () => {
        setState({
            ...state,
            value : state.value - 1
        })
    }
    const updateAnother = () => {
        setState({
            ...state,
            another : state.another + 1
        })
    }
    return (<div>
        <button onClick={increment}>+</button>
        <h3>
            {state.value}
        </h3>

        <button onClick={decrement}>-</button>
        <h2>Another {state.another}</h2>
        <button onClick={updateAnother}>Update</button>
    </div>);
}