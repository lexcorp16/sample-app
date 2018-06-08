const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/index');

router.get("/api/hello", verifyToken, (req, res) => {
  res.send({message: 'Hello Guys'});
})


module.exports = router;
