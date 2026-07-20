'use client';
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {selectTodo} from "@/lib/features/todo/todoSlice";
import {loadAllUser, selectUsers} from "@/lib/features/user/userSlice";
import { useEffect } from "react";
import styles from './userlist.module.css'

export default function UserList()
{
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    useEffect(()=>{
        dispatch(loadAllUser());
    },[]);

    return (<div>
        <h1>User list</h1>
       {/* <HelloWorld/>*/}
        <div className={styles.container}>
            {
                users.map(user=><div key={user.id}>
                    {user.name}
                </div>)
            }
        </div>

    </div>);
}