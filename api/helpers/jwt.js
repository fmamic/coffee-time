const expressJwt = require('express-jwt');

module.exports = jwt;

function jwt() {
    const secret = 'secret';
    return expressJwt({ secret }).unless({
        path: [
            '/api/users/signup',
            '/api/users/signin'
        ]
    });
}