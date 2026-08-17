'use client';

import {useLoadAllTodos} from "@/app/lib/hooks/todoHook";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {Typography} from "@mui/material";

export default function Page()
{
    const { isPending, isError, data, error } = useLoadAllTodos();
    return(<div>
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="Sample Page">
                {
                    data && data.map(td=><div key={td._id}>
                        {td.title}
                    </div>)
                }
            </DashboardCard>
        </PageContainer>

    </div>);
}