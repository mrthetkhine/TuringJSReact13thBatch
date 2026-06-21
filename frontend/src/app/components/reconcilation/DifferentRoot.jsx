import {useState} from "react";
import Counter from "@/app/components/Counter";

export default function DifferentRoot()
{
    const [state, setState] = useState(false);
    return (<div>
        {
            state && <div>
            <Counter/>
            </div>
        }
        {
            !state && <span>
                <Counter/>
            </span>
        }
        <button onClick={() => setState(!state)}>Toggle</button>
    </div>);
}