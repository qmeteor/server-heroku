/**
 * Created by Bien on 2017-09-28.
 */
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000; // An env var for HEROKU to communicate with
app.listen(PORT);