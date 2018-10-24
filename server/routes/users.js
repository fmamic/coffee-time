const aqp = require('api-query-params');
const express = require('express')
const router = express.Router();
const User = require('../models/user')

// get the list of Users from the database
router.get('/users', function(req, res, next) {
    const { filter, skip, limit, sort, projection } = aqp(req.query);
    User.find(filter).skip(skip).limit(limit).sort(sort).select(projection).then(function (users) {
      res.send(users);
    }).catch(next);
});

// add a new User to the database
router.post('/users', function(req, res, next) {
    User.create(req.body).then(function(user) {  
        res.send(user);
    }).catch(next);
});

// update User
router.put('/users/:id', function(req, res, next) {
    User.findOneAndUpdate({_id: req.params.id}, req.body).then(function(user) {
        User.findOne({_id: req.params.id}).then(function(userUpdate) {
            res.send(userUpdate);
        });
    }).catch(next);
});

// delete User from the database
router.delete('/users/:id', function(req, res, next) {
    User.findOneAndRemove({_id: req.params.id}).then(function(user) {
        res.send(user);
    }).catch(next);
});

module.exports = router;