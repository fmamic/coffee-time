// 1. Include config and modules
var config = require('./config');
var moment = require('moment');
var jwt = require('jwt-simple');
var Auth = require('./controllers/auth.js');
var People = require('./controllers/people.js');

// 2. Authentication Middleware
function ensureAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'TokenMissing' });
  }
  var token = req.headers.authorization.split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ error: "TokenInvalid" });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ error: 'TokenExpired' });
  }
  // check if the user exists
  Person.findById(payload.sub, function(err, person){
    if (!person){
      return res.status(401).send({error: 'PersonNotFound'});
    } else {
      req.user = payload.sub;
      next();
    }
  });
};

// 3. Routes
module.exports = function (app) {
  // 4. Authentication Routes
  app.post('/auth/login', Auth.login);
  app.post('/auth/signup', Auth.signup);
  // 5. Application Routes
  app.get('/people', ensureAuthenticated, People.list);
  app.get('/people/page/:page', ensureAuthenticated, People.list);
  app.get('/people/:id', ensureAuthenticated, People.show);
  app.get('/profile', ensureAuthenticated, People.profile);

};