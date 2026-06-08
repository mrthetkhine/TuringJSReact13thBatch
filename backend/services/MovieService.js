const Movie = require('../models/Movie');
const mongoose = require("mongoose");


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
async function updateMovie(id,movie)
{
    const _id = new mongoose.Types.ObjectId(id);
    let updateMovie = await Movie.findOneAndUpdate({
        _id
    }, movie,{
        runValidators: true,
        returnDocument: 'after',
        upsert:true,
    })
    return updateMovie;
}
async function deleteMovieById(id)
{
    const _id = new mongoose.Types.ObjectId(id);
    let deletedMovie = await Movie.findOneAndDelete({
        _id
    });
    return deletedMovie;
}
async function getMovieByYear(year) {
    let movie = await Movie.find({
        year:year
    })
    return movie;
}
async function getMovieByTitle(title) {
    let movie = await Movie.find({
        title:new RegExp(title,'i')
    })
    return movie;
}
module.exports = {
    getAllMovies,
    getMovieById,
    saveMovie,
    updateMovie,
    deleteMovieById,
    getMovieByYear,
    getMovieByTitle,
};