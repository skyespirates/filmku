const router = require('express').Router();
const { createMovie, getMovies, getMovie, updateMovie, deleteMovie, contohMovie } = require('../controllers/movieControllers');

router.post('/', createMovie);
router.get('/', getMovies);
router.get('/:id', getMovie);
router.patch('/:id', updateMovie);
router.delete('/:id', deleteMovie);
router.post('/contoh', contohMovie);

module.exports = router;
