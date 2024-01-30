const config = require("../config/auth.config");
const User = require('../models/user.model');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    password: bcrypt.hashSync(req.body.password, 8),
    is_active: req.body.isActive ? req.body.isActive : true
  })
    .then((user) => {
      res.status(200).send({
        message: "User registered successfully!",
        data: {
          id: user.user_uid,
          username: user.username,
          email: user.email,
          mobileNumber: user.mobileNumber,
        }
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });


      res.status(200).send({
        id: user.user_uid,
        username: user.username,
        email: user.email,
        accessToken: token,
        gender: user.gender,
        mobileNumber: user.mobileNumber,
        
      });

    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
