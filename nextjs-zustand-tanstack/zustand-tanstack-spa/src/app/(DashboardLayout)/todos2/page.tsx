'use client';

import {useLoadAllTodos, useMutationDeleteTodo, useSaveTodo} from "@/app/lib/hooks/todoHook";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {Typography} from "@mui/material";
import TodoEntry from "./components/TodoEntry";
import Button from "@mui/material/Button";

export default function Page()
{
    const { isPending, isError, data, error } = useLoadAllTodos();
    const {mutate:deleteTodoById} = useMutationDeleteTodo();
    const deleteTodo = (id: string) => {
        deleteTodoById(id);
    }

    return(<div>
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="Sample Page">
                <TodoEntry/>
                {
                    data && data.map(td=><div key={td._id}>
                        {td.title}
                        <Button onClick={()=>deleteTodo(td._id!!)}
                                type={"button"}
                                variant={"contained"}
                                size="small"
                        >Delete</Button>
                    </div>)
                }
            </DashboardCard>
        </PageContainer>

    </div>);
}