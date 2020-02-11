const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

const {
  env: {
    DB_CONNECTION
  }= {},
} = process;

// Middleware
const postsRoutes = require('./routes/posts');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', postsRoutes);

// Routes

app.get('/', (req, res) => {
  res.send('Home');
});

// Connect DB

mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// Listen

app.listen(3000);
