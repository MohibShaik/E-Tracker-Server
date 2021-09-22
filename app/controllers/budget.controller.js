const db = require("../models");
const Budget = db.budget;
// const TransactionCategories = db.transaction_categories;

exports.createBudget = (req, res, next) => {
    console.log(req.body, 'budget payload');

    if (!req.body.name) {
        res.status(400).send({
            message: "budget name is required",
        });
        return;
    }

    else if (!req.body.amount) {
        res.status(400).send({
            message: "budget amount is required",
        });
        return;
    }

    const budgetData = {
        budget_category: req.body.budgetCategory,
        budget_category_id: req.body.budgetCategoryId,
        budget_name: req.body.name,
        budget_created_date: req.body.createdDate,
        budget_amount: req.body.amount,
        created_user_uid: req.body.userId,
        is_active: req.body.isActive ? req.body.isActive : true,
    }

    Budget.create(budgetData).then((data) => {
        if (data) {
            res.status(200).send({
                message: "budget created successfully",
                data: data
            });
        }
    }).catch((error) => {
        res.status(500).send({
            message: error || 'something went wrong'
        })
    })

}


//get all budgets by userId 
exports.getAllBudgetsByUserId = (req, res) => {
    Budget.findAll({ where: { created_user_uid: req.params.userId } }).then((data) => {
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

// update a budget 
exports.updateBudget = (req, res) => {
    Budget.update(req.body, {
        where: {
            budget_uid: req.params.budgetId
        }
    }).then((data) => {
        console.log(data, 'response')
        if (data == 1) {
            res.send({
                message: "Budget was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update budget with id=${req.params.budgetId}. budget was not found or req.body is empty!`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "something went wrong",
        });
    });
};

// delete a budget
exports.deleteBudget = (req, res) => {
    Budget.destroy({
        where: {
            budget_uid: req.params.budgetId,
        }
    }).then(response => {
        if (response === 1) {
            res.status(200).send({
                message: 'budget deleted successfully'
            })
        }
        else {
            res.status(400).send({
                message: 'No budget found with the given id'
            })
        }
    }).catch(error => {
        res.status(500).send(error)
    })
};

exports.findBudgetByBudgetId = (req, res) => {
    const budgetId = req.params.budgetId;
    console.log(budgetId, 'budgetId hiiiiiiiiiiiiiiiiii')
    Budget.findByPk(req.params.budgetId).then((data) => {
        console.log(data, 'data');
        res.status(200).send({
            message: 'success',
            data: data
        })
    }).catch((error) => {
        res.status(404).send({
            message: 'No budget found with the given id '
        })
    })
};


