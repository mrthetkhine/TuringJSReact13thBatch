import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from '@mui/material';
import * as React from "react";
import {Movie} from '@/lib/types';
import EditMovieButton from "@/app/(DashboardLayout)/movies/components/EidtMovieButton";
import DeleteMovieButton from "@/app/(DashboardLayout)/movies/components/DeleteMovieButton";
import Link from 'next/link';
interface MovieListProps{
    movies:Movie[];
}
export default function MovieList({
    movies
                                  }:MovieListProps)
{
    return(<div>
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
                                <EditMovieButton  movie={movie}/>
                                &nbsp;
                                <DeleteMovieButton movie={movie}/>
                                &nbsp;
                                {/*<Button variant="contained" type={"button"} >Details</Button>*/}
                                <Link href={`/movies/${movie._id}`} passHref >
                                    <Button variant="contained" type={"button"}>Details</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>);
}