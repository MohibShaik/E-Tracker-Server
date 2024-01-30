const controller = require('../controllers/transaction.controller.js');
const authJwt = require('../middleware/authJWT.js');

var express = require('express');
var router = express.Router();

const transactionRoute = (router) => {
  // get apis
  router.get(
    '/api/Transaction/:transactionId',
    [authJwt.verifyToken],
    controller.findTransactionById
  );
  router.get(
    '/api/AllTransactions/:userId',
    [authJwt.verifyToken],
    controller.getTransactionListByUserId
  );
  router.get(
    '/api/transaction-categories',
    controller.findTransactionCategories
  );
  router.get(
    '/api/AllTransactions/:categoryId',
    controller.getTransactionListByCategoryId
  );
  router.get(
    '/api/budgetTransactions/:budgetId',
    controller.getTransactionListByBudgetId
  );

  // post apis
  router.post(
    '/api/Transaction',
    [authJwt.verifyToken],
    controller.createTransaction
  );


  router.post(
    '/newCategory',
    controller.saveNewCategory
  );
  // put apis
  router.put(
    '/api/Transaction/:transactionId',
    [authJwt.verifyToken],
    controller.updateTransaction
  );

  // delete apis
  router.delete(
    '/api/Transaction/:transactionId',
    [authJwt.verifyToken],
    controller.deleteTransactionById
  );
};
exports.transactionRoute = transactionRoute;
