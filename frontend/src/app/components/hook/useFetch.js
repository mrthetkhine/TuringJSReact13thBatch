import {useEffect, useState} from "react";

export default function useFetch(url)
{
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            }).catch(err => setError(err));
    },[]);
    return [loading,data,error];
}