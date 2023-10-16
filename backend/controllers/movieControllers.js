const Movie = require('../models/Movie');
const { response } = require('../helpers/response');

// add new movie
const createMovie = async (req, res) => {
  try {
    const movies = await Movie.findOne({}).sort({
      rank: -1,
      createdAt: -1,
    });
    const dataRank = movies.rank; //get last index in data
    var lastRank = req.body.rank;

    if (lastRank > dataRank + 1) {
      return response(res, {
        code: 500,
        success: false,
        message: 'Ranking not valid',
      });
    }

    // update position for ranking
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

    const result = await Movie.create(req.body);
    return response(res, {
      code: 201,
      success: true,
      message: 'Data Successfull',
      content: result,
    });
  } catch (error) {
    return response(res, {
      code: 400,
      success: false,
      message: error.message,
    });
  }
};

// get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({
      rank: 1,
      createdAt: -1,
    });

    return response(res, {
      code: 200,
      success: true,
      content: movies,
    });
  } catch (error) {
    return response(res, {
      code: 400,
      success: false,
      message: error.message,
    });
  }
};

// get movie by ID
const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    return response(res, {
      code: 200,
      success: true,
      content: movie,
    });
  } catch (error) {
    return response(res, {
      code: 400,
      success: false,
      message: error.message,
    });
  }
};

// update movie
const updateMovie = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await Movie.findByIdAndUpdate(id, { ...req.body }, { new: true });
    return response(res, {
      code: 200,
      success: true,
      message: 'updated successfully',
      content: updated,
    });
  } catch (error) {
    return response(res, {
      code: 400,
      success: false,
      message: error.message,
    });
  }
};

// delete movie
const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    return response(res, {
      code: 200,
      success: true,
      message: 'Movie deleted',
    });
  } catch (error) {
    return response(res, {
      code: 400,
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createMovie, getMovies, getMovie, updateMovie, deleteMovie };
