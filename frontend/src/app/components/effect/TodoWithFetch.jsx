import {useEffect, useState} from "react";
import useFetch from "@/app/components/hook/useFetch";

export default function TodoWithFetch()
{
    const [loading,todos,error] = useFetch('https://jsonplaceholder.typicode.com/todos');
    return(<div>
        {
            loading && <h1>Loading....</h1>
        }
        {
            todos.map(td=><div key={td.id}>
                {td.title}
            </div>)
        }
    </div>);
}