const middleware = require('../middleware/verifySignup');
const controller = require('../controllers/auth.controller.js');
var express = require('express');
var router = express.Router();

const authRoute = (router) => {
  router.post(
    '/auth/signup',
    [middleware.checkDuplicateUsernameOrEmail],
    controller.signup
  );

  router.post('/auth/signin', controller.signin);
};

exports.authRoute = authRoute;

