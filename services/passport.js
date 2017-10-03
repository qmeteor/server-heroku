/**
 * Created by Bien on 2017-09-29.
 */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },

    //this is promises below which looks weird refactored similar to .then
    async (accessToken, refresh, profile, done) => {
        const existingUser = await User.findOne({ google: {
            id: profile.id
            }
        });

        if(existingUser) {
                // we already ahve a record with the given profiel ID
            console.log('existingUser or user:', existingUser);
            return done(null, existingUser);
        }
                // we don't have a user record with a user ID
        const user = await new User({ google: {id: profile.id}}).save(); // passes this back to passport
        done(null, user);

    })
);

// Create a cookie for client from model
passport.serializeUser((user, done) => {
    console.log('user model:', user.google.id); // notice how we are using the entire object id not the google profile id. why because not everyone signs in using google. maybe facebook. or other.
    done(null, user.id);
});

// Turn cookie back in to user model
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});