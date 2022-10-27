const mongoose = require("mongoose");
const Movie = require("../models/Movie");

const createMovie = async (req, res) => {
  const { rank, title, year, genre, country, description } = req.body;
  try {
    const movie = await Movie.create({
      rank,
      title,
      year,
      genre,
      country,
      description,
    });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createMovie, getMovies };
