
import {useState} from "react";

export default function Counter()
{
    let c = 0;
    console.log('render counter ',c);
    const [counter, setCounter] = useState(0);
    const [another, setAnother] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
        c++;
    }
    const decrement = () => {
        setCounter(counter - 1);
        c--;
    }
    return (<div>

        <h3>
            <button onClick={increment}>+</button>
            &nbsp;
            {
                counter
            }
            &nbsp;
            <button onClick={decrement}>-</button>
        </h3>


       {/* <h3>Another {another}</h3>
        <button onClick={()=>setAnother(another+1)}>Inc Another</button>*/}
    </div>);
}