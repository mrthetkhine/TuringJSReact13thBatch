const Movie = require('../models/Movie');

async function getAllMovies() {
    let movies = await Movie.find();
    return movies;
}
async function getMovieById(id) {
    let movie = await Movie.findById(id);
    return movie;
}
async function saveMovie(movie) {
    let savedMovie = await new Movie(movie).save();
    return savedMovie;
}
module.exports = {
    getAllMovies,
    getMovieById,
    saveMovie,
};