import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {selectTodo} from "@/lib/features/todo/todoSlice";
import {loadAllUser, selectUsers} from "@/lib/features/user/userSlice";

export default function UserList()
{
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    const onClickHandler = ()=>{
        dispatch(loadAllUser());
    }
    return (<div>
        <h3>User list</h3>
        <button type={"button"} onClick={onClickHandler}>Load</button>
        {
            users.map(user=><div key={user.id}>
                {user.name}
            </div>)
        }
    </div>);
}