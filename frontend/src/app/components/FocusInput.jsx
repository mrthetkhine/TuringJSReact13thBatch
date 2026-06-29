import {useRef} from "react";

export default function FocusInput()
{
    const inputRef = useRef(null);
    console.log('input ref ',inputRef);
    const focus =()=>{
        console.log("FocusInput ",inputRef);
        inputRef.current.focus();
    }
    return(<div>
        <input type={"text"} ref={inputRef}/>
        <button type={"button"} onClick={focus}>Focus</button>
    </div>);
}