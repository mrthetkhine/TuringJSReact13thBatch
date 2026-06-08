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
async function getMovieByYear(req,res)
{
    let year = req.params.year;
    let movies = await movieService.getMovieByYear(year);
    res.status(200).json({
        message: "Movies list returned",
        data: movies,
    });
}
async function getMovieByTitle(req,res)
{
    let title = req.params.title;
    let movies = await movieService.getMovieByTitle(title);
    res.status(200).json({
        message: "Movies list returned by title",
        data: movies,
    });
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
async function updateMovie(req,res)
{
    let id = req.params.id;
    let movie = req.body;
    //console.log('movie ',movie);
    let updatedMovie = await movieService.updateMovie(id,movie);
    if(updatedMovie)
    {
        res.json({
            message: "Movie update successfully",
            data: updatedMovie,
        })
    }
    else {
        throw new util.NotFoundError('Movie  id '+id+' not found');
    }
}
async function deleteMovie(req,res)
{
    let id = req.params.id;

    //console.log('movie ',movie);
    let deletedMovie = await movieService.deleteMovieById(id);
    if(deletedMovie)
    {
        res.json({
            message: "Movie deleted successfully",
            data: deletedMovie,
        })
    }
    else {
        throw new util.NotFoundError('Movie  id '+id+' not found');
    }
}
module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByYear,
    getMovieByTitle,
    saveMovie,
    updateMovie,
    deleteMovie,
}