const router = require("express").Router();
const { createMovie, getMovies } = require("../controllers/movieControllers");

router.post("/", createMovie);
router.get("/", getMovies);

module.exports = router;
