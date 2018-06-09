var app = require('../server');
var request = require('supertest');
const chai = require('chai');

const expect = chai.expect;
const Users = require('../models').Users;

describe('Sample test', function() {
  it('Responds with a 200 when accessing home route', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it("sends a message when accessing /api/hello with wrong token", function (done) {
    request(app)
      .get('/api/hello')
      .set('x-access-token', 'abc123')
      .expect(500)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(500);
        expect(res.body.auth).to.equal(false);
        expect(res.body.message).to.equal('Failed to authenticate token.');
        done();
      });
  });

  it("sends a message when accessing /api/hello with correct token", function (done) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTI4NTU1OTI2LCJleHAiOjE1Mjg2NDIzMjZ9.XDZRc4bVGh8H8Vk1pKTL8q48DBj6S3Yevb44qwIe9Hs'
    request(app)
      .get('/api/hello')
      .set('x-access-token', token)
      .expect(200)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal('Hello Guys');
        done();
      });
  });

  it("sends an error message when accessing /api/hello without token", function (done) {
    request(app)
      .get('/api/hello')
      .expect(403)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(403);
        expect(res.body.auth).to.equal(false);
        expect(res.body.message).to.equal('No token provided.');
        done();
      });
  })

  it('Create a user', function(done) {
    Users.destroy({
      where: {},
      truncate: true,
    });

    var user = {
      email: 'afasoroo@gmail.com',
      password: 'my awesome password',
    };

    request(app)
      .post('/api/v1/users/register')
      .send(user)
      .expect(200)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.user.email).to.equal(user.email);
        done();
      });
  });

  it('Logs in a registered user', function(done) {
    var user = {
      email: 'afasoroo@gmail.com',
      password: 'my awesome password',
    };

    request(app)
      .post('/api/v1/users/login')
      .send(user)
      .expect(200)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('Responds with a 401 if no user is found', function(done) {
    var user = {
      email: 'afasoroo@hotmail.com',
      password: 'my incredible password',
    };

    request(app)
      .post('/api/v1/users/login')
      .send(user)
      .expect(404)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });

  it('Responds with a 401 if password is invalid', function(done) {
    var user = {
      email: 'afasoroo@gmail.com',
      password: 'my not so awesome password',
    };

    request(app)
      .post('/api/v1/users/login')
      .send(user)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(401);
        expect(res.body.message).to.equal('Invalid credentials');
        done();
      });
  });

  it('Logs out a user', function(done) {

    request(app)
      .post('/api/v1/users/logout')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.auth).to.equal(false);
        expect(res.body.token).to.equal(null);
        done();
      });
  });
});
