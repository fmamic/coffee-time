const aqp = require('api-query-params');
const express = require('express')
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs');

// get the list of Users from the database
router.get('/users', function(req, res, next) {
    const { filter, skip, limit, sort, projection } = aqp(req.query);
    User.find(filter).skip(skip).limit(limit).sort(sort).select(projection).then(function (users) {
      res.send(users);
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

// create User with hashed password
router.post('/users/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        req.body.password = hash;
        User.create(req.body).then(user => {
            res.send(user);
        }).catch(next);
    });
});

router.post('/users/signin', (req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            bcrypt.compare(req.body.password, user.password, function(err, result){
            if(err) {
                return res.status(401).json({
                    failed: 'Unauthorized Access'
                });
            }
            if(result) {
                return res.status(200).json({
                    success: 'Welcome to the JWT Auth'
                });
            }
            return res.status(401).json({
                failed: 'Unauthorized Access'
            });
       });
    })
    .catch(next);;
 });

module.exports = router;