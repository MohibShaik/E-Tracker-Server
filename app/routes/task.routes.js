// const { verifySignUp } = require("../middleware");
const controller = require("../controllers/task.controller");
const { authJwt } = require("../middleware");


module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/Task", [authJwt.verifyToken], controller.create);
  app.get("/api/Task", controller.getTaskListByUserId);
  app.put("/api/Task/:id", controller.updateTask);
  app.get("/api/Task/:id", controller.findTaskById);
  app.delete("/api/Task/:id", controller.deleteTaskById);




  // app.post("/api/auth/signin", controller.signin);
};
