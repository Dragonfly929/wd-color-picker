require('dotenv').config(); // Load environment variables

require('@babel/register')({
  extensions: ['.js', '.jsx']
});

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.MONGODB_URI; // Use environment variable
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.get('/color-picker', requireAuth, (req, res) => res.render('color-picker'));

const ColorPicker = require('./components/ColorPicker');

// Routes...
app.get('/color-picker', requireAuth, (req, res) => {
  res.render('color-picker', { title: 'Color Picker', colorPicker: ColorPicker });
});
app.use(authRoutes);
