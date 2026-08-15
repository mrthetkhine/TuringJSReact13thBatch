import{Review} from '@/lib/types';
import ReviewUI from './ReviewUI';
import {apiGetAllReviewsByMovie} from "@/lib/api/reviewApi";
import ReviewEntry from './ReviewEntry';

interface ReviewListProps {
    movieId:string;
}

export default async function ReviewList({
    movieId
                                         }:ReviewListProps){

    const reviews = await apiGetAllReviewsByMovie(movieId);
    return(<div>
        <ReviewEntry movieId={movieId}/>
        {
            reviews.map(review=><ReviewUI key={review._id}
                                          review={review}/>)
        }
    </div>);
}