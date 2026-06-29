import {useRef} from "react";
import MyInput from "@/app/components/MyInput";

export default function MyInputParent(){
    const ref = useRef(null);

    const focus = ()=>{
        console.log('Ref ',ref);
        ref.current.focus();
    }
    return(<div>
        <MyInput ref={ref}/>
        <button onClick={focus}>Focus</button>
    </div>);
}