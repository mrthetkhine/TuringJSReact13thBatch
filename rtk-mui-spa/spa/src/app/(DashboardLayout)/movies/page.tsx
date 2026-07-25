'use client';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import MovieList from './components/MovieList';
import ConfirmDialog from "../components/shared/ConfirmDialog";
import * as React from "react";

export default function RtkQueryPage()
{

    return (
        <PageContainer title="Movies Page" description="this is Movies page">
            <DashboardCard title="Movies Page">

                <MovieList/>
            </DashboardCard>
        </PageContainer>
    );
}