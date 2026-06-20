
import {useState} from "react";

export default function CounterTwo()
{
    console.log('render counter ');
    const [counter, setCounter] = useState(0);


    const increment = () => {
       /* setCounter(counter + 1);//0+1
        setCounter(counter + 1);//0+1
        setCounter(counter + 1);//0+1*/
        setCounter(c=>c+1);
        setCounter(c=>c+1);
        setCounter(c=>c+1);
    }
    const decrement = () => {
        setCounter(counter - 1);

    }
    return (<div>
        <button onClick={increment}>+</button>
        <h3>
            {
                counter
            }
        </h3>

        <button onClick={decrement}>-</button>

    </div>);
}