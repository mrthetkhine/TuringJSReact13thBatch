import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from '@mui/material';
import * as React from "react";
import { useRouter } from 'next/navigation';
import ConfirmDialog from "@/app/(DashboardLayout)/components/shared/ConfirmDialog";
import useDialog from '../../hooks/useDialog';
import { useRef } from 'react';
import MovieDlg from './MovieDlg';
import { Movie } from '@/app/lib/types';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const movies:Movie[] = [
    {
        "_id": "6a25501651612f72429d43c4",
        "title": "The dark knight",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "6a25501651612f72429d43c5"
        },
        "year": 2020,
        "genre": [],
    },
    {
        "_id": "6a25504051612f72429d43c6",
        "title": "Insception",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "6a25504051612f72429d43c7"
        },
        "year": 2022,
        "genre": [],

    },
    {
        "_id": "6a25504e51612f72429d43c8",
        "title": "The Odyssey",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "6a25504e51612f72429d43c9"
        },
        "year": 2025,
        "genre": [],
    },
    {
        "_id": "6a26bdffbacf072977cbce07",
        "title": "The Terminator",
        "director": {
            "name": "James Cameron",
            "phoneNo": "09993",
            "_id": "6a26c03f58b54a676177a893"
        },
        "year": 2025,
        "genre": [],
    },
    {
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
    }
]
interface MovieListProps{
    movies:Movie[];
}
export default function MovieList({movies}:MovieListProps) {
   // const [deleteMovie,deleteMovieResult] =useDeleteMovieMutation();
    const router = useRouter();
    const {open, setOpen,handleClose} = useDialog();
    const {open:movieDlgOpen,
            setOpen:moveDlgSetOpen,
            handleClose:movieDlgHandleClose} = useDialog();

    const movieToDeleteRef = useRef<Movie|undefined>(undefined);
    const movieToEditRef = useRef<Movie|undefined>(undefined);

    const onDeleteConfirm = ()=>{
        console.log('Delete confirm ',movieToDeleteRef.current);
       /* deleteMovie(movieToDeleteRef.current as Movie)
            .then((data) => {
                console.log('Movie deleted successfully', data);
            });*/
    }
    const handleShowDeleteDlg = (movie:Movie)=>{
        movieToDeleteRef.current = movie;
        setOpen(true);

    }
    const handleShowMovieDlg = ()=>{
        moveDlgSetOpen(true);
    }
    const newMovieHandler = ()=>{
        movieToEditRef.current = undefined;
        moveDlgSetOpen(true);
    }
    const editHandler = (movie:Movie)=>{
        console.log('movie to edit ',movie);
        movieToEditRef.current =movie;
        moveDlgSetOpen(true);
    }
    const detailHandler = (movie:Movie)=>{
        console.log('Movie detail handler ',movie);
        router.push(`/movies/${movie._id}`);
    }
    return (
        <div>
            <MovieDlg open={movieDlgOpen}
                      movieToEdit={movieToEditRef.current}
                      handleClose={movieDlgHandleClose}/>
            <Button variant="contained"
                    type={"button"}
                    onClick={newMovieHandler}>
                New Movie
            </Button>
            <ConfirmDialog
                title={"Delete Movie"}
                content={"Are you sure you want to delete movie"}
                open={open}
                onConfirm={onDeleteConfirm}
                handleClose={handleClose} />


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" sx={{ fontWeight: 'bold' }}>Title</TableCell>
                            <TableCell align="right"  component="th" sx={{ fontWeight: 'bold' }}>Director</TableCell>
                            <TableCell align="right"  component="th" sx={{ fontWeight: 'bold' }}>Year</TableCell>
                            <TableCell align="right"  component="th" sx={{ fontWeight: 'bold' }}>Genre)</TableCell>
                            <TableCell align="right"  component="th" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((movie) => (
                            <TableRow
                                key={movie._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {movie.title}
                                </TableCell>
                                <TableCell align="right">{movie.director.name}</TableCell>
                                <TableCell align="right">{movie.year}</TableCell>
                                <TableCell align="right">{movie?.genre?.toString()}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" type={"button"} onClick={()=>editHandler(movie)}>Edit</Button>
                                    &nbsp;
                                    <Button variant="contained" type={"button"} onClick={()=>handleShowDeleteDlg(movie)}>Delete</Button>
                                    &nbsp;
                                    <Button variant="contained" type={"button"} onClick={()=>detailHandler(movie)}>Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
