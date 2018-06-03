const app = require('../server');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

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

  it('Create a user', function(done) {
    const user = {
      email: 'afasoroo@gmail.com',
      password: 'my awesome password'
    };

    request(app)
      .post('/api/register')
      .send(user)
      .expect(200)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.user.email).to.equal(user.email);
        done();
      });
  })

  it("Logs in a registered user", function(done) {
    const user = {
      email: 'afasoroo@gmail.com',
      password: 'my awesome password'
    };

    request(app)
      .post('/api/login')
      .send(user)
      .expect(200)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });

  })

  it("Responds with a 401 if no user is found", function(done) {
    const user = {
      email: 'afasoroo@hotmail.com',
      password: 'my incredible password'
    };

    request(app)
      .post('/api/login')
      .send(user)
      .expect(404)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(404);
        done();
      });

  })

  it("Responds with a 401 if password is invalid", function(done) {
    const user = {
      email: 'afasoroo@gmail.com',
      password: 'my not so awesome password'
    };

    request(app)
      .post('/api/login')
      .send(user)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(401);
        expect(res.body.message).to.equal("Invalid credentials");
        done();
      });

  })
});
