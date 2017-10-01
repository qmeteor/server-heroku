/**
 * Created by Bien on 2017-09-29.
 */

if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

// https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http://localhost/auth/google/callback&scope=profile%20email&client_id=abc

// http://localhost:5000/auth/google/callback?code=4/JL8B-b82R_RgWLib_q-SMdpiPb3puPBZUtnDmAflahQ#