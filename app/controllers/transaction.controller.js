const db = require("../models");
const Transaction = db.transaction;
const TransactionCategories = db.transaction_categories;


// to create a new transaction
exports.createTransaction = (req, res) => {
    if (!req.body.type) {
        res.status(400).send({
            message: "Transaction type is required",
        });
        return;
    }
    else if (!req.body.payeeName) {
        res.status(400).send({
            message: "Transaction should have a payee name",
        });
        return;
    }
    else if (!req.body.categoryId) {
        res.status(400).send({
            message: "Transaction should have a category",
        });
        return;
    }
    else if (!req.body.amount) {
        res.status(400).send({
            message: "Transaction amount is rquired",
        });
        return;
    }
    else if (!req.body.budgetId) {
        res.status(400).send({
            message: "budget id is rquired",
        });
        return;
    }

    const transaction = {
        transaction_type: req.body.type,
        payeeName: req.body.payeeName,
        transaction_created_date: req.body.transactionDate,
        transaction_amount: req.body.amount,
        user_uid: req.body.userId,
        budget_uid: req.body.budgetId,
        transaction_category: req.body.categoryName,
        transaction_category_id: req.body.categoryId,
        is_active: req.body.isActive ? req.body.isActive : true,
    };

    Transaction.create(transaction)
        .then((data) => {
            if (data)
                res.status(200).send({
                    message: "Transaction created successfully",
                    data: data
                });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "something went wrong",
            });
        });
};

//get TransactionsList by userId 
exports.getTransactionListByUserId = (req, res) => {
    Transaction.findAll({ where: { user_uid: req.params.userId } }).then((data) => {
        if (data)
            res.status(200).send({
                message: "success",
                data: data,
            });

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "something went wrong",
        });
    });
}

// returns the transactions based on catgeoryId 
exports.getTransactionListByCategoryId = (req, res) => {
    Transaction.findAll({ where: { transaction_category_id: req.params.categoryId } }).then((data) => {
        if (data)
            res.status(200).send({
                message: "success",
                data: data,
            });

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "something went wrong",
        });
    });
}

// find all Transactions
exports.findAllTransactions = (res, req) => {
    Transaction.findAll().then((data) => {
        if (data)
            res.status(200).send({
                message: "success",
                data: data,
            });
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "something went wrong",
        });
    });
};

exports.updateTransaction = (req, res) => {
    Transaction.updateTransaction(req.body, {
        where: {
            transaction_uid: req.params.transactionId
        }
    }).then((data) => {
        if (data == 1) {
            res.send({
                message: "Transaction was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Transaction with id=${req.params.transactionId}. Maybe Transaction was not found or req.body is empty!`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "something went wrong",
        });
    });


};


// to find a Transaction by id
exports.findTransactionById = (req, res) => {
    Transaction.findByPk(req.params.transactionId).then((data) => {
        if (data === 1) {
            res.status(200).send({
                message: 'success',
                data: data
            })
        }

        else {
            res.status(404).send({
                message: 'No Transaction found with the given id',
            })
        }
    }).catch((error) => {
        res.status(404).send({
            message: 'No Transaction found with the given id '
        })
    })
};

// to delete a Transaction
exports.deleteTransactionById = (req, res) => {
    Transaction.destroy({
        where: {
            transaction_uid: req.params.transactionId
        }
    }).then(response => {
        if (response === 1) {
            res.status(200).send({
                message: 'Transaction deleted successfully'
            })
        }
        else {
            res.status(400).send({
                message: 'No Transaction found with the given id'
            })
        }
    }).catch(error => {
        res.status(500).send(error)
    })
};

exports.findTransactionCategories = (request, response) => {
    TransactionCategories.findAll().then((data) => {
        console.log('success');

        if (data) {
            response.status(200).send({
                message: 'success',
                data: data
            });
        }

    }).catch((err) => {
        console.log(err, 'error');
        res.status(500).send({
            message: err.message || "something went wrong",
        });
    });
};
