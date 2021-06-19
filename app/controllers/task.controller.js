const db = require("../models");
const task = db.tasks;
const Op = db.Sequelize.Op;

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
    status: req.body.status ? req.body.status : "active",
  };

  task
    .create(task)
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

// to find a task by id
exports.findTaskById = (req, res) => {};

// to update a task
exports.updateTask = (req, res) => {};

exports.deleteTaskById = (req, res) => {};
