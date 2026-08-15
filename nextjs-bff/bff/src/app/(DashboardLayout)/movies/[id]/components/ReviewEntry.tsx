'use client';

import useDialog from "@/lib/hooks/useDialog";
import { Button } from "@mui/material";
import ReviewDlg from "./ReviewDlg";

interface ReviewEntryProps
{
    movieId:string;
}

export default function ReviewEntry({
    movieId
                                    }: ReviewEntryProps)
{
    const {open:reviewDlgOpen,
        setOpen:reviewDlgSetOpen,
        handleClose:reviewDlgHandleClose} = useDialog();
    const newReviewHandler = ()=>{
        reviewDlgSetOpen(true);
    }
    return(<div>
        <ReviewDlg open={reviewDlgOpen}
                   movieId={movieId}

                   handleClose={reviewDlgHandleClose}/>
        <Button variant="contained"
                type={"button"}
                onClick={newReviewHandler}>
            New Review
        </Button>
    </div>);
}