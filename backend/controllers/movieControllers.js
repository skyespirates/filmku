const Movie = require('../models/Movie');
const multer = require('multer');

// SET STORAGE
const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + '-' + 'image.png');
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: Storage, fileFilter: fileFilter }).single('testImage');

const createMovie = async (req, res) => {
  try {
    const movies = await Movie.findOne({}).sort({
      rank: -1,
      createdAt: -1,
    });
    const dataRank = movies.rank;
    // console.log(movies.rank);

    upload(req, res, (err) => {
      if (err) {
        console.log('file not exist');
      } else {
        var lastRank = req.body.rank;
        // console.log(lastRank);
        while (lastRank <= dataRank) {
          const oldRank = { rank: lastRank };
          const newRank = { rank: parseInt(lastRank) + 1 };
          Movie.findOneAndUpdate(oldRank, newRank, function (err, doc) {
            if (err) {
              console.log('Something wrong when updating data!');
            }
            // console.log(doc);
          });
          lastRank++;
        }
        const image = req.file.filename;
        const newImage = new Movie({
          rank: req.body.rank,
          title: req.body.title,
          year: req.body.year,
          genre: req.body.genre,
          country: req.body.country,
          description: req.body.description,
          image: image,
        });

        newImage
          .save()
          .then((result) =>
            res.send({
              message: ' sukses',
              data: result,
            })
          )
          .catch((err) => res.send(err));
      }
    });
    // const movie = await Movie.create(req.body);
    // res.status(200).json(movie);
  } catch (error) {
    console.log('salah');
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
    // console.log('update');
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
