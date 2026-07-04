import {useState} from "react";

export default function useCustomRef(value)
{
    const [state] = useState({
        current: value,
    })
    return state;
}