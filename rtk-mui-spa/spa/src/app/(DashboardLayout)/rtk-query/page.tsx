'use client';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {Typography} from "@mui/material";
import TodoRtkQuery from "./components/TodoRtkQuery";

export default function RtkQueryPage()
{
    return (
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="Sample Page">
                <TodoRtkQuery/>
            </DashboardCard>
        </PageContainer>
    );
}