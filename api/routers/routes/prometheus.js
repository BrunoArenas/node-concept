'use strict';

const prometheus = require('prom-client');
module.exports = (app, db) => {
  app.get('/metrics', (req, res) => {
      res.end(prometheus.register.metrics());
  });
};
