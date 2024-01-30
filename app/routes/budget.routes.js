// const controller = require('../controllers/budget.controller.js');
// const authJwt = require('../middleware/authJWT.js');
// var express = require('express');
// var router = express.Router();

// const budgetRoute = (router) => {
//   // get apis
//   app.get(
//     '/api/allBudgets/:userId',
//     [authJwt.verifyToken],
//     controller.getAllBudgetsByUserId
//   );
//   app.get(
//     '/api/budget/:budgetId',
//     [authJwt.verifyToken],
//     controller.findBudgetByBudgetId
//   );

//   // post apis
//   app.post(
//     '/api/budget',
//     [authJwt.verifyToken],
//     controller.createBudget
//   );

//   // put apis
//   app.put(
//     '/api/budget/:budgetId',
//     [authJwt.verifyToken],
//     controller.updateBudget
//   );

//   // delete apis
//   app.delete(
//     '/api/budget/:budgetId',
//     [authJwt.verifyToken],
//     controller.deleteBudget
//   );
// };

// exports.budgetRoute = budgetRoute;

