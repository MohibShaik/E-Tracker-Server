// const db = require("../models");
// const config = require("../config/auth.config");
// const User = db.user;
// const Role = db.role;
// const Op = db.Sequelize.Op;
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");


// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

// exports.userBoard = (req, res) => {
//   res.status(200).send("User Content.");
// };

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };

// exports.moderatorBoard = (req, res) => {
//   res.status(200).send("Moderator Content.");
// };

// exports.getUserProfile = (request, response) => {
//   const UserId = request.params.userId

//   User.findByPk(UserId).then((data) => {
//     response.status(200).send({
//       data: data
//     })
//   }).catch((error) => {
//     response.status(500).send({
//       error
//     })
//   })

// }