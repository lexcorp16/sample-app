const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/index');

router.get("/api/hello", (req, res) => {
  res.json({message: 'Hello Guys'});
})


module.exports = router;
