import { useEffect, useState} from "react";

export default function Clock()
{
    const [time,setTime] = useState(new Date());
    useEffect(()=>{
       let timer =  setInterval(()=>{
            console.log('Update time');
            setTime(new Date());
        },1000);

        return ()=>{
            console.log('Clean up time');
            clearInterval(timer);
        };
    },[]);
    return (<div>

        Time {time.toLocaleTimeString()}

    </div>);
}