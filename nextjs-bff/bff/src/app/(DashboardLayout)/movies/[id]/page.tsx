import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import Grid from "@mui/material/Grid";
import MovieDetailsUI from "./components/MovieDetailsUI";
import {Button} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import ReviewList from "./components/ReviewList";
import { Suspense } from 'react';
interface MovieDetailsPageProps {
    params: Promise<{ id: string }>;
}
export default async function MovieDetailsPage({params}: MovieDetailsPageProps)
{
    const { id } = await params;

    return(
        <PageContainer title="Movies Page" description="Movies page">
            <DashboardCard title="Movies Page">
                <Link href="/movies" passHref >
                    <Button variant="contained" type={"button"}>Back</Button>
                </Link>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <MovieDetailsUI id={id} />
                        </Suspense>

                    </Grid>
                    <Grid size={6}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ReviewList movieId={id} />
                        </Suspense>
                    </Grid>
                </Grid>
            </DashboardCard>
        </PageContainer>
    );
}