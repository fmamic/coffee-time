const request = require('supertest');

//==================== user API test ====================

/**
 * Testing get all user endpoint
 */
describe('GET /api/users', function () {
    it('respond with json containing a list of all users', function (done) {
        request("api:4000")
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing add new User
 */
describe('POST /api/users', function () {
    const data = {
        "name": "Filip",
        "email": "email@email.com",
        "password": "dummy"
    }
    it('respond with json containing a list of all users', function (done) {
        request("api:4000")
            .post('/api/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});