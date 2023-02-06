const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    rank: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);
