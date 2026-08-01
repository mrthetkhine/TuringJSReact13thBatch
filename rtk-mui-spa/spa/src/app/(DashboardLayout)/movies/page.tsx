'use client';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import MovieList from './components/MovieList';
import * as React from "react";
import {useGetAllMoviesQuery} from "@/lib/features/movies/movieApiSlice";

export default function RtkQueryPage()
{
    const { data:movies=[], isError, isLoading, isSuccess,refetch } = useGetAllMoviesQuery(undefined,{
        //pollingInterval: 3000,
    });
    return (
        <PageContainer title="Movies Page" description="this is Movies page">
            <DashboardCard title="Movies Page">
                <MovieList movies={movies} />
            </DashboardCard>
        </PageContainer>
    );
}