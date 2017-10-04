/**
 * Created by Bien on 2017-09-29.
 */
const passport = require('passport');


module.exports = (app) => {
//forward request from client to google
    app.get('/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

//handle googles initial callback with passport.
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();  //passport attaches these methods to the req object.
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);  //passport attaches user object to the req object.
    });
};