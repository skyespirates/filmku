require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const movieRoutes = require('./routes/movieRoutes');
const { seedDB, cleanDB } = require('./helpers');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/movies', movieRoutes);

// seedDB();
// cleanDB();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to database');
      console.log('Server is running on port ' + process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
