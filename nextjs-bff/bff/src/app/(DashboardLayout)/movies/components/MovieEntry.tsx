'use client';
import Button from "@mui/material/Button";
import * as React from "react";
import useDialog from '@/lib/hooks/useDialog';
import MovieDlg from "./MovieDlg";
export default function MovieEntry()
{
    const {open:movieDlgOpen,
        setOpen:moveDlgSetOpen,
        handleClose:movieDlgHandleClose} = useDialog();

    const newMovieHandler = ()=>{

        moveDlgSetOpen(true);
    }
    return(<div>
        <MovieDlg open={movieDlgOpen}
                  handleClose={movieDlgHandleClose}/>
        <Button variant="contained"
                type={"button"}
                onClick={newMovieHandler}>
            New Movie
        </Button>
    </div>);
}