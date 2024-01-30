const transService = require('../services/transaction-service');
const Transaction = require('../models/transaction.model');
const Budget = require('../models/budget.model');
const TransactionCategories = require('../models/category.model');

// to create a new transaction
exports.createTransaction = (req, res) => {
  if (!req.body.type) {
    res.status(400).send({
      message: 'Transaction type is required',
    });
    return;
  } else if (!req.body.payeeName) {
    res.status(400).send({
      message: 'Transaction should have a payee name',
    });
    return;
  } else if (!req.body.amount) {
    res.status(400).send({
      message: 'Transaction amount is rquired',
    });
    return;
  } else if (!req.body.budgetId) {
    res.status(400).send({
      message: 'budget id is required',
    });
    return;
  }

  if (req.body.budgetId) {
    Budget.findByPk(req.body.budgetId)
      .then((data) => {
        if (data) {
          const transaction = {
            transaction_type: req.body.type,
            payeeName: req.body.payeeName,
            transaction_created_date:
              req.body.transactionDate,
            transaction_amount: req.body.amount,
            user_uid: req.body.userId,
            budget_uid: req.body.budgetId,
            transaction_category: data?.budget_category,
            transaction_category_id:
              data?.budget_category_id,
            is_active: req.body.isActive
              ? req.body.isActive
              : true,
          };

          Transaction.create(transaction)
            .then((data) => {
              if (data)
                res.status(200).send({
                  message:
                    'Transaction created successfully',
                  data: data,
                });
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message || 'something went wrong',
              });
            });
        }
      })
      .catch((error) => {
        res.status(404).send({
          message: 'No budget found with the given id ',
        });
      });
  }
};

exports.saveNewCategory = async function (
  request,
  response
) {
  try {
    const saveResponse =
      await transService.saveNewCategory(request);
    response
      .status(saveResponse.statusCode)
      .send(saveResponse);
  } catch (error) {
    const errorResponse = utils.errorResponseBuilder(
      request,
      response,
      error
    );
    response
      .status(errorResponse.statusCode)
      .send(errorResponse);
  }
};

//get TransactionsList by userId
exports.getTransactionListByUserId = (req, res) => {
  Transaction.findAll({
    where: { user_uid: req.params.userId },
  })
    .then((data) => {
      if (data)
        res.status(200).send({
          message: 'success',
          data: data,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'something went wrong',
      });
    });
};

// returns the transactions based on catgeoryId
exports.getTransactionListByCategoryId = (req, res) => {
  Transaction.findAll({
    where: {
      transaction_category_id: req.params.categoryId,
    },
  })
    .then((data) => {
      if (data)
        res.status(200).send({
          message: 'success',
          data: data,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'something went wrong',
      });
    });
};

exports.getTransactionListByBudgetId = (req, res) => {
  Transaction.findAll({
    where: { budget_uid: req.params.budgetId },
  })
    .then((data) => {
      if (data)
        res.status(200).send({
          message: 'success',
          data: data,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'something went wrong',
      });
    });
};

// find all Transactions
exports.findAllTransactions = (res, req) => {
  Transaction.findAll()
    .then((data) => {
      if (data)
        res.status(200).send({
          message: 'success',
          data: data,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'something went wrong',
      });
    });
};

exports.updateTransaction = (req, res) => {
  Transaction.updateTransaction(req.body, {
    where: {
      transaction_uid: req.params.transactionId,
    },
  })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: 'Transaction was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Transaction with id=${req.params.transactionId}. Maybe Transaction was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'something went wrong',
      });
    });
};

// to find a Transaction by id
exports.findTransactionById = (req, res) => {
  Transaction.findByPk(req.params.transactionId)
    .then((data) => {
      if (data === 1) {
        res.status(200).send({
          message: 'success',
          data: data,
        });
      } else {
        res.status(404).send({
          message: 'No Transaction found with the given id',
        });
      }
    })
    .catch((error) => {
      res.status(404).send({
        message: 'No Transaction found with the given id ',
      });
    });
};

// to delete a Transaction
exports.deleteTransactionById = (req, res) => {
  Transaction.destroy({
    where: {
      transaction_uid: req.params.transactionId,
    },
  })
    .then((response) => {
      if (response === 1) {
        res.status(200).send({
          message: 'Transaction deleted successfully',
        });
      } else {
        res.status(400).send({
          message: 'No Transaction found with the given id',
        });
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findTransactionCategories = (request, response) => {
  TransactionCategories.findAll()
    .then((data) => {
      if (data) {
        response.status(200).send({
          message: 'success',
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'something went wrong',
      });
    });
};
