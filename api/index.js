require('dotenv').config();

'use strict';

const path = require('path');
const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  modelsPath = path.resolve(path.join('api', 'models')),
  routersPath = path.resolve(path.join('api', 'routers', 'index.js'));

const app = express(),
      PORT = process.env.PORT,
      db = require(modelsPath),
      router = require(routersPath);

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});

module.exports = app;
