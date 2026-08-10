'use server';
import { revalidatePath } from 'next/cache'
import {MovieFormData, movieSchema} from "@/lib/schema/movieSchema";
import { Movie } from "../types";
import {apiSaveMovie ,apiDeleteMovieById, apiUpdateMovie} from "@/lib/api/movieApi";


export async function saveOrUpdateMovieAction(movieFormData:MovieFormData):Promise<any>
{
    const validateMovieForm = movieSchema.safeParse(movieFormData);
    console.log('validateMovieForm', validateMovieForm);
    if(validateMovieForm.success)
    {
        let data:any = validateMovieForm.data;
        console.log('Validation Success ',data);
        data.genre = data.genre.map((g:any)=>g.value);

        if(!data._id)
        {
            //await delay(4000);
            let movie = await apiSaveMovie(data as Movie);
            revalidatePath('/movies');
            return movie;
        }
        else {
            //update
            let movie = await apiUpdateMovie(data as Movie);
            revalidatePath('/movies');
            return movie;
        }

    }
    else
    {
        console.log('Error ');
        return validateMovieForm.error;
    }
}

export async function deleteMovieByIdAction(id:string):Promise<Movie> {
    let movie = await apiDeleteMovieById(id);
    revalidatePath('/movies');
    return movie;
}
