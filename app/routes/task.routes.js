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

  app.post("/api/task", [authJwt.verifyToken], controller.createTask);
  app.get("/api/task/:userId", [authJwt.verifyToken], controller.getTaskListByUserId);
  app.put("/api/task/:taskId", [authJwt.verifyToken], controller.updateTask);
  app.get("/api/task/:taskId", [authJwt.verifyToken], controller.findTaskById);
  app.delete("/api/task/:taskId", [authJwt.verifyToken], controller.deleteTaskById);

};
