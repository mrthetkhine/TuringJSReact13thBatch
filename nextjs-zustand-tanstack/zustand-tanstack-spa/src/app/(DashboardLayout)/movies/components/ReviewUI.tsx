import { Review } from "@/app/lib/types";
import {Button, Card, CardActions, CardContent, IconButton, Rating } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import * as React from "react";

interface ReviewUIProps
{
    review:Review;
    editHandler:(review:Review) => void;
    handleShowDeleteDlg:(review:Review) => void;
}
export default function ReviewUI({review,editHandler,handleShowDeleteDlg}:ReviewUIProps)
{

    const [ratingValue, setRatingValue] = React.useState(review.rating);
    React.useEffect(() => {
        setRatingValue(review.rating);
    },[review])
    return( <>

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
                <EditIcon onClick={()=>editHandler(review)} />
            </IconButton>
            <IconButton aria-label="edit" color="primary">
                <DeleteIcon onClick={()=>handleShowDeleteDlg(review)}/>
            </IconButton>
        </CardActions>
    </Card>
</>);
}