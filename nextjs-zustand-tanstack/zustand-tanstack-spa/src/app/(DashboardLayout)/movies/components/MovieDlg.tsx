'use client';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {Box, TextField } from "@mui/material";
import {useForm,Controller, useFieldArray} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod";
import{movieSchema,MovieFormData} from "@/app/lib/schema/movieSchema";

import {useEffect} from "react";
import { Movie } from "@/app/lib/types";

interface MovieDlgProps {

    open: boolean;
    handleClose: () => void;
    movieToEdit?:Movie;
}
function movieFormDataToMovie(data:MovieFormData):Movie{
    return {
        _id:data._id,
        title:data.title,
        year:data.year,
        director:data.director,
        genre: data.genre.map(g=>g.value)
    }
}
export default function MovieDlg({
                                     open,
                                     handleClose,
                                     movieToEdit
                                 }:MovieDlgProps) {

    //const [saveMovie,saveMovieResult] = useSaveMovieMutation();
    //const [updateMovie,updateMovieResult] = useUpdateMovieMutation();

    let defaultGenre:Array<{value:string}> =[];
    if(movieToEdit?.genre){
        defaultGenre = movieToEdit.genre.map(g=>({'value':g}));
    }

   // console.log('MovieDlg movie to edit ',movieToEdit);

    let defaultMovieValues = {
        _id: movieToEdit?._id??'',
        title:  movieToEdit?.title??'',
        year: movieToEdit?.year??0,
        director: {
            _id:movieToEdit?.director?._id??'',
            name: movieToEdit?.director?.name??'',
        },
        genre: defaultGenre
        // Start with one initial field row
    };
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<MovieFormData>({
        resolver: zodResolver(movieSchema),
        mode: "onTouched",
        defaultValues: defaultMovieValues
    })
    useEffect(() => {
        console.log('MovieDlg useEffect ',movieToEdit);

        console.log('default movie value ',defaultMovieValues);
        reset(defaultMovieValues);
    }, [movieToEdit]);
    const { fields:genreFields, append, remove } = useFieldArray<MovieFormData>({
        control,
        name: "genre"
    });
    const onSubmit = (data:MovieFormData) => {
        console.log('Movie data',data);
        let movie:Movie = movieFormDataToMovie(data);
        if(!data._id)
        {
            //save
            console.log('Save movie');
            delete movie._id;
            delete movie.director._id;
           /* saveMovie(movie).then(()=>{
                handleClose();
            })*/
        }
        else
        {
            console.log('Update movie');
           /* updateMovie(movie).then(()=>{
                handleClose();
            })*/
        }
    }

    const onError = (errors:any) => console.log("Validation Failed:", errors);
    //console.log('errors ',errors);

    const addGenreHandler = ()=>{
        append({
            value:""
        });
    }
    const handleCancel=()=>{
        reset();
        handleClose();
    }
    return (
        <React.Fragment>

            <Dialog open={open} onClose={handleClose}
                    fullWidth={true}
                    maxWidth="lg"
            >
                <DialogTitle> New Movie</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit,onError)} id="subscription-form">
                    <Box >
                        <div>
                            <input
                                type={"hidden"}
                                {...register("_id")}

                            />
                            <TextField
                                label="Title"
                                fullWidth
                                margin="normal"
                                {...register("title")}
                                error={!!errors.title}
                                helperText={errors.title?.message}
                            />

                        </div>

                        <div>
                            <TextField
                                label="Year"
                                fullWidth
                                margin="normal"
                                {...register("year")}
                                error={!!errors.year}
                                helperText={errors.year?.message}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Director"
                                fullWidth
                                margin="normal"
                                {...register("director.name")}
                                error={!!errors.director?.name}
                                helperText={errors.director?.name?.message}
                            />
                        </div>
                        <div>
                            {
                                genreFields.map((gf,index)=><Box
                                    key={index}
                                    sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <TextField
                                    key={index}
                                    label="Genre"
                                    size="small"
                                    margin="normal"
                                    {...register(`genre.${index}.value`)}
                                    error={!!errors.genre?.[index]?.value}
                                    helperText={errors.genre?.[index]?.value?.message}
                                />
                                    <Button onClick={()=>remove(index)} type={"button"}
                                            variant={"contained"}
                                            size="small"
                                            sx={{ height: '40px' }}>Remove</Button>
                                </Box> )
                            }

                        </div>
                        <div>
                            <Button onClick={addGenreHandler} type={"button"} variant={"contained"}>Add Genre</Button>
                        </div>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleCancel} type={"button"}>Cancel</Button>
                            <Button type="submit" variant={"contained"}>
                                Save
                            </Button>
                        </Box>

                    </Box>
                    </form>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>

        </React.Fragment>
    );
}