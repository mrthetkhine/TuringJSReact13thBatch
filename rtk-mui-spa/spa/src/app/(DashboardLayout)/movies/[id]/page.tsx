'use client';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useParams } from 'next/navigation'
import * as React from "react";
import { Movie } from "@/lib/features/movies/movieApiSlice";
import { Review } from "@/lib/features/reviews/reviewApiSlice";
import MovieDetailsUI from "../components/MovieDetailsUI";
import Grid from "@mui/material/Grid";
import ReviewUI from "../components/ReviewUI";

const movie:Movie = {
    "_id": "6a26c339a2b14ed3784d1b00",
    "title": "The Terminator 2",
    "director": {
    "name": "James Cameron",
        "phoneNo": "09993",
        "_id": "6a26c339a2b14ed3784d1b01"
},
    "year": 2025,
    "genre": [
    "Sci-Fi",
    "Action"
],
};
const reviews:Review[] = [
    {
        "_id": "6a26cae77ea065df6d797adf",
        "movie": "6a25501651612f72429d43c4",
        "rating": 5,
        "review": "best batman movie",

    },
    {
        "_id": "6a26cafc7ea065df6d797ae0",
        "movie": "6a25501651612f72429d43c4",
        "rating": 3,
        "review": "second rating for batman movie",

    },
    {
        "_id": "6a26cb797ea065df6d797ae2",
        "movie": "6a25504e51612f72429d43c8",
        "rating": 5,
        "review": "Odyssey second review",

    },
    {
        "_id": "6a26cb7c7ea065df6d797ae3",
        "movie": "6a25504e51612f72429d43c8",
        "rating": 5,
        "review": "Really good movie updated review for Odyssey",

    }
];
export default function MovieDetailsPage()
{
    const params = useParams();

    return (
        <PageContainer title="Movies Page" description="this is Movies page">
            <DashboardCard title="Movies Page">
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <MovieDetailsUI movie={movie} />

                    </Grid>
                    <Grid size={6}>
                        {
                            reviews.map(review=><ReviewUI key={review._id} review={review}/>)
                        }
                    </Grid>
                </Grid>

            </DashboardCard>
        </PageContainer>
    );
}