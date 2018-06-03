const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const routes = require('./routes');
const userRoutes = require('./routes/users');

const PORT = 3300;

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Express works");
})

app.use("/", routes);
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})

module.exports = app;
