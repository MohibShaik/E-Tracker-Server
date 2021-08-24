const db = require("../models");
const Transaction = db.transaction;

// to save a new transaction
exports.create = (req, res) => {
    console.log(req.body);
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
    else if (!req.body.categoryName) {
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

    const transaction = {
        type: req.body.type,
        payeeName: req.body.payeeName,
        categoryName: req.body.categoryName,
        transactionDate: req.body.transactionDate,
        amount: req.body.amount,
        userId: req.body.userId
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
    Transaction.findAll({ where: { userId: req.body.userId } }).then((data) => {
        if (data)
            res.status(200).send({
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
                data: data,
            });
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "something went wrong",
        });
    });
};

exports.updateTransaction = (req, res) => {
    const id = req.params.id;
    Transaction.updateTransaction(req.body, {
        where: {
            id: id
        }
    }).then((data) => {
        if (data == 1) {
            res.send({
                message: "Transaction was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found or req.body is empty!`
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
    console.log(req.params.id);
    const id = req.params.id;
    Transaction.findByPk(id).then((data) => {
        console.log(data);
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
    const TransactionId = req.params.id;
    Transaction.destroy({
        where: {
            id: TransactionId
        }
    }).then(response => {
        console.log(response);
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
