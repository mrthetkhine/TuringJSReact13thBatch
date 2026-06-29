import {useRef, useState} from "react";

export default function Timer()
{
    const [time,setTime] = useState(new Date());

    console.log("Time",time);
    const timer = useRef(null);
    function start()
    {
        timer.current = setInterval(()=>{
            setTime(new Date());
        },1000);
    }

    function stop()
    {
        console.log("Timer ",timer);
        clearInterval(timer.current);
    }
    return (<div>
        <button type={"button"} onClick={start}>Start</button>
        Time {time.toLocaleTimeString()}
        <button type={"button"} onClick={stop}>Stop</button>
    </div>);
}
