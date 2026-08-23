'use client';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import MovieList from './components/MovieList';
import * as React from "react";
import useAuth from "@/app/lib/hooks/useAuth";
import withAuth from "@/app/lib/hoc/withAuth";
import { Movie } from "@/app/lib/types";
import {useLoadAllTodos} from "@/app/lib/hooks/todoHook";
import {useLoadAllMovies} from "@/app/lib/hooks/movieHook";
/*
const movies:Movie[] = [
    {
        "_id": "6a25501651612f72429d43c4",
        "title": "The dark knight",
        "director": {
            "name": "Christopher Nolan",
            "_id": "6a25501651612f72429d43c5"
        },
        "year": 2020,
        "genre": [],

    },
    {
        "_id": "6a25504051612f72429d43c6",
        "title": "Insception",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "6a25504051612f72429d43c7"
        },
        "year": 2022,
        "genre": [],

    },
    {
        "_id": "6a25504e51612f72429d43c8",
        "title": "The Odyssey",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "6a25504e51612f72429d43c9"
        },
        "year": 2025,
        "genre": [],

    },
    {
        "_id": "6a79da0a9a86a30552ef1570",
        "title": "Spiderman new movie",
        "director": {
            "name": "Director",
            "_id": "6a79da0a9a86a30552ef1571"
        },
        "year": 2026,
        "genre": [
            "Sci-Fi",
            "Drama"
        ],

    },
    {
        "_id": "6a79da469a86a30552ef1572",
        "title": "Test Movie",
        "director": {
            "name": "Director of test movie",
            "_id": "6a79da469a86a30552ef1573"
        },
        "year": 2026,
        "genre": [
            "Sci-Fi",
            "Drama"
        ],

    },
    {
        "_id": "6a79da849a86a30552ef1574",
        "title": "Movie 2",
        "director": {
            "name": "Director2",
            "_id": "6a79da849a86a30552ef1575"
        },
        "year": 2010,
        "genre": [
            "Drama"
        ],

    },
    {
        "_id": "6a79dcf19a86a30552ef1580",
        "title": "Movie 4",
        "director": {
            "name": "Director",
            "_id": "6a79dcf19a86a30552ef1581"
        },
        "year": 2010,
        "genre": [
            "Sci-Fi"
        ],


];
*/

function MoviesPage()
{
    const isLogined = useAuth();
    const { isPending, isError, data, error } = useLoadAllMovies();

    console.log('Movies Page render');
    return (
        <PageContainer title="Movies Page" description="this is Movies page">
            <DashboardCard title="Movies Page">
                {
                    data && <MovieList movies={data} />
                }
            </DashboardCard>
        </PageContainer>
    );
}
const AuthMovies = withAuth(MoviesPage);
export default AuthMovies;