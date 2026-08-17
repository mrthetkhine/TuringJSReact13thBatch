'use client';
import {useBoundStore} from '@/app/stores/useBoundStore';
export default function Counter()
{
    const {count,inc,dec} = useBoundStore();
    return (<div>
        <button type={"button"} onClick={()=>dec()}>-</button>
        <h1>Count {count}</h1>
        <button type={"button"} onClick={()=>inc()}>+</button>
    </div>);
}