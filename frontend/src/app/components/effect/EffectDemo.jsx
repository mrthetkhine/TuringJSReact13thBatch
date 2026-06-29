import {useEffect, useState} from "react";

export default function EffectDemo()
{
    console.log('EffectDemo render');
    const [counter,setCounter] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);
    useEffect(()=>{
        console.log('Effect 0 run once');
    },[]);
    useEffect(()=>{
        console.log('Effect 1');
    },[counter]);

    useEffect(()=>{
        console.log('Effect 2');
    })
    return(<div>
        Effect demo {counter}
        <button type={"button"} onClick={()=>setCounter(counter+1)}>Inc</button>

        <div>
            Counter 2 {counterTwo}
            <button type={"button"} onClick={()=>setCounterTwo(counterTwo+1)}>Inc 2 </button>
        </div>
    </div>);
}