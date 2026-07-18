import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {selectTodo} from "@/lib/features/todo/todoSlice";
import {loadAllUser, selectUsers} from "@/lib/features/user/userSlice";
import { useEffect } from "react";

export default function UserList()
{
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    useEffect(()=>{
        dispatch(loadAllUser());
    },[]);

    return (<div>
        <h3>User list</h3>

        {
            users.map(user=><div key={user.id}>
                {user.name}
            </div>)
        }
    </div>);
}