import {Button} from "@mui/material";
import Link from "next/link";
import HelloWorld from "@/app/components/HelloWorld";
import UserList from "@/app/movies/UserList";
import ServerTodo from "./ServerTodo";
import {Suspense} from "react";
import Loading from "@/app/movies/loading";
import Image from "next/image";
//import {useState} from "react";

interface Movie{
    id: string;
    title: string;
}
let movies : Movie[] =[
    {
        id:'1',
        title:'Titanic'
    },
    {
        id:'2',
        title:'Terminator'
    },
    {
        id:'3',
        title:'Terminator II'
    },
]
export default async function MoviePage()
{
    //const[state,setState]=useState([]);

    console.log('movie page ', movies);
    return (<div>
        <Image src={'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781451674187/the-odyssey-9781451674187_lg.jpg'}
               width="100"
               height="200"
               alt={'Odyssey'}/>
        <h3>User Page</h3>
        <Suspense fallback={<Loading/>}>
            <UserList/>
        </Suspense>

        <h3>Server Todo </h3>
        <Suspense fallback={<Loading/>}>
            <ServerTodo/>
        </Suspense>
    </div>);
}