require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const movieRoutes = require('./routes/movieRoutes');
const { seedDB, cleanDB } = require('./helpers');

const app = express();

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

app.use(express.json());
app.use(cors());
app.use('/api/v1/movies/', movieRoutes);
app.use('/images', express.static(path.join(__dirname, 'uploads')));
// app.use(multer({ storage: Storage }).single('image'));
// seedDB();
// cleanDB();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to database');
      console.log('Server is running on port ' + process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
