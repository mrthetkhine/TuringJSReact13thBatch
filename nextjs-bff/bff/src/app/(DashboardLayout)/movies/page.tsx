import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { apiGetAllMovies } from "@/lib/api/movieApi";
import {Typography} from "@mui/material";
import MovieList from "./components/MovieList";
import Button from "@mui/material/Button";
import * as React from "react";
import MovieEntry from "@/app/(DashboardLayout)/movies/components/MovieEntry";

export default async function MoviesPage()
{
    const movies = await apiGetAllMovies();

    return(
        <PageContainer title="Movies Page" description="Movies page">
            <DashboardCard title="Movies Page">
                <MovieEntry/>
                <MovieList movies={movies}/>
            </DashboardCard>
        </PageContainer>
    );
}