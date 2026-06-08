const reviewService = require("../services/ReviewService");
const util = require("./../util/AppError");

async function getAllReview(req,res)
{
    let reviews = await reviewService.getAllReview();
    res.json({
        message: "Successfully retrieved all reviews",
        data: reviews
    })
}
async function getAllReviewByMovieId(req,res)
{
    let movieId= req.params.movieId;
    let reviews = await reviewService.getAllReviewByMovieId(movieId);
    res.json({
        message: "Successfully retrieved all reviews for movies",
        data: reviews
    })
}
async function saveReview(req,res)
{
    let review = await reviewService.saveReview(req.body);
    res.status(201).json({
        message: "Successfully save review",
        data: review
    })
}
async function updateReviewById(req,res)
{
    let id = req.params.id;
    let review = await reviewService.updateReviewById(id,req.body);
    res.json({
        message: "Successfully updated review",
        data: review
    })
}
async function deleteReviewById(req,res)
{
    let id = req.params.id;
    let review = await reviewService.deleteReviewById(id);
    if(review)
    {
        res.json({
            message: "Successfully deleted review",
            data: review
        })
    }
    else
    {
        throw new util.NotFoundError('Review not found');
    }

}
module.exports ={
    getAllReview,
    getAllReviewByMovieId,
    saveReview,
    updateReviewById,
    deleteReviewById,
}