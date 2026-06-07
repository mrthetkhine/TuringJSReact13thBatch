const movieService = require("../services/MovieService");
const util = require("./../util/AppError");
async function getAllMovies(req,res)
{
    let movies = await movieService.getAllMovies();
    res.status(200).json({
        message: "Movies list returned",
        data: movies,
    });
}
async function getMovieById(req,res)
{
    let id = req.params.id;
    let movie = await movieService.getMovieById(id);
    if(movie)
    {
        res.status(200).json({
            message: "Movie returned",
            data: movie,
        });
    }
    else
    {
        throw new util.NotFoundError('Movie not found');
    }
}
async function saveMovie(req,res)
{
    let movie = req.body;
    let savedMovie = await movieService.saveMovie(movie);
    res.status(201).json({
        message: "Movie saved successfully",
        data: savedMovie,
    })
}
module.exports = {
    getAllMovies,
    getMovieById,
    saveMovie,
}