/**
 * Created by Bien on 2017-09-28.
 */
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./models/User');  //this gets it ready on start
require('./services/passport');


mongoose.connect(keys.mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('We are connected!'));

const app = express();

app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]

  })
);
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file or main.css file.
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });


}

authRoutes(app);

const PORT = process.env.PORT || 5000; // An env var for HEROKU to communicate with
app.listen(PORT);