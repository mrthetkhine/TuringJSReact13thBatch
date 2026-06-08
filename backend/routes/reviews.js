let express = require('express');
let router = express.Router();
let review = require("../controllers/ReviewController");

router.get('/',review.getAllReview);
router.get('/movies/:movieId',review.getAllReviewByMovieId);
router.post('/',review.saveReview);
router.put('/:id',review.updateReviewById);
router.delete('/:id',review.deleteReviewById);

module.exports = router;