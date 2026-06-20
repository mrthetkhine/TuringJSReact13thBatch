import {useState} from "react";

function Child({value})
{

    console.log('Child render');
    return (<div>
        Child {value}
    </div>);
}
export default function Parent() {
    console.log('Parent render ')
    const [another, setAnother] = useState(0);
    return (<div>
        <h1>Parent {another}</h1>
        <button onClick={()=>setAnother(another+1)}>Inc Another</button>
        <Child value={another+5}/>
    </div>);
}