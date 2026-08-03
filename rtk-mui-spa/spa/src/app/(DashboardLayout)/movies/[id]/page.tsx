'use client';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {useParams, useRouter} from 'next/navigation'
import * as React from "react";
import {Movie, useGetAllMoviesQuery} from "@/lib/features/movies/movieApiSlice";
import {Review, useDeleteReviewMutation, useGetAllReviewByMovieIdQuery} from "@/lib/features/reviews/reviewApiSlice";
import MovieDetailsUI from "../components/MovieDetailsUI";
import Grid from "@mui/material/Grid";
import ReviewUI from "../components/ReviewUI";
import ReviewDlg from "@/app/(DashboardLayout)/movies/components/ReviewDlg";
import ConfirmDialog from "@/app/(DashboardLayout)/components/shared/ConfirmDialog";
import {Button} from "@mui/material";
import useDialog from "@/app/(DashboardLayout)/hooks/useDialog";
import {useRef} from "react";
import {movieApiSlice} from '@/lib/features/movies/movieApiSlice';
/*const movie:Movie = {
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
];*/
export default function MovieDetailsPage()
{
    const {id} = useParams<{ id: string }>();
    const { movie } = movieApiSlice.useGetAllMoviesQuery(undefined, {
        selectFromResult: ({ data }) => ({
            movie: data?.find((movie) => movie._id === id),
        }),
    });
    const { data:reviews=[], isError, isLoading, isSuccess,refetch } = useGetAllReviewByMovieIdQuery(id);
    const [deleteReview,deleteReviewResult] = useDeleteReviewMutation();

    const router = useRouter();
    const {open, setOpen,handleClose} = useDialog();
    const {open:reviewDlgOpen,
        setOpen:reviewDlgSetOpen,
        handleClose:reviewDlgHandleClose} = useDialog();

    const reviewToEditRef = useRef<Review|undefined>(undefined);
    const reviewToDeleteRef = useRef<Review|undefined>(undefined);

    const onDeleteConfirm = ()=>{
        console.log('Delete confirm ',reviewToDeleteRef.current);
        deleteReview(reviewToDeleteRef.current as Review);
    }
    const handleShowDeleteDlg =(review:Review) => {
        reviewToDeleteRef.current = review;
        setOpen(true);
    };
    const newReviewHandler = ()=>{
        reviewToEditRef.current = undefined;
        reviewDlgSetOpen(true);
    }
    const editHandler = (review:Review)=>{
        console.log('Review to edit ',review);
        reviewToEditRef.current =review;
        reviewDlgSetOpen(true);
    }
    const handleBack=  ()=>{
        router.push('/movies');
    };

    return (
        <PageContainer title="Movies Page" description="this is Movies page">
            <DashboardCard title="Movies Page">

                <Button variant="contained"
                        type={"button"}
                        onClick={handleBack}>
                    Back
                </Button>

                <Grid container spacing={2}>
                    <Grid size={6}>
                        {
                            movie && <MovieDetailsUI movie={movie as Movie} />
                        }


                    </Grid>
                    <Grid size={6}>
                        <ReviewDlg open={reviewDlgOpen}
                                   movieId={id}
                                   reviewToEdit={reviewToEditRef.current}
                                   handleClose={reviewDlgHandleClose}/>
                        <ConfirmDialog
                            title={"Delete Review"}
                            content={"Are you sure you want to delete Review"}
                            open={open}
                            onConfirm={onDeleteConfirm}
                            handleClose={handleClose} />
                        <Button variant="contained"
                                type={"button"}
                                onClick={newReviewHandler}>
                            New Review
                        </Button>
                        {
                            reviews.map(review=><ReviewUI
                                key={review._id}
                                review={review}
                                editHandler={editHandler}
                                handleShowDeleteDlg={handleShowDeleteDlg}
                            />)
                        }
                    </Grid>
                </Grid>

            </DashboardCard>
        </PageContainer>
    );
}