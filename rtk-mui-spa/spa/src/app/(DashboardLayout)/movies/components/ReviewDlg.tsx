
import{Review, useSaveReviewMutation, useUpdateReviewMutation} from '@/lib/features/reviews/reviewApiSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import {Controller, useForm } from 'react-hook-form';
import{reviewSchema,ReviewFormData} from "@/lib/schema/reviewSchema";
import {MovieFormData} from "@/lib/schema/movieSchema";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Box, FormHelperText, Rating, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import * as React from "react";
import {useEffect} from "react";
interface ReviewDlgProps {

    open: boolean;
    movieId:string;
    handleClose: () => void;
    reviewToEdit?:Review;
}
export default function ReviewDlg({
    open,
    movieId,
    handleClose,
    reviewToEdit
                                  }:ReviewDlgProps)
{
    const [saveReview,saveReviewResult] = useSaveReviewMutation();
    const [updateReview,updateReviewResult ]= useUpdateReviewMutation();

    const defaultReviewValues  = {
        _id: reviewToEdit?._id??'',
        review:  reviewToEdit?.review??'',
        rating: reviewToEdit?.rating??0,
    };
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
        mode: "onTouched",
        defaultValues: defaultReviewValues
    });
    useEffect(() => {
        console.log('ReviewDlg useEffect ',reviewToEdit);

        console.log('default movie value ',defaultReviewValues);
        reset(defaultReviewValues);
    }, [reviewToEdit]);
    const onSubmit = (data:ReviewFormData) => {
        console.log('Review data', data);
        let review: Review = {
            ...data,
            movie:movieId,
        }
        if(!review._id)
        {
            //Save
            delete review._id;
            console.log('Save Review ',review);
            saveReview(review);
            handleClose();
        }
        else
        {
            //update
            console.log('Update Review ',review);
            updateReview(review);
            handleClose();
        }
    };
    const onError = (errors:any) => console.log("Validation Failed:", errors);
    //console.log('errors ',errors);
    const handleCancel=()=>{
        reset();
        handleClose();
    }
    return(<React.Fragment>

        <Dialog open={open} onClose={handleClose}
                fullWidth={true}

        >
            <DialogTitle>
                {
                    reviewToEdit?'Edit Review':'New Review'
                }
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit,onError)} id="subscription-form">
                    <Box >
                        <div>
                            <input
                                type={"hidden"}
                                {...register("_id")}

                            />
                            <TextField
                                label="Review"
                                fullWidth
                                margin="normal"
                                {...register("review")}
                                error={!!errors.review}
                                helperText={errors.review?.message}
                            />

                        </div>
                        <div>
                            <Controller
                                name="rating"
                                control={control}
                                rules={{
                                    required: 'Please provide a rating',
                                    min: { value: 1, message: 'Rating must be at least 1 star' }
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <Rating
                                        name="userRating"
                                        value={Number(value)} // Ensure value is a number type
                                        onChange={(_, newValue) => {
                                            // React Hook Form expects the updated value passed directly to onChange
                                            onChange(newValue);
                                        }}
                                    />
                                )}
                            />
                            {errors.rating && (
                                <FormHelperText error>{errors.rating?.message}</FormHelperText>
                            )}
                        </div>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleCancel} type={"button"}>Cancel</Button>
                            <Button type="submit" variant={"contained"}>
                                {
                                    reviewToEdit?'Update':'Save'
                                }
                            </Button>
                        </Box>

                    </Box>
                </form>
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>

    </React.Fragment>);
}
