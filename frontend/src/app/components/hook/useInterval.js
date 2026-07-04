import {useEffect} from "react";

export default function useInterval(callback,ms){
    useEffect(()=>{
        let timer = setInterval(callback,ms);
        return () => clearInterval(timer);
    },[]);
}