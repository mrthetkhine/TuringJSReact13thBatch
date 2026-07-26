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
import{movieSchema,MovieFormData} from "@/lib/schema/movieSchema";
interface MovieDlgProps {

    open: boolean;
    handleClose: () => void;

}

export default function MovieDlg({
                                     open,
                                     handleClose,
                                 }:MovieDlgProps) {


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<MovieFormData>({
        resolver: zodResolver(movieSchema),
        mode: "onTouched",
        defaultValues: {
            genre: [{
                value: "",
            }] // Start with one initial field row
        }
    })
    const { fields:genreFields, append, remove } = useFieldArray<MovieFormData>({
        control,
        name: "genre"
    });
    const onSubmit = (data:MovieFormData) => console.log('Movie data',data);
    const onError = (errors:any) => console.log("Validation Failed:", errors);
    console.log('errors ',errors);

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
                                genreFields.map((gf,index)=> <TextField
                                    key={index}
                                    label="Genre"
                                    fullWidth
                                    margin="normal"
                                    {...register(`genre.${index}.value`)}
                                    error={!!errors.genre?.[index]?.value}
                                    helperText={errors.genre?.[index]?.value?.message}
                                />)
                            }

                        </div>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleClose} type={"button"}>Cancel</Button>
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