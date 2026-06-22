import  './counter.css';
import {useState} from "react";

function CounterWithLabel({ label }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{label} {score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}
let items =["banana","orange","apple"];
export default function IndexKeyIssue()
{
    let [state, setState] = useState(items);

    const onClickHandler = ()=>{
        state.sort();
        setState([...state]);
    }
    return (<div>
        <button type={"button"} onClick={onClickHandler}>
            Sort
        </button>
        {
           /* state.map((item,index)=><CounterWithLabel
                                        key={index}
                                        label={item}/>)*/
            state.map((item,index)=><CounterWithLabel
                key={item}
                label={item}/>)
        }
    </div>);
}