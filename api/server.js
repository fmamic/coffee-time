const express = require('express');
const routes = require('./routes/users');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

mongoose.connect('mongodb://mongo:27017/coffee-time', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// error handling
app.use(function(err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, () => {
    console.log('Now listening for requests');
});