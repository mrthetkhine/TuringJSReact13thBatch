import { useEffect, useState} from "react";
import useInterval from "@/app/components/hook/useInterval";

export default function Clock()
{
    const [time,setTime] = useState(new Date());
    useInterval(()=>{
        setTime(new Date());
    },1000);
    /*useEffect(()=>{
       let timer =  setInterval(()=>{
            console.log('Update time');
            setTime(new Date());
        },1000);

        return ()=>{
            console.log('Clean up time');
            clearInterval(timer);
        };
    },[]);*/
    return (<div>

        Time {time.toLocaleTimeString()}

    </div>);
}