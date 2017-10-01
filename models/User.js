/**
 * Created by Bien on 2017-09-29.
 */
const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;


const userSchema = new Schema({
    google: {
        id: String
    }
});

mongoose.model('users', userSchema);