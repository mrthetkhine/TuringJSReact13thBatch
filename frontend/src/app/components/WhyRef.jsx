import {useRef, useState} from "react";

export default function WhyRef()
{
    console.log('Why Ref render');
    const [counter,setCounter] = useState(0);
    const num = useRef(0);

    console.log('Num ',num);
    const updateNumber = ()=>{
        num.current ++;
    }
    return(<div>
        Counter {counter}
        <button onClick={()=>setCounter(counter+1)}>Inc</button>
        <button onClick={updateNumber}>Num</button>
    </div>);
}