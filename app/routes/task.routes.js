// const controller = require('../controllers/task.controller.js');
// const authJwt = require('../middleware/authJWT.js');

// var express = require('express');
// var router = express.Router();

// const taskRoute = (router) => {
//   app.post(
//     '/api/task',
//     [authJwt.verifyToken],
//     controller.createTask
//   );
//   app.get(
//     '/api/task/:userId',
//     [authJwt.verifyToken],
//     controller.getTaskListByUserId
//   );
//   app.put(
//     '/api/task/:taskId',
//     [authJwt.verifyToken],
//     controller.updateTask
//   );
//   app.get(
//     '/api/task/:taskId',
//     [authJwt.verifyToken],
//     controller.findTaskById
//   );
//   app.delete(
//     '/api/task/:taskId',
//     [authJwt.verifyToken],
//     controller.deleteTaskById
//   );
// };
// exports.taskRoute = taskRoute;
