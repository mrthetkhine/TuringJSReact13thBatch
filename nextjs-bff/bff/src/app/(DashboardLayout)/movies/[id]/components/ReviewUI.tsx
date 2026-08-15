'use client';
import {Review} from '@/lib/types';
import {Button, Card, CardActions, CardContent, IconButton, Rating } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import * as React from "react";
import useDialog from '@/lib/hooks/useDialog';
import ReviewDlg from './ReviewDlg';
import ConfirmDialog from '@/app/(DashboardLayout)/layout/shared/ConfirmDialog';
import {deleteReviewByIdAction} from "@/lib/actions/reviewAction";

interface ReviewUIProps
{
    review:Review;
    //editHandler:(review:Review) => void;
    //handleShowDeleteDlg:(review:Review) => void;
}
export default function ReviewUI({review}:ReviewUIProps)
{
    const {open, setOpen,handleClose} = useDialog();
    const {open:reviewDlgOpen,
        setOpen:reviewDlgSetOpen,
        handleClose:reviewDlgHandleClose} = useDialog();
    const [ratingValue, setRatingValue] = React.useState(review.rating);

    const editHandler = (review:Review)=>{
        console.log('Review to edit ',review);

        reviewDlgSetOpen(true);
    }
    const onDeleteConfirm = ()=>{
        console.log('Delete confirm ',review);
        //deleteReview(reviewToDeleteRef.current as Review);
        deleteReviewByIdAction(review)
        .then((resp)=>{
            console.log('Deleted review ',resp);
        })
    }
    const handleShowDeleteDlg =(review:Review) => {
        ///reviewToDeleteRef.current = review;
        setOpen(true);
    };
    React.useEffect(() => {
        setRatingValue(review.rating);
    },[review])
    return( <>
        <ReviewDlg open={reviewDlgOpen}
                   movieId={review.movie}
                   reviewToEdit={review}
                   handleClose={reviewDlgHandleClose}/>
        <ConfirmDialog
            title={"Delete Review"}
            content={"Are you sure you want to delete Review"}
            open={open}
            onConfirm={onDeleteConfirm}
            handleClose={handleClose} />
        <Card sx={{ mb: 3 }}>
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {review.review}
            </Typography>
            <Rating name="half-rating" value={ratingValue}
                    precision={1}
                    readOnly
                    onChange={(event, newValue) => {
                        setRatingValue(ratingValue);
                    }}/>
        </CardContent>
        <CardActions>
            <IconButton aria-label="edit" color="primary">
                <EditIcon  onClick={()=>editHandler(review)}/>
            </IconButton>
            <IconButton aria-label="edit" color="primary">
                <DeleteIcon onClick={()=>handleShowDeleteDlg(review)}/>
            </IconButton>
        </CardActions>
    </Card>
</>);
}