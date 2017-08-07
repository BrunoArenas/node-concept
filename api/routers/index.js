'use strict'

const path = require('path');
const routes = [
  require(path.resolve(path.join('api', 'routers', 'routes' ,'resources.js'))),
];

// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};
