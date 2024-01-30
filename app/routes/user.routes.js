// // const { authJwt } = require("../middleware");
// const authJwt = require('../middleware/authJWT.js');
// const controller = require('../controllers/user.controller.js');

// var express = require('express');
// var router = express.Router();

// const userRoute = (router) => {
//   app.get('/api/test/all', controller.allAccess);

//   app.get(
//     '/api/test/user',
//     [authJwt.verifyToken],
//     controller.userBoard
//   );

//   app.get(
//     '/api/test/mod',
//     [authJwt.verifyToken, authJwt.isModerator],
//     controller.moderatorBoard
//   );

//   app.get(
//     '/api/test/admin',
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );

//   // profile api
//   app.get(
//     '/api/user/profile/:userId',
//     [authJwt.verifyToken],
//     controller.getUserProfile
//   );
// };

// exports.userRoute = userRoute;

