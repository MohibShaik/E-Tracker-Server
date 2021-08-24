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

    app.post("/api/Transaction", controller.create);
    app.get("/api/AllTransactions", controller.getTransactionListByUserId);
    app.put("/api/Transaction/:id", controller.updateTransaction);
    app.get("/api/Transaction/:id", controller.findTransactionById);
    app.delete("/api/Transaction/:id", controller.deleteTransactionById);

};
