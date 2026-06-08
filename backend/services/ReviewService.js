const mongoose = require("mongoose");
const Review = require('../models/Review');

async function getAllReview() {
    let reviews =await Review.find();
    return reviews;
}
async function getAllReviewByMovieId(movieId) {
    let id = new mongoose.Types.ObjectId(movieId);
    let reviews =await Review.find({
        movie:id
    })
    //.populate("movie");
    return reviews;
}
async function saveReview(review) {
    let newReview = new Review({
        ...review,
        movie:new mongoose.Types.ObjectId(review.movie),
    })
    let savedReview =await newReview.save();
    return savedReview;
}
async function updateReviewById(id,review) {
    review.movie = new mongoose.Types.ObjectId(review.movie);
    let _id = new mongoose.Types.ObjectId(id);
    let updatedReview =await Review.findOneAndUpdate({
        _id
    },review,{
        runValidators: true,
        returnDocument: 'after',
    })
    return updatedReview;
}
async function deleteReviewById(id) {

    let _id = new mongoose.Types.ObjectId(id);
    let review =await Review.findOneAndDelete({
        _id
    })
    return review;
}
module.exports = {
    getAllReview,
    getAllReviewByMovieId,
    saveReview,
    updateReviewById,
    deleteReviewById,
}