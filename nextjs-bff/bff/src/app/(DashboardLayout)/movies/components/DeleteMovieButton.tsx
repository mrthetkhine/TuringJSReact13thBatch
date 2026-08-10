'use client';
import { Movie } from "@/lib/types";
import useDialog from '@/lib/hooks/useDialog';
import ConfirmDialog from "../../layout/shared/ConfirmDialog";
import { Button } from "@mui/material";
import {deleteMovieByIdAction} from "@/lib/actions/movieAction";

interface DeleteMovieButtonProps {
    movie: Movie
}
export default function DeleteMovieButton({
    movie
                                          }:DeleteMovieButtonProps)
{
    const {open, setOpen,handleClose} = useDialog();
    const onDeleteConfirm = ()=>{
        console.log('Delete confirm ',movie);
        deleteMovieByIdAction(movie?._id!!)
            .then(data=>{
               console.log('Delete movie ',data);
               handleClose();
            });
    }
    const handleShowDeleteDlg = ()=>{

        setOpen(true);

    }
    return(<>
        <ConfirmDialog
            title={"Delete Movie"}
            content={"Are you sure you want to delete movie"}
            open={open}
            onConfirm={onDeleteConfirm}
            handleClose={handleClose} />
        <Button variant="contained" type={"button"} onClick={()=>handleShowDeleteDlg()}>Delete</Button>
    </>)
}