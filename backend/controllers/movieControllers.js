const Movie = require('../models/Movie');
const multer = require('multer');

// SET STORAGE
const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + '-' + 'image');
  },
});

const upload = multer({ storage: Storage }).single('testImage');

const createMovie = async (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newImage = new Movie({
          rank: req.body.rank,
          title: req.body.title,
          year: req.body.year,
          genre: req.body.genre,
          country: req.body.country,
          description: req.body.description,
          image: {
            data: req.file.filename,
            contentType: 'image/png',
          },
        });
        newImage
          .save()
          .then(() => res.send('sukses'))
          .catch((err) => res.send(err));
      }
    });
    // const movie = await Movie.create(req.body);
    // res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({
      rank: 1,
      createdAt: -1,
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({ movie });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateMovie = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await Movie.findByIdAndUpdate(id, { ...req.body }, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createMovie, getMovies, getMovie, updateMovie, deleteMovie };
