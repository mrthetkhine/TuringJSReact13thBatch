'use client';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import MovieList from './components/MovieList';
import * as React from "react";
import {useGetAllMoviesQuery} from "@/lib/features/movies/movieApiSlice";
import useAuth from "@/lib/hooks/useAuth";
import withAuth from "@/lib/features/auth/withAuth";

function MoviesPage()
{
    const isLogined = useAuth();
    const { data:movies=[], isError, isLoading, isSuccess,refetch } = useGetAllMoviesQuery(undefined,{
        skip:!isLogined
    });
    console.log('Movies Page render');
    return (
        <PageContainer title="Movies Page" description="this is Movies page">
            <DashboardCard title="Movies Page">
                <MovieList movies={movies} />
            </DashboardCard>
        </PageContainer>
    );
}
const AuthMovies = withAuth(MoviesPage);
export default AuthMovies;