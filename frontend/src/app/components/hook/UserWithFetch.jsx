import {useEffect, useState} from "react";
import useFetch from "@/app/components/hook/useFetch";

export default function UserWithFetch()
{
    const [loading,data,error] = useFetch('https://jsonplaceholder.typicode.com/users');
    return(<div>
        {
            loading && <h1>Loading....</h1>
        }
        {
            error && <p>{error.message}</p>
        }
        {
            data.map(user=><div key={user.id}>
                {user.name}
            </div>)
        }
    </div>);
}