const controller = require("../controllers/budget.controller.js");
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
    app.get("/api/allBudgets/:userId", [authJwt.verifyToken], controller.getAllBudgetsByUserId);
    app.get("/api/budget/:budgetId", [authJwt.verifyToken], controller.findBudgetByBudgetId);


    // post apis 
    app.post("/api/budget", [authJwt.verifyToken], controller.createBudget);


    // put apis 
    app.put("/api/budget/:budgetId", [authJwt.verifyToken], controller.updateBudget);

    // delete apis 
    app.delete("/api/budget/:budgetId", [authJwt.verifyToken], controller.deleteBudget);

};
