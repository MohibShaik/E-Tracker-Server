const express = require('express');
const authRoute = require('./auth.routes');
const budgetRoute = require('./budget.routes');
const taskRoute = require('./task.routes');
const transactionRoute = require('./transaction.routes');
const userRoute = require('./user.routes');

const routes = (router) => {
  authRoute.authRoute(router);
  // budgetRoute.budgetRoute(router);
  // taskRoute.taskRoute(router);
  transactionRoute.transactionRoute(router);
  // userRoute.userRoute(router);

  return router;
};

exports.routes = routes;
