const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Task = db.task;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { task } = require("../models");
const { response } = require("express");

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
    userId: req.body.userId
  };

  Task.create(task)
    .then((data) => {
      res.status(200).send({
        message: "task created successfully",
        data: data
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something went wrong",
      });
    });
};

//get tasksList by userId 
exports.getTaskListByUserId = (req, res) => {
  console.log(req.params.userId , req.params ,  'req.body.userId')
  Task.findAll({ where: { userId: req.params.userId } }).then((data) => {

    res.status(200).send({
      data: data,
    });

  }).catch((err) => {
    res.status(500).send({
      message: err.message || "something went wrong",
    });
  });
}

// find all tasks
exports.findAllTasks = (res, req) => {
  Task
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

exports.updateTask = (req, res) => {
  const id = req.params.id;
  Task.updateTask(req.body, {
    where: {
      id: id
    }
  }).then((data) => {
    if (data == 1) {
      res.send({
        message: "Tutorial was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  }).catch((err) => {
    res.status(500).send({
      message: "something went wrong",
    });
  });


};


// to find a task by id
exports.findTaskById = (req, res) => {
  console.log(req);
  const id = req.params.id;
  Task.findByPk(id).then((data) => {
    if (data===1) {
      res.status(200).send({
        message: 'success',
        data: data
      })
    }

    else{
      res.status(404).send({
        message: 'No task found with the given id',
      })
    }
  }).catch((error) => {
    res.status(404).send({
      message: 'No task found with the given id '
    })
  })
};

// to delete a task
exports.deleteTaskById = (req, res) => {
  const taskId = req.params.id;
  Task.destroy({
    where: {
      id: taskId
    }
  }).then(response => {
    console.log(response);
    if (response === 1) {
      res.status(200).send({
        message: 'Task deleted successfully'
      })
    }
    else {
      res.status(400).send({
        message: 'No task found with the given id'
      })
    }
  }).catch(error => {
    res.status(500).send(error)
  })
};
