// const { verifySignUp } = require("../middleware");
const controller = require("../controllers/task.controller.js");
const authJwt = require("../middleware/authJWT.js");


module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/Task", [authJwt.verifyToken], controller.create);
  app.get("/api/Task/:userId", [authJwt.verifyToken], controller.getTaskListByUserId);
  app.put("/api/Task/:id", [authJwt.verifyToken], controller.updateTask);
  app.get("/api/Task/:id", [authJwt.verifyToken], controller.findTaskById);
  app.delete("/api/Task/:id", [authJwt.verifyToken], controller.deleteTaskById);

};
