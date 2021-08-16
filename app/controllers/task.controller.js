const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Task = db.task;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// to save a new task
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Task should have a title",
    });
    return;
  }

  const task = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    dueDate: req.body.dueDate,
    priority: req.body.priority ? req.body.priority : "low",
    status: req.body.status ? req.body.status : "active",
  };

  Task.create(task)
    .then((data) => {
      res.status(200).send({
        message: "task created successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something wen wrong",
      });
    });
};

// find all tasks
exports.findAllTasks = (res, req) => {
  task
    .findAll()
    .then((data) => {
      res.status(200).send({
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "something went wrong",
      });
    });
};

// to find a task by id
exports.findTaskById = (req, res) => {};

// to update a task
exports.updateTask = (req, res) => {};

exports.deleteTaskById = (req, res) => {};
