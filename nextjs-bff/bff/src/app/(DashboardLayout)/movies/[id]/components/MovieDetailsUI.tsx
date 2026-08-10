import {Movie} from '@/lib/types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography'
import {apiGetMovieById} from "@/lib/api/movieApi";
interface MovieDetailsUIProps {
    id: string;
}
export default async function ({id}:MovieDetailsUIProps)
{
    const movie = await apiGetMovieById(id);
    return(<div>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 340 }}
                image="/images/movie.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {movie.title}
                </Typography>
                <Typography  variant="h5" component="div" gutterBottom>
                    {movie.director?.name}
                </Typography>
                <Typography  variant="h5" component="div" gutterBottom>
                    {movie.year}
                </Typography>
                <Typography  variant="h5" component="div" gutterBottom>
                    {movie.genre?.toString()}
                </Typography>
            </CardContent>
            {/*<CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>*/}
        </Card>

    </div>);
}