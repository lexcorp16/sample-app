const express = require('express');
const router = express.Router();
const usersController = require('../controllers').users;

router.post('/api/v1/users/register', usersController.create);
router.post('/api/v1/users/login', usersController.login);
router.post('/api/v1/users/logout', usersController.logout);

module.exports = router

