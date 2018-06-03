const express = require('express');
const router = express.Router();
const usersController = require('../controllers').users;

router.post('/api/register', usersController.create);
router.post('/api/login', usersController.login);
router.post('/api/logout', usersController.logout);

module.exports = router

