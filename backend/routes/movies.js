let express = require('express');
let router = express.Router();
const Movie = require('../controllers/MovieController');
const {route} = require("express/lib/application");

router.get('/',Movie.getAllMovies);
router.get('/:id',Movie.getMovieById);
router.post('/',Movie.saveMovie);

module.exports = router;