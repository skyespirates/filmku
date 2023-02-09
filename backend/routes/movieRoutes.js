const router = require('express').Router();
const { createMovie, getMovies, getMovie, updateMovie, deleteMovie } = require('../controllers/movieControllers');

router.post('/', createMovie);
router.get('/', getMovies);
router.get('/:id', getMovie);
router.patch('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
