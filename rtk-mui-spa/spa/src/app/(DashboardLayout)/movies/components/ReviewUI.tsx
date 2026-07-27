import { Review } from "@/lib/features/reviews/reviewApiSlice";
import {Button, Card, CardActions, CardContent, IconButton, Rating } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import * as React from "react";

interface ReviewUIProps
{
    review:Review;
}
export default function ReviewUI({review}:ReviewUIProps)
{
    return( <Card sx={{ mb: 3 }}>
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {review.review}
            </Typography>
            <Rating name="half-rating" defaultValue={review.rating} precision={1} />
        </CardContent>
        <CardActions>
            <IconButton aria-label="edit" color="primary">
                <EditIcon />
            </IconButton>
            <IconButton aria-label="edit" color="primary">
                <DeleteIcon />
            </IconButton>
        </CardActions>
    </Card>);
}