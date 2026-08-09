'use client';

import MovieDlg from "@/app/(DashboardLayout)/movies/components/MovieDlg";
import Button from "@mui/material/Button";
import * as React from "react";
import useDialog from "@/lib/hooks/useDialog";
import {Movie} from '@/lib/types';

interface EditMovieButtonProps {
    movie:Movie;
}
export default function EditMovieButton({
    movie
                                        }: EditMovieButtonProps) {
    const {open:movieDlgOpen,
        setOpen:moveDlgSetOpen,
        handleClose:movieDlgHandleClose} = useDialog();

    const editMovieHandler = ()=>{

        moveDlgSetOpen(true);
    }
    return (<>
        <MovieDlg open={movieDlgOpen}
                  movieToEdit={movie}
                  handleClose={movieDlgHandleClose}/>
        <Button variant="contained"
                type={"button"}
                onClick={editMovieHandler}>
            Edit
        </Button>
        </>)
}