let express = require('express');
let router = express.Router();
const movie = require('../controllers/MovieController');
const {route} = require("express/lib/application");

router.get('/',movie.getAllMovies);
router.get('/:id',movie.getMovieById);
router.get('/year/:year',movie.getMovieByYear);
router.get('/title/:title',movie.getMovieByTitle);
router.post('/',movie.saveMovie);
router.put('/:id',movie.updateMovie);
router.delete('/:id',movie.deleteMovie);

module.exports = router;