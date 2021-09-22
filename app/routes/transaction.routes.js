const controller = require("../controllers/transaction.controller.js");
const authJwt = require("../middleware/authJWT.js");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    // get apis
    app.get("/api/Transaction/:transactionId", [authJwt.verifyToken], controller.findTransactionById);
    app.get("/api/AllTransactions/:userId", [authJwt.verifyToken], controller.getTransactionListByUserId);
    app.get("/api/transaction-categories", controller.findTransactionCategories);
    app.get("/api/AllTransactions/:categoryId", controller.getTransactionListByCategoryId);
    app.get("/api/budgetTransactions/:budgetId", controller.getTransactionListByBudgetId);



    // post apis 
    app.post("/api/Transaction", [authJwt.verifyToken], controller.createTransaction);


    // put apis 
    app.put("/api/Transaction/:transactionId", [authJwt.verifyToken], controller.updateTransaction);

    // delete apis 
    app.delete("/api/Transaction/:transactionId", [authJwt.verifyToken], controller.deleteTransactionById);

};
