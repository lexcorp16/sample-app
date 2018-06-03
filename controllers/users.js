const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Users = require('../models').Users;

module.exports = {
  create(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    return Users.create({
      email: req.body.email,
      password: hashedPassword,
    })
      .then(user => {
        // create a token
        const token = jwt.sign({ id: user.id }, 'mysupersecret', {
          expiresIn: 86400, // expires in 24 hours
        });

        res.status(200).send({ auth: true, token: token, user });
      })
      .catch(error => res.status(400).send(error));
  },

  login(req, res) {
    return Users.find({
      where: {
        email: req.body.email,
      },
    })
      .then(user => {
        if (!user) return res.status(404).send('No user found.');

        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password,
        );
        if (!passwordIsValid)
          return res.status(401).send({ auth: false, token: null, message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id }, 'mysupersecret', {
          expiresIn: 86400, // expires in 24 hours
        });

        res.status(200).send({ auth: true, token: token, user });
      })
      .catch(err => res.status(400).send(err));
  },
  logout(req, res) {
    return res.status(200).send({ auth: false, token: null });
  }
};
