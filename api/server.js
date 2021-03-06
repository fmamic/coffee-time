const express = require('express');
const routes = require('./routes/users');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('./helpers/jwt');

// set up express app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(jwt());

if (process.env.NODE_ENV !== 'production') {
    dotenv.load();
}

const mongoPort = process.env.MONGO_PORT;
const mongoHostname = process.env.MONGO_HOSTNAME;
const mongoDatabase = "coffee-time";

mongoose.connect(`mongodb://${mongoHostname}:${mongoPort}/${mongoDatabase}`, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// initialize routes
app.use('/api', routes);

// error handling
app.use(function(err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, () => {
    console.log(`Now listening for requests on port ${process.env.port || 4000}`);
});

module.exports = app